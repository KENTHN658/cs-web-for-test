"use client";
import Carousel from "@/components/Carousel";
import { CarouselProps } from "@/types/carousel";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const images: CarouselProps[] = [
    {
      images: "/12-8-2023.png",
      href: "#",
      title: "วันแม่แห่งชาติ",
      content:
        "ปัจจุบันตรงกับวันที่ 12 สิงหาคม ของทุกปี ซึ่งตรงกับวันคล้ายวันพระราชสมภพของสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง",
    },
    {
      images: "/banner1.svg",
      href: "#",
      title: "COMPUTER SCIENCE",
      content: "CMU",
    },
    {
      images: "/banner1.svg",
      href: "#",
      title: "COMPUTER SCIENCE",
      content: "CMU",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5 gap-5">
      <div className="w-full md:w-2/3">
        <div className="flex pb-5">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full "></div>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
              NEWS
            </p>
          </div>
        </div>

        <div className="pt-5"></div>
      </div>
      <div>
        <div className="flex pb-5">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
              EVENTS
            </p>
          </div>
        </div>

        <div className="overflow-y-auto h-[28rem] pt-6"></div>
      </div>
    </div>
  );
}
