export type DedupedFetchOptions = {
  includeDrafts?: boolean;
  revalidate?: number | false;
};

export type DedupedFetchResult = {
  data?: any;
  error?: {
    status: number;
    statusText: string;
    responseBody: any;
  };
};

export type PerformRequestOptions = {
  query: string;
  variables?: Record<string, any>;
  includeDrafts?: boolean;
  revalidate?: number | false;
};
