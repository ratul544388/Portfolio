import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface Image3DProps {
  type?: "bottom-left" | "top-left";
  src: string;
  className?: string;
}

export const Image3D = ({ type = "bottom-left", src, className }: Image3DProps) => {
  return (
    <motion.div className={cn("group w-fit [perspective:1000px]", className)}>
      <div
        className={cn(
          "relative size-[100px] md:size-[200px] lg:size-[300px] rounded-lg border-[6px] border-neutral-700 transition-all duration-1000 ease-in-out [perspective:1000px] [transform-style:preserve-3d] group-hover:border-primary",
          type === "bottom-left" &&
            "[transform:rotateY(-25deg)_rotateX(-25deg)]",
          type === "top-left" && "[transform:rotateY(-25deg)_rotateX(25deg)]",
        )}
      >
        <Image src={src} fill alt="coading" className="object-cover" />
      </div>
    </motion.div>
  );
};
