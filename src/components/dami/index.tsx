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
          The Person Behind EditVisions
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
                Hey, I am Damian
              </h3>

              <p className="text-gray-600">
                Damian&apos;s video editing journey started at just 9 years old,
                turning simple clips into creative stories. By the time he was
                12, his passion had grown into a full-fledged business, and
                today, at 14, he leads a team of 20 talented editors.
              </p>

              <p className="text-gray-600">
                Even as the founder of the agency, Damian stays hands-on,
                jumping into projects whenever inspiration strikes. His
                creativity, dedication, and leadership show that age
                doesn&apos;t define what&apos;s possible when you&apos;re
                passionate about what you do!
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
