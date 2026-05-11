'use client';

import cuteDog from '@public/images/home/cute-dog.jpg';
import camoedGolfer from '@public/images/shared/vert-camoed-golfer.webp';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevealAnimation from '../animation/RevealAnimation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CourseIntro = () => {
  const sectionRef = useRef(null);
  const floatingRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(floatingRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="pt-0 pb-16 md:py-20 lg:py-[100px] bg-background-2 dark:bg-background-5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-24 lg:items-center py-[50px] lg:py-[80px]">
          {/* Left — text */}
          <div className="flex flex-col space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-basic w-fit">About us</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="leading-[1.1]">A delightful experience from the first tee.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="space-y-4">
                <p className="text-primary/70">
                  Two par fives in the opening four holes will tell you everything you need to know about Hidden Valley.
                  The setting is quiet — old oaks, open sky, Bennet Creek winding through — but the course doesn't let
                  you get too comfortable.
                </p>
                <p className="text-primary/70">
                  Set on the northern slope of Mount David, this nine-hole course was shaped by the land rather than
                  imposed on it. The atmosphere is unhurried and the care put into its playability shows — it's the kind
                  of place you find yourself coming back to.
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* Right — images */}
          <div className="relative h-[520px] lg:h-[620px]">
            {/* Large portrait image */}
            <RevealAnimation delay={0.2} direction="right" className="absolute left-0 top-0 w-[85%] lg:w-[68%] h-full">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
                <Image src={camoedGolfer} alt="Hidden Valley Golf Course" fill className="object-cover" />
              </div>
            </RevealAnimation>

            {/* Floating parallax image */}
            <div
              ref={floatingRef}
              className="absolute bottom-[-10px] right-0 w-[52%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-background-5"
              style={{ willChange: 'transform' }}>
              <Image
                src={cuteDog}
                alt="cute dog hanging out on a Hidden Valley fairway"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
