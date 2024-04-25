import React from 'react';
import { StructuredText } from 'react-datocms';
import policy from '@/data/common.json';

type IPolicy = {
  data: any;
};
export const PolicySection = ({ data }: IPolicy) => {
  return (
    <section className="w-full pb-6 pt-10 md:pb-[56px] md:pt-20 xl:pb-[76px] xl:pt-[100px]">
      <div className="container xl:w-[1072px]">
        <h1 className="mb-6 font-raleway text-[32px] font-semibold uppercase leading-[1.5] md:mb-10 xl:mb-16 xl:w-[819px] xl:text-5xl xl:text-[44px] xl:leading-[1.5]">
          {policy.policyTitle}
        </h1>
        <div
          className="mainText prose-li:text-mainText prose-p:text-roboto prose-h2:text-roboto prose max-w-none prose-h2:mb-4 prose-h2:mt-0 prose-h2:font-roboto prose-h2:text-base  prose-h2:font-semibold prose-h2:leading-[1.35] prose-p:mb-4 prose-p:mt-0 prose-p:font-roboto prose-p:leading-[1.5] prose-p:text-mainBlack  first:prose-p:mb-0 prose-a:font-roboto prose-a:text-sm prose-a:text-mainBlack prose-a:no-underline prose-ul:m-0 prose-ul:text-mainBlack prose-li:m-0 prose-li:marker:text-mainBlack md:prose-h2:mb-6  md:prose-h2:text-lg md:prose-h2:leading-[1.35] md:prose-p:mb-6 md:prose-p:leading-[1.5]
        xl:prose-h2:mb-6 xl:prose-h2:text-xl xl:prose-h2:leading-[1.35] xl:prose-p:mb-6 xl:prose-p:leading-[1.5]"
        >
          <StructuredText data={data} />
        </div>
      </div>
    </section>
  );
};
