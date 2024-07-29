"use client";
import { About } from "@/components/about/about";
import { Intro } from "@/app/(home)/_components/intro";
import { LetsTalk } from "@/components/lefts-talk";
import { Reviews } from "@/components/reviews";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Intro />
      <About />
      <Reviews/>
      <LetsTalk/>
    </div>
  );
};

export default HomePage;
