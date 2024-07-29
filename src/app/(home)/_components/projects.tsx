import { projects } from "@/constants";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowButton } from "../../../components/arrow-button";
import { WhileInView } from "../../../components/while-in-view";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { ViewAllProjectsButton } from "./view-all-projects-button";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const MotionImage = motion(Image);

  const handleNext = useCallback(() => {
    if (activeIndex === projects.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    if (activeIndex === 0) {
      setActiveIndex(projects.length - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const project = projects[activeIndex];

  return (
    <WhileInView x="100%" className="flex flex-col items-center">
      <div className="relative h-[350px] w-full overflow-hidden lg:h-[80vh] lg:[clipPath:polygon(14%_0,100%_0,100%_100%,7%_100%,0_37%)]">
        <motion.div
          animate={{ scale: 1.1 }}
          transition={{ duration: 5, ease: "linear" }}
          key={`active-scale-${activeIndex}`}
          className="size-full"
        >
          <AnimatePresence>
            <MotionImage
              key={`active-image-${activeIndex}`}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
              }}
              initial="initial"
              animate="animate"
              exit="initial"
              transition={{ duration: 1 }}
              src={project.image}
              alt={project.name}
              fill
              placeholder="blur"
              className="object-cover"
            />
          </AnimatePresence>
        </motion.div>
        <motion.span
          key={`active-line-${activeIndex}`}
          variants={{ initial: { width: 0 }, animate: { width: "100%" } }}
          initial="initial"
          animate="animate"
          transition={{ duration: 5, ease: "linear" }}
          className="absolute bottom-0 h-1 rounded-r-full bg-primary"
        />
        <div className="absolute bottom-4 right-5 flex items-center mix-blend-difference">
          <Button
            onClick={handlePrev}
            variant="transparent"
            className="text-white"
          >
            Prev
          </Button>
          <span className="text-white">/</span>
          <Button
            onClick={handleNext}
            variant="transparent"
            className="text-white"
          >
            Next
          </Button>
        </div>
        <div className="absolute bottom-20 right-5 flex flex-col items-end gap-3">
          {Array.from({ length: projects.length }).map((_, index) => (
            <span key={index} className="flex items-center gap-1">
              {index === activeIndex && (
                <motion.span
                  layoutId="activeDot"
                  className="size-1 rounded-full bg-primary"
                />
              )}
              <span
                key={index}
                className={cn(
                  "h-[1.5px] w-2.5 space-x-2 rounded-full bg-primary",
                  index % 2 === 0 && "w-4",
                )}
              />
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex w-full items-center justify-between px-6 lg:pl-[3.25rem]">
        <motion.h5
          className="text-sm font-semibold"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.05, delay: 1 }}
          key={`active-name-${activeIndex}`}
        >
          {project.name.split("").map((char, index) => (
            <motion.span
              variants={{
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
              }}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.h5>
        <ArrowButton
          href={project.deployedLink}
          label="View project"
          target="_blank"
        />
      </div>
    </WhileInView>
  );
};
