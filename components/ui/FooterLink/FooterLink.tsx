'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import data from '@/data/common.json';

export const FooterLink = () => {
  const pathname = usePathname();
  const footer = data.footer;

  return (
    <Link
      className="ml-0 text-white transition hover:text-rose focus:text-rose active:text-accent md:ml-auto"
      href={
        pathname === '/' ||
        pathname === '/about' ||
        pathname === '/individual-consultation' ||
        pathname === '/family-consultation' ||
        pathname === '/group-consultation'
          ? `${footer.href}`
          : '/'
      }
    >
      {pathname === '/' ||
      pathname === '/about' ||
      pathname === '/individual-consultation' ||
      pathname === '/family-consultation' ||
      pathname === '/group-consultation'
        ? footer.policyText
        : footer.home}
    </Link>
  );
};
