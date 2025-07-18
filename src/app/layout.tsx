import { Providers } from '$/components/providers/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextJS Template',
  description: 'NextJS Template',
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
