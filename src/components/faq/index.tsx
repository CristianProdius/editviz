"use client";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What is your turnaround time?",
    answer:
      "Of course, it varies by the amount of work needed, but let's say for a 10 minute video with simple broll, text and motion graphics - about 5 days",
  },
  {
    question: "How does the process work?",
    answer:
      "The process is simple:\n\n- You film the video\n- Send it over as well as the requirements and script (if you have one)\n- I give you a delivery estimate\n- You get your video\n- Give me revisions (if needed)\n- Post the video\n- Go viral",
  },
  {
    question: "What do you need from me?",
    answer:
      "I just need the A-roll footage and audio, Broll (if you have some), script (if you have one) and requirements (style for the video, etc)",
  },
  {
    question: "How does payment work?",
    answer:
      "I require at least 25% of the full amount to be deposited to me, and after completion, the rest. I'm open to other ways as well.",
  },
  {
    question: "What exactly can you do?",
    answer:
      "I can add subtitles, motion graphics, stylish text, stock footage, custom animations, icons, B-roll, backgrounds, photos and many more.",
  },
  {
    question: "Which styles can you do?",
    answer:
      "I can edit with animations (Iman Gadzhi), icons, background and b-roll (Ali Abdaal), simple text with motion graphics or a unique style for you to stand out.",
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
            {answer}
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
