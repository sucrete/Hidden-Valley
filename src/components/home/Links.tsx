'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import gsap from 'gsap';
import { SmallArrow } from '../ui/Icons';

const IntrasiteLinks = [
  {
    id: 1,
    URL: '/greens-fees',
    text: 'Greens Fees',
    imgURL: '/images/shared/another-morning-scene.webp',
  },
  {
    id: 2,
    URL: '/course',
    text: 'Course',
    imgURL: '/images/shared/HiddenValleyGC8.jpg',
  },
  {
    id: 3,
    URL: '/lessons',
    text: 'Lessons',
    imgURL: '/images/shared/golf-practice.webp',
  },
];

interface LinkCardProps {
  linkItem: (typeof IntrasiteLinks)[0];
}

const LinkCard = ({ linkItem }: LinkCardProps) => {
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.set(arrowRef.current, { rotate: -45 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(arrowRef.current, { rotate: 0, duration: 0.3, ease: 'back.out(1.4)' });
  };

  const handleMouseLeave = () => {
    gsap.to(arrowRef.current, { rotate: -45, duration: 0.3, ease: 'back.out(1.4)' });
  };
  const HOVER_DURATION = 'duration-200';
  return (
    <Link href={linkItem.URL} className="block group">
      <div
        className={`card-body w-full h-[160px] md:h-[175px] lg:h-[175px] xl:h-[190px] rounded-[15px] relative overflow-hidden cursor-pointer transition-shadow ${HOVER_DURATION}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {/* LAYER 1: Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className={`overlay absolute inset-0 bg-scrim-bottom opacity-70 rounded-[12px] transition-opacity ${HOVER_DURATION} group-hover:opacity-70 z-10`}
          />
          <div
            className={`the-bg-image bg-cover bg-center absolute inset-0 transition-transform ${HOVER_DURATION} ease-out group-hover:scale-[1.03]`}
            style={{ backgroundImage: `url(${linkItem.imgURL})` }}
          />
        </div>

        {/* LAYER 2: The Content */}
        <div className="w-full h-full px-5 pb-4 md:px-6 md:pb-5 flex items-end justify-start relative z-30">
          <div className="link-title relative h-[1.5em] w-full">
            <span className="absolute bottom-0 left-0 text-white tracking-normal text-[15px] md:text-[16px] lg:text-[16px] whitespace-nowrap">
              {linkItem.text}
            </span>
            <span ref={arrowRef} className="absolute bottom-0 right-0 -mb-1">
              <SmallArrow
                className={`size-7 transition-opacity opacity-70 fill-[#fff] ${HOVER_DURATION} group-hover:opacity-100`}
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Links = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[70px] xl:py-[80px] relative bg-background-2">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-14">
          {IntrasiteLinks.map((linkItem, index) => (
            <RevealAnimation key={linkItem.id} delay={index * 0.1}>
              <div className="w-full">
                <LinkCard linkItem={linkItem} />
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
