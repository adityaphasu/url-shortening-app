import { features } from "@/constants";
import { cn } from "@/lib/cn";
import Image from "next/image";

const Features = () => {
  return (
    <section className="space-y-[6.1rem] bg-light-violet px-6 pb-20 pt-16 lg:pb-[12.9rem] lg:pt-[4.5rem]">
      <div className="space-y-5 lg:space-y-3">
        <h2 className="text-[1.68rem] lg:text-[2.395rem]">
          Advanced Statistics
        </h2>
        <p className="mx-auto max-w-[34rem] text-base leading-relaxed lg:mx-auto lg:text-lg lg:leading-8">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative mx-auto grid max-w-[89rem] gap-[5.9rem] lg:grid-cols-3 lg:gap-8 xl:px-[8.8rem]">
        <div className="absolute left-1/2 h-[50rem] w-2 -translate-x-1/2 bg-cyan lg:top-[57.5%] lg:h-2 lg:w-[50rem]"></div>

        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={cn(
              `relative z-20 mx-auto max-w-[30rem] space-y-8 rounded-lg bg-white px-8 pb-9 lg:pb-[2.35rem] lg:pl-[1.6rem] lg:pr-[1.7rem] lg:text-left`,
              index === 1 && "lg:top-[2.65rem] lg:pt-0.5 lg:leading-9",
              index === 2 && "lg:top-[5.35rem] lg:pt-1 lg:leading-8",
            )}
          >
            <div className="mx-auto -mt-11 flex w-[5.5rem] items-center rounded-full bg-dark-violet p-6 lg:ml-1.5">
              <Image
                src={feature.icon}
                alt=""
                width={feature.iconWidth || 40}
                height={feature.iconHeight || 40}
              />
            </div>
            <div className="space-y-3.5 lg:pl-1.5">
              <h3 className="text-[1.35rem] tracking-[0.01em]">
                {feature.title}
              </h3>
              <p className="lg text-[15.45px] leading-[1.665] tracking-[-0.0175em]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
