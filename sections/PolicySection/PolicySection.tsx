import React from 'react';
import { StructuredText } from 'react-datocms';
// import { SectionTitle } from '@/components/common/SectionTitle';
import policy from '@/data/common.json';

type IPolicy = {
  data: any;
};
export const PolicySection = ({ data }: IPolicy) => {
  return (
    <section className="w-full py-10 md:py-20 xl:py-[100px]">
      <div className="container xl:w-[1072px]">
        <h1 className="mb-6 font-raleway text-3xl font-semibold uppercase md:mb-10 xl:mb-16 xl:w-[819px] xl:text-5xl">
          {policy.policyTitle}
        </h1>
        <div className="mainText prose-li:text-mainText  prose  max-w-none prose-h2:mb-4 prose-h2:mt-0 prose-h2:font-roboto prose-h2:text-base prose-h2:font-semibold prose-p:mb-4 prose-p:mt-0  prose-p:font-roboto prose-p:text-mainBlack first:prose-p:mb-0 prose-a:font-roboto prose-a:text-sm prose-a:text-mainBlack prose-ul:m-0  prose-ul:text-mainBlack prose-li:m-0 prose-li:marker:text-mainBlack md:prose-h2:mb-6 md:prose-h2:text-lg md:prose-p:mb-6 xl:prose-h2:mb-6 xl:prose-h2:text-xl xl:prose-p:mb-6">
          <StructuredText data={data} />
        </div>
      </div>
    </section>
  );
};
