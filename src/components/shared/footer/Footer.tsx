import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { HiddenValleyLogo } from '@/components/svg-components/HiddenValleyLogos';
import facebook from '@public/images/shared/facebook-logo.svg';
import instagram from '@public/images/icons/instagram.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

import WeatherModule from './WeatherModule';

import TQSGears from './TQSGears';

import { BushwoodLogoScript } from '@/components/svg-components/BushwoodLogos';

interface FooterOneProps {
  className?: string;
  defaultTheme?: 'light' | 'dark';
}

const FooterOne: FC<FooterOneProps> = ({ className, defaultTheme }) => {
  return (
    <footer
      className={cn(
        'bg-[#00251e] dark:bg-background-8 relative h-auto xl:h-[700px] bg-[radial-gradient(ellipse_400%_120%_at_40%_0%,#01251e,#011914)]',
        className,
      )}>
      <div className="main-container">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-15 md:gap-y-16 pt-16 pb-12 xl:pt-[6rem]">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px] flex flex-col items-center mx-auto xl:mx-0">
                <Link href='/'><figure className="max-w-[250px] mt-[5px]">
                  <HiddenValleyLogo className="fill-white w-full h-auto" />
                </figure></Link>
                
                <div className="flex items-center gap-3 mt-5">
                  {/* <Link
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100067837771001&locale=en_GB#"
                    className="footer-social-link">
                    <span className="sr-only">Facebook</span>
                    <Image className="w-auto h-[15px]" src={facebook} alt="Facebook" />
                  </Link> */}
                  {/* <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.instagram.com" className="footer-social-link">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link> */}
                </div>
                <p className="text-accent/60 text-tagline-1 mt-4 ">Open 7 days a week, 7am - 7pm.</p>

                <div className=" flex flex-col text-center">
                  <Link
                    target="_blank"
                    href="tel:15419423046"
                    className="text-accent/60 text-tagline-1 mt-4 hover:text-accent transition duration-250">
                    (541) 942-3046
                  </Link>
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/AWegNoEJFkFcmEuu6"
                    className="text-accent/60 text-tagline-1   mt-4  hover:text-accent transition duration-250">
                    775 N River Rd
                    <br />
                    Cottage Grove, OR 97424
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-16 md:gap-y-8 xl:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-5 flex flex-col items-center md:items-start">
                  <p className=" text-tagline-1  text-accent/60  ">Pages</p>
                  <ul className="space-y-0 sm:space-y-1 text-center md:text-left">
                    <li>
                      <Link href="/greens-fees" className="footer-link">
                        Green Fees
                      </Link>
                    </li>
                    <li>
                      <Link href="/course" className="footer-link">
                        Our Course
                      </Link>
                    </li>

                    <li>
                      <Link href="/lessons" className="footer-link">
                        Lessons
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-link">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-tee-time" className="footer-link">
                        Book Tee Time
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-8">
              <RevealAnimation delay={0.5}>
                <div>
                  <WeatherModule />
                </div>
              </RevealAnimation>

              <div className="flex flex-col space-y-3 text-center md:text-right pt-[3rem]">
                <RevealAnimation delay={0.7} offset={5} start="top 105%">
                  <p className="text-tagline-1 text-accent/60">
                    Copyright Hidden Valley Golf Course © {new Date().getFullYear()}
                  </p>
                </RevealAnimation>

                <RevealAnimation delay={0.75} offset={5} start="top 105%">
                  <div className="TQS-attribution-wrapper flex flex-row justify-center md:justify-end">
                    <TQSGears />
                    <p className="text-tagline-1 text-accent/60">Powered by TeeQuest</p>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pt-[35px] pb-[100px] text-center">
          <RevealAnimation delay={0.7} offset={5} duration={2}>
            <div>
              <HiddenValleyLogo className="fill-[#012d25]" />
            </div>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle defaultTheme={defaultTheme} />
    </footer>
  );
};

export default FooterOne;
