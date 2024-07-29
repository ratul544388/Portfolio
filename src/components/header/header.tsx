"use client";

import { Container } from "../container";
import { Logo } from "../logo";
import { WhileInView } from "../while-in-view";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <header
      id="home"
      className="fixed inset-x-0 top-0 z-50 flex h-32 overflow-hidden"
    >
      <Container className="flex h-full items-center justify-between max-w-full">
        <WhileInView x={-80} y={-80}>
          <Logo className="block md:hidden" />
          <Logo className="hidden md:block" size="lg" />
        </WhileInView>
        <MobileMenu />
      </Container>
    </header>
  );
};
