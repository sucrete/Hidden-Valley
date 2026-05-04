import Hero from '@/components/home/Hero';

import Links from '@/components/home/Links';
import CourseIntro from '@/components/home/CourseIntro';
import BigPic from '@/components/home/BigPic';
import NewsletterSignup from '@/components/shared/NewsletterSignup';

import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Hidden Valley Golf Course | A scenic golf destination in Cottage Grove, OR.',
};

const Home = async () => {
  return (
    <Fragment>
      <main>
        <Hero />
        <Links />
        <CourseIntro />
        <BigPic src="/images/hero-images/hidden-2.jpg" info="Putting green at Hole 12" />
       
        {/* <NewsletterSignup inputFieldClass="placeholder:text-black/70 focus:border-black bg-accent" /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
