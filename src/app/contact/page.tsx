"use client";

import { Container } from "@/components/container";
import { Description } from "@/components/description";
import { WhileInView } from "@/components/while-in-view";
import { ContactForm } from "./_components/contact-form";
import { Map } from "./_components/map";
import { Loader } from "@/components/loader";
import { SubHeading } from "@/components/sub-heading";

const Contact = () => {

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <Container>
        <WhileInView y={200} className="pt-40">
          <SubHeading className="font-medium">Contact</SubHeading>
          <p className="mt-3 font-rowdies text-2xl sm:text-3xl xl:text-4xl">
            <span className="text-primary">ratulislam544388</span>@gmail.com
          </p>
          <Description className="mt-5 font-chakra_petch">
            Like what see? Have a project you&apos;d like to talk about? <br />
            Want to ask me a personal question?
          </Description>
          <ContactForm />
        </WhileInView>
      </Container>
      <Map />
    </div>
  );
};

export default Contact;
