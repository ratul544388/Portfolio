"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { WhileInView } from "@/components/while-in-view";
import { Projects } from "./_components/projects";

const page = () => {
  return (
    <Container className="pb-10 pt-32">
      <WhileInView
        y={100}
        duration={0.75}
        className="flex flex-col items-center gap-3"
      >
        <SubHeading>All Projects</SubHeading>
        <Heading
          highlights={["Web", "Design", "Development", "stories."]}
          className="max-w-[550px] text-center"
        >
          Showcase of My Web Design and Development Work.
        </Heading>
      </WhileInView>
      <Projects />
    </Container>
  );
};

export default page;
