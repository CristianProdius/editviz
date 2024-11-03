import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const clientPic = [
  { src: "/clientPicture/1.png", alt: "client" },
  { src: "/clientPicture/2.png", alt: "client" },
  { src: "/clientPicture/3.png", alt: "client" },
  { src: "/clientPicture/4.png", alt: "client" },
];

export const AnimatedStar = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      <Star className="w-5 h-5 text-black fill-black" />
    </motion.div>
  );
};
