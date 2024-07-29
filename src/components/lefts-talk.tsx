import Image from "next/image";
import Link from "next/link";
import { WhileInView } from "./while-in-view";
import { motion } from "framer-motion";

export const LetsTalk = () => {
  const MotionLink = motion(Link);
  return (
    <section className="flex flex-col items-center pb-32">
      <WhileInView y={-100} className="flex items-center gap-24 md:gap-48">
        <Image
          src="/decorations/arrow-bottom-right-direction.svg"
          alt="arrow-bottom-right"
          width={55}
          height={56}
        />
        <Image
          src="/decorations/curled-arrow.svg"
          alt="arrow-bottom-right"
          width={91}
          height={153}
          className="-translate-y-10"
        />
        <Image
          src="/decorations/arrow-bottom-left-direction.svg"
          alt="arrow-bottom-right"
          width={51}
          height={60}
        />
      </WhileInView>
      <MotionLink
        animate={{ opacity: [0, 1], y: [100, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative mt-20 flex flex-col items-center gap-1.5 opacity-0"
        href="/contact"
      >
        <p className="font-medium">Got a project?</p>
        <p className="font-rowdies text-5xl">
          Let&apos;s <span className="text-primary">Talk</span>.
        </p>
        <div className="absolute top-1/2 h-[165px] w-[325px] -translate-y-1/2 md:scale-[1.25]">
          <Image
            src="/decorations/big-bubble.svg"
            alt="decoration"
            fill
            className=""
          />
        </div>
      </MotionLink>
    </section>
  );
};
