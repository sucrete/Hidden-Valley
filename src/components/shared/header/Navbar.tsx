'use client';

import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { splitMenuLeft, splitMenuRight } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import LogoBox from './LogoBox';
import MobileMenu from '../MobileMenu';
import NoticeTicker from './NoticeTicker';
import MobileMenuButton from './MobileMenuButton';
import NavItemLink from './NavItemLink';
import NavCTAButton from './NavCTAButton';

interface NavbarFourProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
  menuColor?: string;
  isScrolledColor?: string;
  notices?: string[];
  tickerVisible?: boolean;
}

const NavbarFour = ({ className, btnClassName, notices = [], tickerVisible = false }: NavbarFourProps) => {
  const { isScrolled } = useNavbarScroll(100);
  return (
    <MobileMenuProvider>
      <NoticeTicker isScrolled={isScrolled} notices={notices} visible={tickerVisible} />
      <header
        className={cn(
          'fixed left-0 top-0 z-50 flex w-full items-center px-25 transition-[background-color,border-color,backdrop-filter,box-shadow,translate] duration-500 ease-in-out border-transparent',
          isScrolled
            ? 'translate-y-0 bg-white/90 dark:bg-transparent backdrop-blur-[9px] border-b border-solid border-[#0000000d]'
            : tickerVisible
              ? 'translate-y-[39px] md:translate-y-9'
              : 'translate-y-3 md:translate-y-0',
          className,
        )}>
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between relative">
          <div className="flex items-center gap-[76px]">
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center gap-6">
                {splitMenuLeft.map((item) => {
                  return (
                    <li key={item?.id} className={cn('py-6', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                      <NavItemLink variant={isScrolled ? 'border' : 'white'} item={item} />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <LogoBox isScrolled={isScrolled} />
          <div className="flex items-center gap-[30px]">
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center gap-6">
                {splitMenuRight.map((item) => {
                  // mega menu render
                  return (
                    <li key={item?.id} className={cn('py-6', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                      <NavItemLink variant={isScrolled ? 'border' : 'white'} item={item} />
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <NavCTAButton
                href="/book-tee-time"
                btnClassName={cn('btn-header-bushwood hover:btn-white-dark dark:hover:btn-white', btnClassName)}
                label="Book Tee Time"
              />
              <MobileMenuButton />
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

export default NavbarFour;
