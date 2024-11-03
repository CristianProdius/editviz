"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamMember = () => {
  return (
    <section className="bg-white py-[72px] px-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center bg-gray-100 rounded-lg px-4 py-1.5"
          >
            <span className="text-sm font-medium text-gray-800">
              who we are
            </span>
          </motion.div>
        </div>

        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter text-gray-900 mb-16">
          The real person behind EditVisions:
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 text-xs font-semibold px-4 py-1.5 rounded-lg text-gray-800">
                  CEO
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Hi, I&apos;m Dami
              </h3>

              <p className="text-gray-600">
                This is the owner of EditVisions, yeah, a 14 year old kiddo, but
                not to worry, he has professional editors working for him, so he
                does&apos;t actually edit your videos.
              </p>

              <p className="text-gray-600">
                This is the owner of EditVisions, yeah, a 14 year old kiddo, but
                not to worry, he has professional editors working for him, so he
                doesn&apos;t actually edit your videos. He started this company
                2 years ago, and now he has almost 20 editors and a lot of
                satisfied clients.
              </p>
            </div>

            <div className="relative flex-shrink-0">
              <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/topG.png"
                  alt="Team member portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
