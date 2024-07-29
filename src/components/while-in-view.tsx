import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface WhileInViewProps {
  x?: number | string;
  y?: number | string;
  scale?: number;
  opacity?: number;
  delay?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export const WhileInView = forwardRef<HTMLDivElement, WhileInViewProps>(
  (
    {
      x = 0,
      y = 0,
      scale = 1,
      opacity = 0,
      duration = 0.5,
      delay = 0,
      children,
      className,
      once = true,
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        whileInView={{
          x: [x, 0],
          y: [y, 0],
          scale: [scale, 1],
          opacity: [opacity, 1],
        }}
        viewport={{ once, amount: 0.3 }}
        transition={{ duration, delay }}
        className={cn("opacity-0", className)}
      >
        {children}
      </motion.div>
    );
  },
);

WhileInView.displayName = "WhileInView";
