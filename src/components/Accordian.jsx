/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
  return (
    <div className="absolute left-4 top-6 md:top-[1.6rem]">
      <img
        src="/images/dropdown.webp"
        alt="dropdown"
        className={`${
          id === open ? "rotate-180" : ""
        } h-3 md:h-4 w-3 md:w-4 transition-transform`}
      />
    </div>
  );
}

export function AccordionItem() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mx-4 space-y-6 md:space-y-12">
      <div className="px-4 -mt-10 text-white border border-white rounded-2xl md:px-8">
        <ul className="list-disc text-[20px] md:text-[28px] md:p-10 p-8 space-y-2">
          <li>Youtube Automation E-book (50 pages)</li>
          <li>What is youtube automation</li>
          <li>Why and when to start youtube automation</li>
          <li>Limitations and cons of the industry</li>
          <li>Ways to start - From 0 to 100k subs (step-by-step)</li>
          <li>Myth busters</li>
          <li>
            Start automation - From scheduling to play buttons (step-by-step)
          </li>
          <li>Success stories</li>
        </ul>
      </div>

      <div className="px-4 border border-white rounded-2xl md:px-8">
        <Accordion
          open={open === 1}
          className="mb-2 text-white pl-14 md:pl-20"
          icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors text-white hover:text-white text-[18px] md:text-[24px]`}>
            What is YouTube automation?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white text-[20px] md:text-[28px] space-y-2">
            <ol className="pl-8 space-y-2 list-decimal">
              <li>Explain</li>
              <li>Examples</li>
              <li>Revenues</li>
            </ol>

            <li>-Why and when to start YouTube automation?</li>
            <li>
              -What are the limitations and cons of the YouTube automation
              industry?
            </li>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="px-4 border border-white rounded-2xl md:px-8">
        <Accordion
          open={open === 2}
          className="mb-2 text-white pl-14 md:pl-20"
          icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors text-white hover:text-white text-[18px] md:text-[24px]`}>
            Ways to start YouTube automation{" "}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white text-[20px] md:text-[28px] space-y-2">
            <ol className="pl-8 space-y-2 list-decimal">
              <li>
                Start on your own
                <ul className="pl-6 list-disc">
                  <li>What do you want to start on your own</li>
                  <li>Strategies</li>
                  <li>Choose niche</li>
                  <li>Video topics</li>
                  <li>Complete production</li>
                </ul>
              </li>

              <li>
                Outsource everything
                <ul className="pl-6 list-disc">
                  <li>Things to need to take care of while outsorcing</li>
                  <li>Cons</li>
                  <li>Tell about us</li>
                </ul>
              </li>
            </ol>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="px-4 border border-white rounded-2xl md:px-8">
        <Accordion
          open={open === 3}
          className="mb-2 text-white pl-14 md:pl-20"
          icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors text-white hover:text-white text-[18px] md:text-[24px]`}>
            Common Myth busters
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white text-[20px] md:text-[28px] space-y-2">
            <ul className="pl-6 list-disc">
              <li>YTA is a scam</li>
              <li>Too expensive and upfront cost</li>
              <li>Avd and ctr issues</li>
              <li>Channel will pump money forever</li>
              <li>Ai will destroy it and yt tos</li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="px-4 border border-white rounded-2xl md:px-8">
        <Accordion
          open={open === 4}
          className="mb-2 text-white pl-14 md:pl-20"
          icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors text-white hover:text-white text-[18px] md:text-[24px]`}>
            More About It{" "}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal text-white text-[20px] md:text-[28px] space-y-2">
            <li>-Scheduling videos</li>
            <li>-Managing comments</li>
            <li>-Analyzing analytics</li>
            <li>-Promoting videos</li>
            <li>-Cross-promoting with other platforms</li>
            <li>-Growing your audience</li>
            <li>-Tools for YouTube automation</li>
            <li>-Free tools</li>
            <li>-Paid tools</li>
            <li>-How to choose the right tools for you</li>
            <li>-What features are important to you?</li>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
