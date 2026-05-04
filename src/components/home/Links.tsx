'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { ArrowIcon } from '@/icons';
import gsap from 'gsap';
import { SmallArrow } from '../ui/Icons';
import { cn } from '@/utils/cn';

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
  onPointerMove: (ev: PointerEvent, card: HTMLElement) => void;
}

const LinkCard = ({ linkItem, onPointerMove }: LinkCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const slotA = useRef<HTMLSpanElement>(null);
  const slotB = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMove = (ev: PointerEvent) => onPointerMove(ev, card);
    card.addEventListener('pointermove', handleMove as EventListener);
    return () => card.removeEventListener('pointermove', handleMove as EventListener);
  }, [onPointerMove]);

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
      { y: 0, rotateX: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.4)', delay: 0.15, transformOrigin: 'center top' },
    );
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
  };
const HOVER_DURATION = 'duration-600';
  return (
    <Link href={linkItem.URL} className="block group">
      <div
        ref={cardRef}
        className={`card-body w-full h-[160px] md:h-[175px] lg:h-[175px] xl:h-[190px] rounded-[12px] relative overflow-hidden cursor-none transition-shadow ${HOVER_DURATION} group-hover:shadow-md/10`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {/* LAYER 1: Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div className={`overlay absolute inset-0 bg-scrim-bottom rounded-[12px] transition-opacity ${HOVER_DURATION} group-hover:opacity-65 z-10`} />
          <div
            className={`the-bg-image bg-cover bg-center absolute inset-0 transition-transform ${HOVER_DURATION} ease-out group-hover:scale-100`}
            style={{ backgroundImage: `url(${linkItem.imgURL})` }}
          />
        </div>

        {/* LAYER 2: The Floating Arrow */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-40 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full backdrop-blur-[2px] shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 border-[1.25px] border-solid border-[#ffffff76]"
          style={{
            transform: `translate(var(--x, 0px), var(--y, 0px)) translate(-50%, -50%)`,
            willChange: 'transform',
          }}>
          <ArrowIcon className="stroke-white size-4 md:size-5 -rotate-45" />
        </div>

        {/* LAYER 3: The Content */}
        <div className="w-full h-full px-5 pb-4 md:px-6 md:pb-5 flex items-end justify-start relative z-30">
          <div className="link-title relative overflow-hidden h-[1.5em] w-full" style={{ perspective: '450px' }}>
            <span
              ref={slotA}
              className="absolute bottom-0 left-0 text-white text-[15px] md:text-[16px] lg:text-[16px] whitespace-nowrap">
              {linkItem.text}
            </span>
            <span
              ref={slotB}
              className="absolute bottom-0 left-0 text-ns-green text-[15px] md:text-[16px] lg:text-[16px] whitespace-nowrap opacity-0">
              {linkItem.text}
            </span>
            <SmallArrow className={cn('size-7 -rotate-45 -mb-1 absolute bottom-0 right-0 fill-[#ffffff8a]')}/>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Links = () => {
  const handlePointerMove = (ev: PointerEvent, card: HTMLElement) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${ev.clientX - rect.left}px`);
    card.style.setProperty('--y', `${ev.clientY - rect.top}px`);
  };

  return (
    <section className="py-16 md:py-20 lg:py-[70px] xl:py-[50px] relative bg-background-2">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-14">
          {IntrasiteLinks.map((linkItem, index) => (
            <RevealAnimation key={linkItem.id} delay={index * 0.1}>
              <div className="w-full">
                <LinkCard linkItem={linkItem} onPointerMove={handlePointerMove} />
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
