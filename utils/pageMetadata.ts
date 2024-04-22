import baseMeta from '@/data/meta/base.json';
import aboutMeta from '@/data/meta/about.json';
import policyMeta from '@/data/meta/policy.json';
import individualMeta from '@/data/meta/individualConsultation.json';
import familyMeta from '@/data/meta/familyConsultation.json';
import groupMeta from '@/data/meta/groupConsultation.json';

export const pageMetadata = (page: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL as string;
  const { title, description, keywords, openGraph } = baseMeta;

  const getMeta = () => {
    switch (page) {
      case 'about':
        return { data: aboutMeta, url: '/about' };
      case 'individual-consultation':
        return { data: individualMeta, url: '/individual-consultation' };
      case 'family-consultation':
        return { data: familyMeta, url: '/family-consultation' };
      case 'group-consultation':
        return { data: groupMeta, url: '/group-consultation' };
      case 'policy':
        return { data: policyMeta, url: '/policy' };
      default:
        return { data: baseMeta, url: baseUrl };
    }
  };

  const metaData = getMeta();

  return {
    title: metaData?.data.title || title,
    description: metaData?.data.description || description,
    keywords: metaData?.data.keywords || keywords,
    alternates: {
      canonical: metaData.url || baseUrl,
    },
    openGraph: { ...openGraph, url: baseUrl },
    twitter: {
      title: metaData?.data.title || title,
      description: metaData?.data.description || description,
      keywords: metaData?.data.keywords || keywords,
    },
  };
};
