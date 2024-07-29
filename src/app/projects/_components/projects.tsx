import { Button } from "@/components/ui/button";
import { projectCategories, projects } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { EarthIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>("all projects");

  const activeProjects =
    projects.filter((project) => project.category === activeCategory).length ===
    0
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="mt-12">
      <motion.ul
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1, delay: 1 }}
        className="flex flex-wrap justify-center"
      >
        {projectCategories.map((item) => (
          <motion.li
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
            key={item}
          >
            <Button
              onClick={() => setActiveCategory(item)}
              className={cn(
                "capitalize text-gray-400",
                item === activeCategory && "text-foreground",
              )}
              variant="transparent"
              size="sm"
            >
              {item}
            </Button>
          </motion.li>
        ))}
      </motion.ul>
      <motion.ul
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.08 }}
        key={`${activeCategory}`}
        className="mx-auto mt-9 grid max-w-screen-sm grid-cols-2 gap-x-14 gap-y-8"
      >
        {activeProjects.map(({ name, image, deployedLink, githubLink }) => (
          <AnimatePresence key={name}>
            <motion.li
              variants={{
                initial: { opacity: 0, scale: 0.25 },
                animate: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3 }}
              key={`name-${activeCategory}`}
              className="shadow-[0px_0px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  placeholder="blur"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex justify-between">
                  <Link
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
                    }}
                    href={githubLink}
                    className="flex h-14 w-20 flex-col items-center justify-center bg-white pr-3 transition-colors duration-300 hover:text-primary"
                  >
                    <FaGithub className="size-4" />
                    <p className="text-xs font-medium">Github</p>
                  </Link>
                  <Link
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)",
                    }}
                    href={deployedLink}
                    className="flex h-14 w-20 flex-col items-center justify-center bg-white pl-3 transition-colors duration-300 hover:text-primary"
                  >
                    <EarthIcon className="size-4" />
                    <p className="text-xs font-medium">Live</p>
                  </Link>
                </div>
              </div>
              <div className="px-5 py-7">
                <h5 className="text-sm font-bold">{name}</h5>
              </div>
            </motion.li>
          </AnimatePresence>
        ))}
      </motion.ul>
    </section>
  );
};
