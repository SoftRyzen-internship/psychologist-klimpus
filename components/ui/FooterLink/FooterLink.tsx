'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import data from '@/data/common.json';

export const FooterLink = () => {
  const pathname = usePathname();
  const footer = data.footer;

  return (
    <Link
      className="ml-0 font-roboto text-xs font-normal leading-[1.35] text-white transition hover:text-rose focus:text-rose active:text-accent md:ml-auto xl:text-sm"
      href={pathname === '/policy' ? '/' : `${footer.href}`}
    >
      {pathname === '/policy' ? footer.home : footer.policyText}
    </Link>
  );
};
