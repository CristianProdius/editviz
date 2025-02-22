"use client";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What is your typical turnaround time?",
    answer: `Turnaround time depends on the complexity of the project:\n\n● 10 minute video with animations (first video from portfolio) - 5 days\n● 10 minute video in documentary style - 5 days\n● 10 minute video with simple motion graphics (last video from portfolio) - 4 days`,
  },
  {
    question: "How does the process work?",
    answer: `Our process is straightforward:\n\n● You film the video.\n● Send us the footage along with any requirements and a script (if available).\n● We provide a delivery estimate.\n● You receive your video.\n● Request revisions (if needed).\n● Post your video and watch it perform!`,
  },
  {
    question: "What do you need from me?",
    answer: `We require the following:\n\n● A-roll footage and audio.\n● B-roll footage (if available).\n● A script (if you have one).\n● Requirements such as the desired style or any specific details for the video.`,
  },
  {
    question: "How does payment work?",
    answer: `We typically request a 25% deposit upfront, with the remaining balance due upon project completion. We're open to discussing other payment arrangements if needed.`,
  },
  {
    question: "What can you provide for my video?",
    answer: `We specialize in:\n\n● Subtitles and captions.\n● Motion graphics.\n● Stylish text.\n● Stock footage integration.\n● Custom animations.\n● Icons, backgrounds, photos, and much more.`,
  },
  {
    question: "What editing styles can you create?",
    answer: `We offer a range of styles, including:\n\n● Animation-focused edits (similar to Iman Gadzhi).\n● Documentary-style edits.\n● Icon and B-roll-heavy edits (inspired by Ali Abdaal).\n● Simple text with motion graphics.\n● Custom, unique styles tailored to your needs`,
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-6 border-b border-gray-200 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <span className="flex-1 text-lg font-semibold text-gray-900">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-gray-500" />
          ) : (
            <Plus className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="text-gray-600"
          >
            {answer.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
