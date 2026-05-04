
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const whiteTees = [
  { id: 1, hole: 1, yardage: 485, par: 5 },
  { id: 2, hole: 2, yardage: 350, par: 4 },
  { id: 3, hole: 3, yardage: 130, par: 3 },
  { id: 4, hole: 4, yardage: 500, par: 5 },
  { id: 5, hole: 5, yardage: 301, par: 4 },
  { id: 6, hole: 6, yardage: 329, par: 4 },
  { id: 7, hole: 7, yardage: 187, par: 3 },
  { id: 8, hole: 8, yardage: 135, par: 3 },
  { id: 9, hole: 9, yardage: 381, par: 4 },
];

const blueTees = [
  { id: 10, hole: 10, yardage: 474, par: 5 },
  { id: 11, hole: 11, yardage: 325, par: 4 },
  { id: 12, hole: 12, yardage: 165, par: 3 },
  { id: 13, hole: 13, yardage: 490, par: 5 },
  { id: 14, hole: 14, yardage: 291, par: 4 },
  { id: 15, hole: 15, yardage: 316, par: 4 },
  { id: 16, hole: 16, yardage: 175, par: 3 },
  { id: 17, hole: 17, yardage: 125, par: 3 },
  { id: 18, hole: 18, yardage: 366, par: 4 },
];

const Tees = () => {
  return (
    <section className="bg-background-4 dark:bg-background-7 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[9rem] xl:pt-0">
      <div className="main-container">
        <div className="accordion-container px-6 pb-10 max-sm:px-5 max-sm:py-8 md:px-11">
          <RevealAnimation delay={0.4}>
            <div>
              <Accordion
                className="mx-auto w-full space-y-4"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                <AccordionItem className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8">
                  <AccordionTrigger
                    titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                    value={'something else'}
                    iconType="arrow">
                    <svg className="size-7 mr-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none" />
                      <path d="M232,56V176a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C105.87,170,82.79,158.61,56,179.77V224a8,8,0,0,1-16,0V56a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C167,62.46,190.79,74.2,218.76,50A8,8,0,0,1,232,56Z" />
                    </svg>
                    Men's White Tees - Holes 1 - 9
                  </AccordionTrigger>
                  <AccordionContent value={'something else'}>
                    <div className="table-wrapper">
                      <table className="table-auto table-striped table-divider">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col"><div className="th-wrap">Yardage</div></th>
                            <th scope="col"><div className="th-wrap">Par</div></th>
                          </tr>
                        </thead>
                        <tbody>
                          {whiteTees.map(({ id, hole, yardage, par }) => (
                            <tr key={id}>
                              <th scope="row"><div className="th-wrap">{hole}</div></th>
                              <td><div>{yardage}</div></td>
                              <td><div>{par}</div></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                className="mx-auto w-full space-y-4 mt-5"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                <AccordionItem className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8">
                  <AccordionTrigger
                    titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                    value={'something else'}
                    iconType="arrow">
                    <svg className="size-7 mr-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none" />
                      <path fill="#4b89dc" d="M232,56V176a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C105.87,170,82.79,158.61,56,179.77V224a8,8,0,0,1-16,0V56a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C167,62.46,190.79,74.2,218.76,50A8,8,0,0,1,232,56Z" />
                    </svg>
                    Blue Tees - Holes 10 - 18
                  </AccordionTrigger>
                  <AccordionContent value={'something else'}>
                    <div className="table-wrapper">
                      <table className="table-auto table-striped table-divider">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col"><div className="th-wrap">Yardage</div></th>
                            <th scope="col"><div className="th-wrap">Par</div></th>
                          </tr>
                        </thead>
                        <tbody>
                          {blueTees.map(({ id, hole, yardage, par }) => (
                            <tr key={id}>
                              <th scope="row"><div className="th-wrap">{hole}</div></th>
                              <td><div>{yardage}</div></td>
                              <td><div>{par}</div></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Tees;
