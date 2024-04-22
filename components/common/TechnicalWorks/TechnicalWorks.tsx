import React from 'react';
import data from '@/data/common.json';

export const TechnicalWorks = () => {
  return (
    <div className="container">
      <div className="mx-auto flex h-full w-full max-w-full flex-col items-center justify-center  pt-[100px] text-center md:max-w-[500px] xl:max-w-[700px]">
        <p className="mainText">{data.techInfo.text1}</p>
        <p className="mainText">{data.techInfo.text2}</p>
        <p className="mainText">{data.techInfo.text3}</p>
      </div>
    </div>
  );
};
