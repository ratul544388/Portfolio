"use client";

import { techImages } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface AutoScrollCarouselProps {}

export const ScrollToSlide = ({}: AutoScrollCarouselProps) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.ul
      style={{ x }}
      ref={containerRef}
      className="flex max-w-[550px] items-center gap-3"
    >
      {techImages.map((image, index) => (
        <li key={index}>
          <Image
            src={image}
            alt="tech"
            width={56}
            height={56}
            className="min-w-14 object-cover"
          />
        </li>
      ))}
    </motion.ul>
  );
};
