'use client';

import cuteDog from '@public/images/home/cute-dog.jpg'
import camoedGolfer from '@public/images/shared/vert-camoed-golfer.webp'

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

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-[100px] bg-background-2 dark:bg-background-5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-[50px] lg:py-[80px]">

          {/* Left — text */}
          <div className="flex flex-col space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan w-fit">About us</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="leading-[1.1]">
                Hidden Valley Golf Course
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="space-y-4">
                <p className="text-primary/70">
                  Nestled in the heart of Cottage Grove, Oregon, Hidden Valley Golf Course is a golfer's paradise
                  offering an unparalleled blend of scenic fairways and breathtaking Willamette Valley vistas. Our
                  meticulously maintained course has earned a reputation as one of the premier golf destinations in
                  the Pacific Northwest.
                </p>
                <p className="text-primary/70">
                  Immerse yourself in the beauty of lush, manicured landscapes as you tee off on our pristine course.
                  With rolling terrain, strategically placed hazards, and stunning natural surroundings, every round
                  here is an unforgettable experience — whether you're a seasoned pro or just starting out.
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* Right — images */}
          <div className="relative h-[520px] lg:h-[620px]">

            {/* Large portrait image */}
            <RevealAnimation delay={0.2} direction="right">
              <div className="absolute left-0 top-0 w-[68%] h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={camoedGolfer}
                  alt="Hidden Valley Golf Course"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealAnimation>

            {/* Floating parallax image */}
            <div
              ref={floatingRef}
              className="absolute bottom-[-10px] right-0 w-[52%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-background-5"
              style={{ willChange: 'transform' }}
            >
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
