'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LogoGoIt from '@/public/icons/logoGo.svg';
import LogoSoftRyzen from '@/public/icons/logoSoft.svg';
import Succes from '@/public/icons/success.svg';
import Error from '@/public/icons/error.svg';
import Instagram from '@/public/icons/instagram.svg';
import Facebook from '@/public/icons/facebook.svg';
import Telegram from '@/public/icons/telegram.svg';
import Watsup from '@/public/icons/watsup.svg';
import Email from '@/public/icons/mail.svg';
import EmailAccent from '@/public/icons/mailRed.svg';
import Phone from '@/public/icons/phone.svg';
import PhoneAccent from '@/public/icons/phoneRed.svg';
import s from './Icons.module.css';
import { Logo } from '../Logo';

export const Icons = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  // const handleOpen = () => {
  //   setIsOpen(true);
  //   document.body.style.overflow = 'hidden';
  // };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container">
      <Logo onClick={handleClose} />
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center justify-center">
            <Image
              className="h-[133px] w-[133px] object-cover object-center"
              src="/images/logo/profLogo1.webp"
              width={133}
              height={133}
              priority
              alt="Член Асоціації практикуючих психологів"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="object-cover object-center"
              src="/images/logo/profLogo2.webp"
              width={133}
              height={133}
              priority
              alt="Член Української Спілки Психотерапевтів"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="object-cover object-center"
              src="/images/logo/profLogo3.webp"
              width={133}
              height={133}
              priority
              alt="Член HАПУ Національна Асоціація Психологів України"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="object-cover object-center"
              src="/images/logo/profLogo4.webp"
              width={133}
              height={133}
              priority
              alt="Член HАПУ Національна Асоціація Психологів України"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-[30px]">
          <Image
            className="h-[42px] w-[75px] object-cover object-center md:h-[48px] md:w-[86px] xl:h-[57px] xl:w-[103px] "
            src="/images/logo/formImg1.webp"
            width={103}
            height={57}
            priority
            alt="портрет дівчини на світлому фоні"
          />
          <Image
            className="h-[42px] w-[75px] object-cover object-center md:h-[48px] md:w-[86px] xl:h-[57px] xl:w-[103px] "
            src="/images/logo/formImg2.webp"
            width={103}
            height={57}
            priority
            alt="портрет дівчини, що посміхаєтсья на світлому фоні"
          />
        </div>
        <div className="flex items-center justify-center">
          <p
            className={`${s.titleIcon} text-cardTextLg relative inline-block after:md:h-[48px] after:md:w-[86px] before:xl:h-[57px] before:xl:w-[103px] after:xl:h-[57px] after:xl:w-[103px]`}
          >
            Детальніше
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-cardTextLg relative inline-block font-roboto text-accent after:absolute after:left-[100px] after:top-0 after:h-[25px] after:w-[25px] after:content-arrowRightSm">
            Детальніше
          </p>
          <p className="text-cardTextLg relative inline-block font-roboto text-accent after:absolute after:left-[60px] after:top-0  after:h-[25px] after:w-[25px] after:content-arrowRightSm">
            Більше
          </p>
          <p className="text-cardTextLg relative inline-block font-roboto text-accent after:absolute after:left-[80px] after:top-0  after:h-[25px] after:w-[25px] after:content-arrowDiagonal">
            Контакти
          </p>
          <p className="text-cardTextLg relative inline-block cursor-pointer font-roboto text-mainBlack transition after:absolute after:left-[70px] after:top-[20%] after:h-[15px] after:w-[15px] after:content-arrowDown hover:after:top-[15%] hover:after:content-arrowUp">
            Послуги
          </p>
        </div>
        <div className="flex items-center justify-center gap-[30px] bg-mainBlack py-4">
          <LogoGoIt className="h-[17px] w-[57px]" />
          <LogoSoftRyzen className="h-[17px] w-[114px]" />
        </div>
        <div className="flex items-center justify-center gap-[30px]">
          <Succes className="h-[64px] w-[64px] md:h-[80px] md:w-[80px]" />
          <Error className="h-[64px] w-[64px] md:h-[80px] md:w-[80px]" />
        </div>
        <div className="flex items-center justify-center gap-[30px] bg-mainBlack py-4">
          <Instagram className="h-[32px] w-[32px]" />
          <Facebook className="h-[32px] w-[32px]" />
          <Telegram className="h-[32px] w-[32px]" />
          <Watsup className="h-[32px] w-[32px]" />
        </div>
        <div className="flex items-center justify-center gap-[30px] bg-mainBlack py-4">
          <Email className="h-[25px] w-[25px]" />
          <Phone className="h-[25px] w-[25px]" />
          <EmailAccent className="h-[25px] w-[25px]" />
          <PhoneAccent className="h-[25px] w-[25px]" />
        </div>
      </div>
    </div>
  );
};
