"use client";

import { motion } from "framer-motion";
import React from "react";

interface Testimonial {
  text: string;
  name: string;
  username: string;
}

const TestimonialsColumn = ({
  testimonials,
  className = "",
  duration = 15,
}: {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, username }, idx) => (
              <div className="card" key={`${index}-${idx}`}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-white ">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5">What Our Clients Say</h2>
          <p className="section-description mt-5">
            Our clients are our biggest supporters. Would you like to know what
            they think about us? Take a look for yourself in the testimonials
            below.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
