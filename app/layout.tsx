import React from 'react';
import type { Metadata } from 'next';
import classNames from 'classnames';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import { Raleway, Roboto } from 'next/font/google';

import meta from '@/data/meta/base.json';

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

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_URL as string;

  const {
    title,
    description,
    manifest,
    keywords,
    twitter,
    openGraph,
    icons,
    robots,
  } = meta;

  return {
    title: title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    manifest,
    keywords,
    twitter,
    openGraph: { ...openGraph, url: baseUrl },
    icons,
    robots,
  };
}

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
