import { useState } from "react";
import { motion } from "framer-motion";

import { menuLinks } from "@/constants";
import Button from "@/components/Button";

const MenuItems = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <ul
        className="flex flex-col gap-7 border-b border-b-light-violet py-6 font-bold text-white lg:ml-6 lg:flex-row lg:items-center lg:gap-[2.1rem] lg:border-none lg:py-0 lg:text-grayish-violet"
        onMouseLeave={() => setSelected(null)}
      >
        {menuLinks.map((link, index) => (
          <li
            key={link}
            className="relative"
            onMouseEnter={() => setSelected(index)}
          >
            <a
              href="#"
              className="transition-colors hover:text-very-dark-violet"
            >
              {link}
            </a>
            {selected === index && (
              <motion.span
                className="absolute left-0 top-full h-1 w-full bg-cyan"
                layoutId="underline"
              />
            )}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-7 pb-6 pt-10 lg:flex-row lg:gap-10 lg:py-0">
        <Button
          bgColor="bg-transparent"
          classname="lg:text-grayish-violet lg:text-sm hover:text-very-dark-violet "
        >
          Login
        </Button>
        <Button classname="w-full rounded-full py-2 lg:text-sm lg:px-[1.6rem] lg:py-2.5">
          Sign Up
        </Button>
      </div>
    </>
  );
};
export default MenuItems;
