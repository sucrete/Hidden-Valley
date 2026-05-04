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
  const slotA = useRef<HTMLSpanElement>(null);
  const slotB = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.set(arrowRef.current, { rotate: -45 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(slotA.current, {
      y: -20,
      rotateX: 45,
      opacity: 0,
      duration: 0.2,
      ease: 'power3.in',
      transformOrigin: 'center bottom',
    });
    gsap.fromTo(
      slotB.current,
      { y: 20, rotateX: -45, opacity: 0 },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.4)',
        delay: 0.15,
        transformOrigin: 'center top',
      },
    );
    gsap.to(arrowRef.current, { rotate: 0, duration: 0.4, ease: 'back.out(1.4)', delay: 0.15 });
  };

  const handleMouseLeave = () => {
    gsap.to(slotB.current, {
      y: 20,
      rotateX: -45,
      opacity: 0,
      duration: 0.2,
      ease: 'power3.in',
      transformOrigin: 'center top',
    });
    gsap.fromTo(
      slotA.current,
      { y: -20, rotateX: 45, opacity: 0 },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.4)',
        delay: 0.15,
        transformOrigin: 'center bottom',
      },
    );
    gsap.to(arrowRef.current, { rotate: -45, duration: 0.4, ease: 'back.out(1.4)', delay: 0.15 });
  };
  const HOVER_DURATION = 'duration-300';
  return (
    <Link href={linkItem.URL} className="block group">
      <div
        className={`card-body w-full h-[160px] md:h-[175px] lg:h-[175px] xl:h-[190px] rounded-[15px] relative overflow-hidden cursor-pointer transition-shadow ${HOVER_DURATION}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {/* LAYER 1: Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className={`overlay absolute inset-0 bg-scrim-bottom rounded-[12px] transition-opacity ${HOVER_DURATION} group-hover:opacity-50 z-10`}
          />
          <div
            className={`the-bg-image bg-cover bg-center absolute inset-0 transition-transform ${HOVER_DURATION} ease-out`}
            style={{ backgroundImage: `url(${linkItem.imgURL})` }}
          />
        </div>

        {/* LAYER 2: The Content */}
        <div className="w-full h-full px-5 pb-4 md:px-6 md:pb-5 flex items-end justify-start relative z-30">
          <div className="link-title relative overflow-hidden h-[1.5em] w-full" style={{ perspective: '450px' }}>
            <span
              ref={slotA}
              className="absolute bottom-0 left-0 text-white semibold tracking-normal text-[15px] md:text-[16px] lg:text-[16px] whitespace-nowrap">
              {linkItem.text}
            </span>
            <span
              ref={slotB}
              className="absolute bottom-0 left-0 text-white semibold text-[15px] md:text-[16px] lg:text-[16px] whitespace-nowrap opacity-0">
              {linkItem.text}
            </span>
            <span ref={arrowRef} className="absolute bottom-0 right-0 -mb-1">
              <SmallArrow className="size-7 fill-white" />
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
