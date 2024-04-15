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
        <div className="flex w-full flex-col">
          <p>{data.footer.title}</p>
          <div className="flex w-full flex-col md:flex-row md:justify-between">
            <Contacts isFooter={true} />
            <Socials />
          </div>
        </div>

        <div className="flex items-center gap-6 ">
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
        </div>
      </div>
    </footer>
  );
};
