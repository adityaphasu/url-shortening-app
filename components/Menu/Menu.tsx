"use client";

import Button from "@/components/Button";
import { useState } from "react";
import MenuItems from "./MenuItems";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={handleClick}
        ></div>
      )}
      <Button
        bgColor="bg-transparent"
        classname="lg:hidden z-50"
        ariaLabel="Toggle Menu"
        onClick={handleClick}
      >
        <div className="space-y-2">
          <div className="h-0.5 w-6 bg-gray"></div>
          <div className="h-0.5 w-6 bg-gray"></div>
          <div className="h-0.5 w-6 bg-gray"></div>
        </div>
      </Button>
      <div
        className={`fixed left-[6%] z-50 w-[88%] rounded-lg bg-dark-violet px-6 py-4 text-center transition-all duration-200 md:flex-1 lg:static lg:flex  lg:w-auto lg:justify-between lg:bg-transparent lg:p-0 lg:text-[14.5px] ${isOpen ? "top-24" : "-top-[25rem] lg:top-24"}`}
      >
        <MenuItems />
      </div>
    </>
  );
};
export default Menu;
