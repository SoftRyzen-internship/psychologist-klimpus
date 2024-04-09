import { cache } from 'react';

import {
  DedupedFetchOptions,
  DedupedFetchResult,
  PerformRequestOptions,
} from './types';

const dedupedFetch = cache(
  async (
    body: string,
    options?: DedupedFetchOptions,
  ): Promise<DedupedFetchResult> => {
    const { includeDrafts = false, revalidate = false } = options || {};

    const headers = {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
      ...(revalidate !== false ? { 'X-Revalidate': 'true' } : {}),
    };

    const response = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers,
      body,
      next: { revalidate },
    });

    const responseBody = await response.json();

    if (!response.ok) {
      return {
        error: {
          status: response.status,
          statusText: response.statusText,
          responseBody,
        },
      };
    }

    return { data: responseBody };
  },
);

export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  revalidate,
}: PerformRequestOptions): Promise<any> {
  const result = await dedupedFetch(
    JSON.stringify({ query, variables, revalidate }),
    { includeDrafts, revalidate },
  );

  if (result.error) {
    throw new Error(
      `${result.error.status} ${result.error.statusText}: ${JSON.stringify(
        result.error.responseBody,
      )}`,
    );
  }

  return result.data;
}
