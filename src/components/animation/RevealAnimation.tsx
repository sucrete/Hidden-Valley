'use client';
import { cn } from '@/utils/cn';
import Springer from '@/utils/springer';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactElement, Ref, cloneElement, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealAnimationProps {
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
    'data-ns-animate'?: boolean;
  }>;
  duration?: number;
  delay?: number;
  offset?: number;
  instant?: boolean;
  start?: string;
  end?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  useSpring?: boolean;
  rotation?: number;
  animationType?: 'from' | 'to';
  className?: string;
}

const RevealAnimation = ({
  children,
  duration = 0.6,
  delay = 0,
  offset = 60,
  instant = false,
  start = 'top 90%',
  end = 'top 50%',
  direction = 'down',
  useSpring = false,
  rotation = 0,
  animationType = 'from',
  className = '',
}: RevealAnimationProps) => {

  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return;

    const spring = useSpring ? Springer.default(0.2, 0.8) : null;
    const ease = useSpring && spring ? spring : 'power2.out';

    // 1. Define the "FROM" state
    const fromVars = {
      opacity: 0.01,
      x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
      y: direction === 'down' ? offset : direction === 'up' ? -offset : 0,
      rotation: rotation,
    };

    // 2. Define the "TO" state (The final visible state)
    const toVars = {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      duration: duration,
      delay: delay,
      immediateRender: false,
      ease: ease,
      // 3. Add ScrollTrigger here
      scrollTrigger: !instant
        ? {
            trigger: element,
            start: start,
            end: end,
            toggleActions: 'play none none none', // Ensures it plays and stays played
            once: true, // This is key for lists - it won't flicker or get stuck if you scroll fast
            // markers: true, // 👈 ADD THIS TEMPORARILY
          }
        : undefined,
    };
    

    // 4. Execute the fromTo
    gsap.fromTo(element, fromVars, toVars);

    if (!instant) {
      // Refreshing ScrollTrigger ensures GSAP recalculates 
      // where the 'wrapped' items actually sit in the DOM.
      ScrollTrigger.refresh();
    }
  }, [duration, delay, offset, instant, start, end, direction, useSpring, rotation, animationType]);

  // Early return if children is not valid (after all hooks)
  if (!children || !React.isValidElement(children)) {
    console.warn('RevealAnimation: Invalid children prop provided');
    return null;
  }

  // Clone the child element and add the ref, className, and data-ns-animate attribute
  return cloneElement(children, {
    ref: elementRef,
    className: cn(children?.props?.className, className),
    'data-ns-animate': true,
  });
};

export default RevealAnimation;
