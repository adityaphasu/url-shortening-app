"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { scrollToUrlShortner } from "@/utils/utils";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-[72.5rem] flex-col gap-5 pb-[9.25rem] pt-5 md:flex-row-reverse md:items-center md:px-2 md:pb-[11.2rem] md:pt-16 lg:gap-5 lg:pb-[9.5rem] lg:pr-9 lg:pt-20">
      <div>
        <Image
          src="/images/illustration-working.svg"
          alt=""
          width={733}
          height={482}
          className="max-w-[146%] lg:max-w-[180%]"
        />
      </div>
      <div className="space-y-8 px-4 md:text-left lg:space-y-9">
        <div className="space-y-3 lg:space-y-0.5">
          <h1 className="text-[2.5rem] leading-tight lg:text-6xl lg:leading-[1.1] lg:tracking-tight xl:text-[5rem]">
            More than just shorter links
          </h1>
          <p className="leading-7 lg:mr-4 lg:leading-9 xl:text-[1.38rem]">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
        </div>
        <Button
          classname="rounded-full px-10 py-3.5"
          onClick={scrollToUrlShortner}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
export default Hero;
