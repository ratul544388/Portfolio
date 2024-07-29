"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-screen-2xl px-5 md:px-8",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
