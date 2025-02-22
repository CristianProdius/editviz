"use client";
import { CheckIcon } from "@/icons/check";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface PricingTier {
  title: string;
  monthlyPrice?: number;
  hourlyRate?: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

interface PricingProps {
  pricingTiers: PricingTier[];
}

export const Pricing = ({ pricingTiers }: PricingProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 ">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5"></p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              hourlyRate,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white/60"
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice ?? hourlyRate}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/50"
                    )}
                  >
                    {monthlyPrice ? "/month" : "/min"}
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature: string, index) => (
                    <li className="text-sm flex items-center gap-4" key={index}>
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-16 ">
        <h3 className="text-center text-2xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
          My Guarantee to You:
        </h3>
        <p className="mt-8 section-description">
          I will offer unlimited revisions until you are satisfied with your
          video. If you still don&apos;t like the video, I&apos;ll give you a
          full refund.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
