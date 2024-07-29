import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Container } from "../container";
import { Description } from "../description";
import { WhileInView } from "../while-in-view";
import { ArrowButton } from "../arrow-button";
import { Image3D } from "../image-3d";
import { SubHeading } from "../sub-heading";
import { Heading } from "../heading";

export const About = () => {
  const container = useRef(null);

  const { scrollYProgress: scrollYFlagProgress } = useScroll({
    target: container,
    offset: ["0.8 end", "end start"],
  });

  const { scrollYProgress: scrollYBoxProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const boxTransform = useTransform(scrollYBoxProgress, [0, 1], [0, 120]);
  const flagTransform = useTransform(scrollYFlagProgress, [0, 1], [0, 120]);

  return (
    <section id="about-me" ref={container} className="bg-foreground text-white">
      <Container className="relative py-12 md:px-20">
        <Container className="max-w-[900px]">
          <WhileInView y={200}>
            <SubHeading>About Me</SubHeading>
            <Heading
              highlights={["Ratul,", "Web", "Developer", "experiences."]}
              className="mt-5 max-w-[400px] leading-[3.25rem] text-white"
            >
              Hello, I&apos;m Ratul, a Full Stack Web Developer creating
              seamless experiences.
            </Heading>
          </WhileInView>
          <WhileInView y={200} className="ml-auto mt-6 max-w-[400px]">
            <Description color="light">
              Hello, I&apos;m Ratul, a Full Stack Web Developer with 3 years of
              experience. I&apos;m proficient in both frontend and backend
              technologies, including HTML, CSS, Tailwind CSS, React, Next.js,
              TypeScript, JavaScript, Framer Motion, GSAP, MongoDB, MySQL,
              Express, Node.js. I&apos;ve built numerous full stack websites,
              such as e-commerce platforms, social media sites, portfolios, and
              landing pages. I&apos;m passionate about learning new technologies
              to enhance my skills.
            </Description>
            <ArrowButton
              label="Download CV"
              href="/ratul.cv.pdf"
              download
              target="_blank"
              color="white"
              className="ml-auto mt-6"
            />
          </WhileInView>
        </Container>
        <WhileInView
          y={200}
          className="item-center mt-12 flex justify-center gap-16 lg:mt-0"
        >
          <Image3D src="/laptop-coding.webp" className="lg:-translate-y-28" />
          <Image3D src="/desktop-coding.webp" type="top-left" />
        </WhileInView>
        {/* Decorations  */}
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          className="absolute right-20 top-0 hidden opacity-0 lg:block"
          style={{ top: boxTransform }}
        >
          <Image src="/box-cut.svg" alt="flug" height={154} width={150} />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          className="absolute bottom-0 left-20 translate-y-20 opacity-0"
          style={{ bottom: flagTransform }}
        >
          <Image src="/skull.svg" alt="flug" height={77} width={48} />
          <Image
            src="/awesome-guys-text-bubble.svg"
            alt="flug"
            height={65}
            width={185}
            className="-translate-y-32 translate-x-16"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          className="absolute bottom-0 right-20 hidden translate-y-40 opacity-0 lg:block"
          style={{ bottom: flagTransform }}
        >
          <Image src="/heart-flagpole.svg" alt="flug" height={243} width={60} />
        </motion.div>
      </Container>
    </section>
  );
};
