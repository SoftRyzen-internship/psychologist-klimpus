import React from 'react';
import type { Metadata } from 'next';
import classNames from 'classnames';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import meta from '@/data/meta.json';

import { Raleway, Roboto } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-roboto',
  display: 'swap',
});

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL as string;

const { title, description, manifest, openGraph, icons } = meta;

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title,
  description,
  icons,
  manifest,
  alternates: {
    canonical: NEXT_PUBLIC_URL,
  },
  openGraph: {
    ...openGraph,
    url: NEXT_PUBLIC_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={classNames(
          raleway.variable,
          roboto.variable,
          'flex h-full min-h-screen flex-col bg-white',
        )}
      >
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
