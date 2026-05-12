import HalfHero from '@/components/ui/HalfHero';
import CourseInfo from '@/components/course/CourseInfo';
import Rules from '@/components/course/Rules';
import Tees from '@/components/course/Tees';
import NewsletterSignup from '@/components/shared/NewsletterSignup';

import Footer from '@/components/shared/footer/Footer';

import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Course Layout | A preview of each hole at Hidden Valley Golf Course.',
};

const Course = () => {
  return (
    <Fragment>
      <main>
        <HalfHero
          BGHeroSrc="/images/shared/bl-1.webp"
          imageOffset="-25%"
          imageHeight="200%"
          overlayOpacity=".25"
          heroText="Course"
        />
        <CourseInfo />
        {/* <CourseSlider/> */}
        {/* <NewsletterSignup className='bg-[#f0f0f0]' inputFieldClass='placeholder:text-black/70 focus:border-black bg-accent'/> */}
        <Rules />
        <Tees />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Course;
