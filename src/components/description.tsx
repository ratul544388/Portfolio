"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode;
  className?: string;
  color?: "light" | "dark";
}

export const Description = ({
  children,
  className,
  color = "dark",
}: DescriptionProps) => {
  return (
    <p
      className={cn(
        "font-chakra_petch leading-[1.8rem] tracking-wide",
        color === "dark" && "text-zinc-600",
        color === "light" && "text-slate-200",
        className,
      )}
    >
      {children}
    </p>
  );
};
