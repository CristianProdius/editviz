"use client";
import React from "react";
import Image from "next/image";
import { AnimatedStar } from "./animatedStar";
import { clientPic } from "./animatedStar";
import ContactButton from "./contact";

export const CTA = ({
  title = "Transform Your Knowledge Into a Thriving Online Course Business",
  subtitle = "Join Over 7,000+ Course Creators Who've Built Profitable Courses Without Ads or Following",
  buttonText = "Start My Course Impire Today",
  trustText = "Trusted by 30+ businesses",
}) => {
  return (
    <div className="bg-white text-black py-[72px] text-center sm:py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="section-title tracking-tighter sm:text-6xl">{title}</h2>
        <p className="text-xl mt-5">{subtitle}</p>
        <div className="mt-10 flex flex-col gap-2.5 px-4 max-w-lg mx-auto sm:flex-row ">
          <ContactButton text={buttonText} />
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4">
            <div className="flex -space-x-3">
              {clientPic.map((pic, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-purple-900"
                >
                  <Image
                    src={pic.src}
                    alt={pic.alt}
                    className="rounded-full object-cover w-full h-full"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <AnimatedStar key={i} delay={i * 0.1} />
                ))}
              </div>
              <span className="text-sm sm:text-base text-black/80">
                {trustText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
