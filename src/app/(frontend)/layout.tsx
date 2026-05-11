import '@/app/globals.css';

import Navbar from '@/components/shared/header/Navbar';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { AppContextProvider } from '@/context/AppContext';

import { sanityFetch } from '@/sanity/lib/live';
import { TICKER_QUERY } from '@/sanity/lib/queries';

import { SanityLive } from '@/sanity/lib/live';

import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

import { ReactNode, Suspense } from 'react';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data: tickerData } = await sanityFetch({ query: TICKER_QUERY });

  return (
    <>
      <AppContextProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar notices={tickerData?.tickerArray ?? []} tickerVisible={tickerData?.tickerQuestion ?? false} />
          <Suspense>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </AppContextProvider>
      <SanityLive />
    </>
  );
}
