"use client";
import Button from "@/components/Button";
import { scrollToUrlShortner } from "@/utils/utils";

const CallToAction = () => {
  return (
    <section className="space-y-4 bg-dark-violet bg-boost-mobile bg-right bg-no-repeat pb-[5.6rem] pt-[6.2rem] lg:space-y-6 lg:bg-boost-desktop lg:bg-cover lg:py-14">
      <h2 className="text-[1.7rem] -tracking-[0.01em] text-white lg:text-[2.4rem]">
        Boost your links today
      </h2>
      <Button
        classname="px-10 py-3.5 rounded-full"
        onClick={scrollToUrlShortner}
      >
        Get Started
      </Button>
    </section>
  );
};
export default CallToAction;
