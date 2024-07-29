"use client";

import { cn } from "@/lib/utils";

interface SubHeadingProps {
  children: string;
  className?: string;
}

export const SubHeading = ({ children, className }: SubHeadingProps) => {
  return <p className={cn("font-gupter font-medium", className)}>{children}</p>;
};
