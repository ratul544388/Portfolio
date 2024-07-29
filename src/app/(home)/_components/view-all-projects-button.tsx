import { cn } from "@/lib/utils";
import { BsRocketTakeoff } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

export const ViewAllProjectsButton = ({
  className,
}: {
  className?: string;
}) => {
  const MotionLink = motion(Link);
  return (
    <div
      className={cn(
        "relative lg:ml-auto lg:mr-[calc(100vw_-_80%_-130px)]",
        className,
      )}
    >
      <MotionLink
        href="/projects"
        whileHover={{
          clipPath: "polygon(71% 0, 100% 50%, 71% 100%, 0 100%, 0 0)",
          paddingBottom: 0,
        }}
        className="relative mt-5 flex h-[5.5rem] w-40 flex-col items-center justify-center gap-1 bg-white pb-3 pr-5 text-sm font-medium text-muted-foreground"
        style={{ clipPath: "polygon(100% 0, 79% 75%, 79% 74%, 0 100%, 0 0)" }}
      >
        View all
        <BsRocketTakeoff className="size-4" />
      </MotionLink>
      <span className="absolute inset-0 -z-10 bg-gray-300 blur-xl" />
    </div>
  );
};
