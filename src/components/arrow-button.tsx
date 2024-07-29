"use client";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  label: string;
  href: string;
  className?: string;
  target?: "_blank";
  color?: "black" | "white";
  download?: boolean;
}

export const ArrowButton = ({
  label,
  href,
  className,
  target,
  color = "black",
  download
}: ArrowButtonProps) => {
  return (
    <Link
      target={target}
      download={download}
      href={href}
      className={cn(
        "group flex w-fit flex-col items-end gap-3 text-sm font-medium",
        color === "black" ? "text-foreground" : "text-white",
        className,
      )}
    >
      {label}
      <span className="flex items-center">
        <span
          className={cn(
            "h-0.5 w-7 translate-x-2 rounded-full transition-all duration-500 group-hover:w-4",
            color === "white" ? "bg-white" : "bg-foreground",
          )}
        />
        <FaChevronRight />
      </span>
    </Link>
  );
};
