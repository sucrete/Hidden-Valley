import { HiddenValleyLogo } from '../../svg-components/HiddenValleyLogos';
import Link from 'next/link';

interface LogoBoxProps {
  isScrolled?: boolean;
  className?: string;
}
const LogoBox = ({ isScrolled }: LogoBoxProps) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[175px] md:w-[300px] duration-400 ${isScrolled ? 'top-[52%] scale-100' : ' top-[60%] scale-100 md:scale-110'}`}>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="max-w-[100%] duration-500">
          <HiddenValleyLogo className={isScrolled ? 'fill-black' : 'fill-white'} />
        </figure>
      </Link>
    </div>
  );
};

export default LogoBox;
