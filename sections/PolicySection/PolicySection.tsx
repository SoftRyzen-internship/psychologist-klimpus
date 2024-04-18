import React from 'react';
import { StructuredText } from 'react-datocms';

type IPolicy = {
  data: any;
};
export const PolicySection = ({ data }: IPolicy) => {
  return (
    <section className=" bg-customBackground pb-6 pt-[30px] md:pb-[29px] md:pt-[40px] xl:pb-[74px] xl:pt-[100px] ">
      <div className="container xl:w-[1072px]">
        <h1 className="font-fixel text-text01 mb-9 text-3xl  uppercase md:mb-[40px] md:w-full xl:mb-6 xl:w-[819px] xl:text-5xl">
          Політика конфіденційності
        </h1>
        <div className="prose-h2:text-text01 prose-p:text-text02  prose-ul:text-text02  prose-li:marker:text-text02 prose-a:text-text02 prose max-w-none prose-h2:mb-6 prose-h2:mt-0 prose-h2:font-roboto prose-h2:text-lg prose-h2:font-medium prose-p:mb-8 prose-p:font-roboto  prose-p:text-sm  prose-a:font-roboto prose-a:text-sm prose-ul:m-0 prose-li:m-0 prose-li:text-sm md:prose-p:mb-12 xl:prose-h2:mb-7 xl:prose-h2:text-2xl xl:prose-p:mb-6 xl:prose-p:text-[18px] xl:prose-p:leading-[1.5] [&>p:nth-child(19)]:mb-0 [&>p:nth-child(5)]:mb-5 ">
          <StructuredText data={data} />
        </div>
      </div>
    </section>
  );
};
