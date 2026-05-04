'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { splitMenuLeft, splitMenuRight } from '@/data/header';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { BushwoodLogoScript } from '../svg-components/BushwoodLogos';

const MobileMenu = () => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, closeMenu]);

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'fixed top-0 right-0 z-[999] h-screen w-full bg-white transition-transform duration-300 ease-in-out sm:w-[360px] xl:hidden flex flex-col',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}>
      <div className="flex items-center justify-end p-6 sm:p-8">
        <button
          onClick={closeMenu}
          className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-all duration-200"
          aria-label="Close mobile menu">
          <span className="sr-only">Close Menu</span>
          <span className="absolute block h-0.5 w-4 bg-black/50 rotate-45" />
          <span className="absolute block h-0.5 w-4 bg-black/50 -rotate-45" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 sm:px-8">
        <ul>
          {splitMenuLeft.map((item) => (
            <li key={item.id} className="border-b border-black/8">
              <Link
                href={item.href!}
                onClick={closeMenu}
                className="block py-3 text-[14px] text-black/60 hover:text-black transition-colors">
                {item.label}
              </Link>
            </li>
          ))}

          {splitMenuRight.map((item) => (
            <li key={item.id} className="border-b border-black/8">
              <Link
                href={item.href!}
                onClick={closeMenu}
                className="block py-3 text-[14px] text-black/60 hover:text-black transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 sm:px-8 pt-8 pb-8">
        <BushwoodLogoScript className="bushwood-logo-is-scrolled w-[50%] mx-auto block" />
      </div>
    </aside>
  );
};

export default MobileMenu;
