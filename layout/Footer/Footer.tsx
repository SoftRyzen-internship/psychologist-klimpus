import React from 'react';
import { FooterItem } from '@/components/ui/FooterItem';
import { Contacts } from '@/components/ui/Contacts';
import { Socials } from '@/components/ui/Socials';
import data from '@/data/common.json';

export const Footer = () => {
  const { footer } = data;

  return (
    <footer className="w-full rounded-t-[20px] bg-mainBlack py-8">
      <div className="container">
        <div className="flex w-full flex-col border-b-[1px] border-solid border-strokeFooter pb-8 md:pb-[38px] xl:pb-12">
          <p className="mb-[35px] font-raleway text-lg font-semibold leading-[1.35] text-white md:mb-12 md:text-xl xl:text-[22px]">
            {data.footer.title}
          </p>
          <div className="flex w-full flex-col md:flex-row md:justify-between ">
            <Contacts isFooter={true} className="smOnly:mb-[27px]" />
            <Socials />
          </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:items-center md:gap-6 ">
          <p className="text font-roboto">{data.footer.text}</p>
          <ul className="flex items-center ">
            {footer.links.map(item => (
              <FooterItem
                key={item.name}
                name={item.name}
                href={item.path}
                ariaL={item.ariaLabel}
              />
            ))}
          </ul>
          <a
            href={data.footer.href}
            className="ml-0 text-white transition hover:text-rose focus:text-rose active:text-accent md:ml-auto"
          >
            {data.footer.policyText}
          </a>
        </div>
      </div>
    </footer>
  );
};
