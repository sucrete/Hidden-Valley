'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CourseInfo = () => {
  return (
    <section className="bg-background-4 dark:bg-background-7">
      <div className="main-container pt-14  md:pt-16 lg:pt-[88px] xl:pt-[100px] px-6 max-sm:px-5 md:px-11">
        <div className="text-center border-b-1 border-[#0000001a] pb-14  md:pb-16  lg:pb-[88px]  xl:pb-[7rem]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5 font-[500]"> charm abounds </span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-[20px] leading-[1.1]">
              A course for any skill level.
              {/* <br className="hidden md:block" />
              of lowering your score */}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-[426px]:text-tagline-2 max-w-[750px] max-[426px]:max-w-[320px] mx-auto">
              Charming, peaceful and secluded, but don't let the serenity fool you. With two par fives in the first four
              holes, you'll soon know you're in for a golfing challenge. Nestled along the northern slope of Mount
              David, this historic ten-hole course is home to gigantic old oak trees and bounded by Bennet Creek and the
              Coastal Willamette river. The atmosphere at Hidden Valley is relaxed and friendly. Dan Nord, the
              owner/operator is often found out on the course giving specialized care to its playability which, as
              golfers attest, just keeps improving. USGA Rules Govern All Play.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
