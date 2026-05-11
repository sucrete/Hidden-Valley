'use client';
import { cn } from '@/utils/cn';

import { CheckIcon } from '@/icons';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import whiteAndBlueFlags from '@public/images/course/white-and-blue-flags.svg';
import redAndGoldFlags from '@public/images/course/red-and-gold.svg';

// About list data
const RulesData = [
  { id: 1, text: 'Right of #8 - red stake.' },
  { id: 2, text: 'Free line of sight relief from maintenance shop right side of #5.' },
  { id: 3, text: 'Pond on #1 & #4 - red stakes.' },
  { id: 4, text: 'Out of bounds: right side of 2, 4, 6 & 7.' },
  { id: 5, text: 'Water hazards: 6 & 8, red stakes.' },
  { id: 6, text: 'Avoid slow play. Please play ready golf. Invite faster players to play through.' },
  { id: 7, text: 'Keep golf carts 30 feet from tees and greens.' },
  { id: 8, text: 'Misuse of power carts will terminate play. No money refunded.' },
  { id: 9, text: 'Each player must have golf clubs and a bag.' },
];

const EtiquetteData = [
  { id: 1, text: 'Replace divots.' },
  { id: 2, text: 'Repair ball marks on greens.' },
  { id: 3, text: 'Be mindful of maintenance personnel on the course.' },
];

const Rules = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-20 bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="relative z-10 col-span-12">
          <div className="grid grid-cols-1 gap-10 px-6 pt-14 pb-10 max-sm:px-5 max-sm:py-8 md:px-11 lg:grid-cols-6 lg:gap-8">
            <div className="flex first-column flex-col gap-8 lg:col-span-2 md:flex-row lg:flex-col">
              <RevealAnimation delay={0.1}>
                <div className="bg-accent dark:bg-background-6 rounded-[20px] p-10 w-full md:max-w-[371px] text-center relative overflow-hidden">
                  <p className=" text-black">
                    <Image
                      src={whiteAndBlueFlags}
                      className="size-4 inline-block mr-2 -mt-[3px]"
                      width={25}
                      height={25}
                      alt=""
                    />
                    Men (white and blue tees)
                  </p>
                  <p className="off-black">Rating: 66.5</p>
                  <p className="off-black">Slope: 125</p>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <div className="bg-accent dark:bg-background-6 rounded-[20px] p-10 w-full md:max-w-[371px] text-center relative overflow-hidden">
                  <p className=" text-black">
                    <Image
                      src={redAndGoldFlags}
                      className="size-4 inline-block mr-2 -mt-[3px]"
                      width={25}
                      height={25}
                      alt=""
                    />
                    Ladies (red and gold tees)
                  </p>
                  <p className="off-black">Rating: 67.6</p>
                  <p className="off-black">Slope: 120</p>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <div className="bg-ns-dark-green dark:bg-background-6 rounded-[20px] p-10 w-full md:max-w-[371px] relative overflow-hidden realistic-shadow-md border-1 border-[#ffffff44]">
                  <p className=" text-accent mb-2">Please...</p>
                  {EtiquetteData.map((item) => (
                    <RevealAnimation key={item.id} delay={0.4 + item.id * 0.08}>
                      <div className={cn('flex flex-row justify-start', item.id < 3 ? 'pb-2' : '')}>
                        <div className="basis-[30px] shrink-0 flex pt-[3px]">
                          <span className="size-5 rounded-full bg-[#ffffff18] block">
                            <CheckIcon className="fill-accent" />
                          </span>
                        </div>
                        <div className="grow">
                          <p className="text-accent/60 flex items-center gap-4 max-sm:gap-2.5 mb-1">{item.text}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </RevealAnimation>
            </div>
            <div className="second-col lg:col-span-4 bg-accent dark:bg-background-6 rounded-[20px] p-11 w-full">
              <h5 className="text-black max-sm:text-heading-6 mb-8">Local Rules</h5>
              <div className="space-y-5 max-sm:space-y-3">
                {RulesData.map((item) => (
                   <RevealAnimation key={item.id} delay={0.4 + item.id * 0.08}>
                      <div className={cn('flex flex-row justify-start', item.id < 3 ? 'pb-2' : '')}>
                        <div className="basis-[30px] shrink-0 flex pt-[3px]">
                          <span className="size-5 rounded-full bg-[#00000018] block">
                            <CheckIcon className="fill-black" />
                          </span>
                        </div>
                        <div className="grow">
                          <p className="text-black flex items-center gap-4 max-sm:gap-2.5 mb-1">{item.text}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Rules.displayName = 'Rules';
export default Rules;
