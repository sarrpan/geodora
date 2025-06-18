// src/app/[locale]/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
// ΔΙΟΡΘΩΣΗ 1: Αλλάζουμε το import για τις γραμματοσειρές
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "../globals.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getMessages } from 'next-intl/server';

export async function generateStaticParams() {
  return [{ locale: 'el' }, { locale: 'en' }, { locale: 'de' }, { locale: 'fr' }];
}

export default async function RootLayout(props: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { children } = props;
  const messages = await getMessages();

  return (
    <html lang={props.params.locale}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      {/* ΔΙΟΡΘΩΣΗ 2: Χρησιμοποιούμε τις μεταβλητές από τα νέα imports */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-bg`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}