import React from 'react';
import { Form } from '@/components/common/Form';
import { SectionTitle } from '@/components/ui/SectionTitle';
import s from './FormSection.module.css';
import form from '@/data/form.json';

export const FormSection = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle className="mf:mb-9 m-auto mb-6 flex justify-center">
          <div
            className={`${s.titleIcon} text-cardTextLg relative flex flex-col items-center justify-center after:md:h-[48px] after:md:w-[86px] before:xl:h-[57px] before:xl:w-[103px] after:xl:h-[57px] after:xl:w-[103px]`}
          >
            <div className="hidden w-full flex-col md:flex">
              <span className="flex w-full justify-center">
                {form.contactsTitle.line1}
              </span>
              <span className="flex justify-end text-accent md:w-[470px] xl:w-[625px]">
                {form.contactsTitle.line2}
              </span>
              <span className="flex text-accent md:ml-[86px] xl:ml-[120px]">
                {form.contactsTitle.line3}
              </span>
            </div>

            <div className="flex w-full flex-col md:hidden">
              <span className="flex w-full justify-center">
                {form.contactsTitle.line1}
              </span>
              <span className="flex w-[314px] justify-end text-accent">
                {form.contactsTitle.line4}
              </span>
              <span className="flex justify-center text-accent">
                {form.contactsTitle.line5}
              </span>
              <span className="ml-[80px] flex text-accent">
                {form.contactsTitle.line6}
              </span>
            </div>
          </div>
        </SectionTitle>
        <h3 className="mb-[54px] text-start font-roboto text-sm font-normal leading-[1.5] md:mb-[116px] md:text-center xl:mb-9 xl:text-base">
          {form.subtitle}
        </h3>
        <Form />
      </div>
    </section>
  );
};
