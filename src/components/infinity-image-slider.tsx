"use client";

import { techImages } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

interface AutoScrollCarouselProps {}

export const InfinityImageSlider = ({}: AutoScrollCarouselProps) => {
  return (
    <motion.ul
      transition={{ staggerChildren: 0.2, ease: "linear" }}
      initial="initial"
      animate="animate"
      className="ml-16 flex items-center gap-3"
    >
      {techImages.map((image, index) => (
        <motion.li
          variants={{
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
          }}
          key={index}
        >
          <Image
            src={image}
            alt="image"
            width={50}
            height={50}
            className="opacity-50"
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
