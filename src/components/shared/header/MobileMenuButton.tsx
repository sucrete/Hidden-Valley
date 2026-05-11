'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';

interface MMButtonProps {
  className?: string;
}

const MobileMenuButton = ({ className = '' }: MMButtonProps) => {
  const { openMenu } = useMobileMenuContext();

  return (
    <div className="block xl:hidden">
      <button
        onClick={openMenu}
        className={cn(
          'nav-hamburger relative bg-transparent sm:bg-background-4 sm:hover:bg-ns-dark-green flex size-10 sm:size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-200 group',
          className,
        )}
        aria-label="Open mobile menu">
        <span className="sr-only">Menu</span>
        {[0, 1, 2].map((i) => (
          <span key={i} className="nav-hamburger-bar block h-[1.5px] w-6" />
        ))}
      </button>
    </div>
  );
};

export default MobileMenuButton;
