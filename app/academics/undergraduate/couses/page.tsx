"use client";
import { Sidebar } from "flowbite-react";

import type { CustomFlowbiteTheme } from "flowbite-react";
import React, { useEffect } from "react";
import Image from "next/image";
import Sidebar1 from "@/components/Sidebar1";

type Props = {};

export default function undergraduate({}: Props) {
  const customTheme: CustomFlowbiteTheme["sidebar"] = {
    root: {
      inner: "bg-orange",
    },
    collapse: {
      button: "text-2xl",
    },
  };

  return (
    <>
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="max-w-full max-h-full justify-center">
              <Image
                src={"/image1.png" ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="academic-image"
                className="w-auto h-auto object-scale-down  "
              />
            </div>
            <div className="p-5">
              
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1></Sidebar1>
          </div>
        </div>
      </div>
    </>
  );
}
