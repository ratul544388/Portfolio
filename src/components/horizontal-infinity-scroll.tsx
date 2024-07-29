"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HorizontalInfinityScrollProps {
  children: ReactNode[];
  speed?: number;
  className?: string;
  gap?: number;
}

export const HorizontalInfinityScroll = ({
  children,
  speed = 10,
  className,
  gap = 20,
}: HorizontalInfinityScrollProps) => {

  return (
    <div
      className={cn(
        "relative flex gap-3 overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]",
        className,
      )}
    >
      <motion.ul
        variants={{
          initial: { x: 0, gap, paddingRight: gap },
          animate: { x: "-100%" },
        }}
        initial="initial"
        animate="animate"
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="flex"
      >
        {children}
        <ul style={{ gap }} className="absolute left-full flex">
          {children}
        </ul>
      </motion.ul>
    </div>
  );
};