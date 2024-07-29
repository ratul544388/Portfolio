"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
  children: string;
  className?: string;
  highlights?: string[];
}

export const Heading = ({ children, className, highlights }: HeadingProps) => {
  return (
    <h1 className={cn("font-rowdies text-4xl font-bold", className)}>
      <span className="sr-only">{children}</span>
      {children.split(" ").map((item, index) => (
        <span
          aria-hidden
          key={index}
          className={cn(highlights?.includes(item) && "text-primary")}
        >
          {item}{" "}
        </span>
      ))}
    </h1>
  );
};
