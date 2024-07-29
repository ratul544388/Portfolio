import { motion } from "framer-motion";
import Link from "next/link";
import { WhileInView } from "./while-in-view";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "default" | "lg" | "sm";
  className?: string;
  color?: "white" | "purple";
}

export const Logo = ({
  size = "default",
  className,
  color = "purple",
}: LogoProps) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href="/"
      style={{
        clipPath: "polygon(0 0, 73% 0, 100% 74%, 100% 100%, 36% 100%, 0 65%)",
      }}
      className={cn(
        "font-teko min-w-[4rem] flex h-[6.25rem] flex-col bg-purple-500 pl-1 pr-3 pt-1 text-xl font-bold leading-5 text-white tracking-tight",
        size === "sm" && "h-[4.5rem] min-w-12 text-sm tracking-tight leading-[0.85rem]",
        size === "lg" && "h-[6.75rem] min-w-[4.75rem] text-2xl leading-[1.35rem]",
        color === "white" && "bg-white text-foreground",
        className,
      )}
    >
      PORT- <br />
      FOL- <br />
      IO
    </MotionLink>
  );
};
