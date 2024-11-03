"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroProps {
  videoSrc: string;
  headerText: string;
  titleText: string;
  ctaText: string;
  buttonText: string;
}

const Hero = ({
  videoSrc,
  headerText,
  titleText,
  ctaText,
  buttonText,
}: HeroProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%,#a46edb_82%)] pt-4 md:pt-8 pb-[72px] relative overflow-clip px-4">
      {/* Background Gradient Circle */}
      <div className="absolute h-[875px] w-[1250px] sm:w-[1536px] sm:h-[768px] md:w-[3900px] md:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)]"></div>

      <div className="container relative mx-auto">
        {/* Header Alert */}
        <div className="flex items-center justify-center mb-8 px-4 w-full">
          <div className="inline-flex items-center justify-center gap-2 border py-1.5 px-3 rounded-lg border-white/30 w-auto">
            <div className="bg-green-500 px-2 py-1 rounded-lg flex items-center">
              <span className="text-[6px] font-bold text-black sm:text-xs">
                ATTENTION
              </span>
            </div>
            <span className="text-[7px] sm:text-xs md:text-sm lg:text-base">
              {headerText}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-center text-4xl sm:text-6xl font-bold tracking-tighter">
            {titleText}
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 mt-4">
            {ctaText}
          </p>

          {/* Video Container */}
          <div className="w-full max-w-4xl mx-auto aspect-video mb-12">
            <iframe
              src={videoSrc}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>

          {/* Steps */}
          <p className="text-xl md:text-2xl mb-2 text-gray-300">
            Your Next Steps Are:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
            <div className="flex items-center gap-2 sm:gap-3 bg-[#3e1a84]/10 rounded-lg px-2 sm:px-4 py-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="bg-[#fee370] w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-[#3e1a84]">
                    1
                  </span>
                </div>
                <span className="text-sm sm:text-md md:text-lg font-medium whitespace-nowrap">
                  Watch This Video
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-[#3e1a84]/10 rounded-lg px-2 sm:px-4 py-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="bg-[#fee370] w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-[#3e1a84]">
                    2
                  </span>
                </div>
                <span className="text-sm sm:text-md md:text-lg font-medium whitespace-nowrap">
                  Get in Contact
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleClick}
            className="bg-white text-black sm:text-xl py-3 px-4 sm:py-5 sm:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105"
          >
            <span>{buttonText}</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
