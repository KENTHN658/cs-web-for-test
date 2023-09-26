"use client";
import { Sidebar } from "flowbite-react";

import type { CustomFlowbiteTheme } from "flowbite-react";
import React, { useEffect } from "react";
import Image from "next/image";
import Sidebar1 from "@/components/Sidebar1";
import { SidebarProps } from "@/types/sidebar";

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

  const sidebarItem: SidebarProps[] = [
    {
      content: "UNDERGRADUATE PROGRAMS",
      type: "header",
      href: "/academics/undergraduate",
    },
    {
      content: "Couses",
      href: "/academics/undergraduate/couses",
      type: "singleItem",
    },
    {
      content: "Undergraduate 64+",
      type: "multiItem",
      SidebarOption: [
        {
          title: "Study Plan",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Required Courses",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Core Courses",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Elective Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Free Elective Courses",
              href: "#",
            },
            {
              title: "GE Elective Courses",
              href: "#",
            },
            {
              title: "Major Elective Courses",
              href: "#",
            },
          ],
        },
        {
          title: "Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Organization Issues and Information System",
              href: "#",
            },
            {
              title: "Technology for Application",
              href: "#",
            },
            {
              title: "Technology and System Methodology",
              href: "#",
            },
            {
              title: "System of Fundamental Structure",
              href: "#",
            },
            {
              title: "Hardware and Computer Architecture",
              href: "#",
            },
          ],
        },
        {
          title: "Plan-Specific Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Regular Plan",
              href: "#",
            },
            {
              title: "Co-Operative Education Plan",
              href: "#",
            },
            {
              title: "Honors Plan",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      content: "Undergraduate 59(63)",
      type: "multiItem",
      SidebarOption: [
        {
          title: "Study Plan",
          href: "#",
        },
        {
          title: "Required Courses",
          href: "#",
        },
        {
          title: "Core Courses",
          href: "#",
        },
        {
          title: "Elective Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Free Elective Courses",
              href: "#",
            },
            {
              title: "GE Elective Courses",
              href: "#",
            },
            {
              title: "Major Elective Courses",
              href: "#",
            },
          ],
        },
        {
          title: "Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Organization Issues and Information System",
              href: "#",
            },
            {
              title: "Technology for Application",
              href: "#",
            },
            {
              title: "Technology and System Methodology",
              href: "#",
            },
            {
              title: "System of Fundamental Structure",
              href: "#",
            },
            {
              title: "Hardware and Computer Architecture",
              href: "#",
            },
          ],
        },
        {
          title: "Plan-Specific Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Regular Plan",
              href: "#",
            },
            {
              title: "Co-Operative Education Plan",
              href: "#",
            },
            {
              title: "Honors Plan",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      content: "Student portal",
      type: "multiItem",
      SidebarOption: [
        {
          title: "Score Report",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Assignment Submission",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Student Research",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Phone Number",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Line Chat Bot",
          href: "#",
          type: "NotHave",
        },
      ],
    },
  ];

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
            <div className="p-5"></div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  );
}
