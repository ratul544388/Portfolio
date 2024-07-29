import { techImages } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Container } from "../../../components/container";
import { Description } from "../../../components/description";
import { HorizontalInfinityScroll } from "../../../components/horizontal-infinity-scroll";
import { WhileInView } from "../../../components/while-in-view";
import { Projects } from "./projects";
import { Heading } from "../../../components/heading";
import { SubHeading } from "../../../components/sub-heading";
import { ViewAllProjectsButton } from "./view-all-projects-button";

export const Intro = () => {
  return (
    <section className="min-h-[calc(100vh_-_128px)] pb-16">
      <div className="grid gap-y-12 lg:grid-cols-2">
        <WhileInView y={200} className="mt-36">
          <Container>
            <SubHeading className="text-center lg:text-start">
              Innovate and Inspire
            </SubHeading>
            <Heading
              highlights={["Web", "Developer", "Modern", "Technologies."]}
              className="mt-4 text-center font-rowdies text-4xl leading-[3.2rem] lg:text-start"
            >
              Experienced Web Developer Specializing in Modern Technologies.
            </Heading>
            <Description className="mt-5 text-center lg:text-start">
              Passionate about turning ideas into digital reality, I blend
              creativity and technical expertise to craft dynamic web
              experiences. With a knack for innovation and a love for learning,
              I continuously push the boundaries of web development.
            </Description>
          </Container>
        </WhileInView>
        <Projects />
      </div>
      <WhileInView
        y={50}
        className="mt-4 flex flex-col lg:px-8 items-center gap-y-8 lg:flex-row"
      >
        <Link
          href="#about-me"
          className="hidden w-fit -translate-x-10 rotate-90 items-center gap-3 font-chakra_petch text-sm font-semibold lg:flex"
        >
          ABOUT ME
          <HiOutlineArrowNarrowRight className="size-4" />
        </Link>
        <HorizontalInfinityScroll
          className="order-2 h-fit max-w-screen-xl lg:order-1 lg:w-[50vw]"
          speed={20}
        >
          {techImages.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt="image"
              width={60}
              height={60}
              className="min-w-[60px] object-cover"
            />
          ))}
        </HorizontalInfinityScroll>
        <ViewAllProjectsButton className="order-1 lg:order-2" />
      </WhileInView>
    </section>
  );
};
