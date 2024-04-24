import React from 'react';
import { FooterItem } from '@/components/ui/FooterItem';
import { Contacts } from '@/components/common/Contacts';
import { Socials } from '@/components/common/Socials';
import { FooterLink } from '@/components/ui/FooterLink';
import data from '@/data/common.json';

export const Footer = () => {
  const { footer } = data;

  return (
    <footer
      id={data.section.footer}
      className="w-full rounded-t-[20px] bg-mainBlack py-8"
    >
      <div className="container">
        <div className="flex w-full flex-col border-b-[1px] border-solid border-strokeFooter pb-8 md:pb-9 xl:pb-12">
          <p className="mb-8 font-raleway text-lg font-semibold uppercase leading-[1.5] text-white  md:mb-[48px] md:text-xl md:leading-[1.5] xl:text-[22px] xl:leading-[1.5]">
            {data.footer.title}
          </p>
          <div className="flex w-full flex-col md:flex-row md:justify-between ">
            <Contacts isFooter={true} className="smOnly:mb-6" />
            <Socials />
          </div>
        </div>

        <div className="flex flex-col items-start pb-8 pt-8  md:flex-row md:items-center md:pb-6 md:pt-6 xl:pb-8 xl:pt-8">
          <p className="font-roboto text-xs font-normal leading-[1.35] text-white md:mr-4 xl:mr-8 xl:text-sm smOnly:mb-2">
            {data.footer.text}
          </p>
          <ul className="flex items-center smOnly:mb-6">
            {footer.links.map(item => (
              <FooterItem
                key={item.name}
                name={item.name}
                href={item.path}
                ariaL={item.ariaLabel}
              />
            ))}
          </ul>
          <FooterLink />
        </div>
        <p className="font-roboto text-xs font-normal leading-[1.35] text-white xl:text-sm">
          {data.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
