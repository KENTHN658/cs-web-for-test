import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import Link from "next/link";

type Props = {};

const NewsAndEvent = (props: Props) => {
  const images = [
    "/header-banner.svg",
    "/header-banner.svg",
    "/header-banner.svg",
    "/header-banner.svg",
  ];
  return (
    <>
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

          <div className="pt-5">
            <Carousel images={images} />
          </div>
        </div>
        <div>
          <div className="flex pb-5">
            <div className="flex flex-col space-y-2 mt-7">
              <div className="px-8 py-0.5 bg-black w-full "></div>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                EVENTS
              </p>
              <div className="overflow-y-auto h-96 pt-6">
                <div>
                  <a
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </a>
                </div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
            </div>
            {/* <div className="ml-auto pt-12 mt-2">
              <div className="">
                more news
                <br />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsAndEvent;
