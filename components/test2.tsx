import React from "react";
import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
  const banners = ["/banner1.svg", "/banner2.svg", "/banner3.svg"];
  return (
    <>
      {banners.map((e: any) => (
        <div className="relative h-full">
          <Image
            src={e}
            width="0"
            height="0"
            sizes="100vw"
            alt="Banner"
            className="w-full h-auto"
          />
        </div>
      ))}
    </>
  );
};

export default Banner;





{/* <div className="overflow-y-auto h-[28rem] pt-6">
                <div className="pt-5">
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
                <div className="pt-5">
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
                <div className="pt-5">
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
              </div> */}

<div>
            {/* <div className="max-w-full rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  The Computer Science Department admits students to an
                  undergraduate program that you are guaranteed to find rigorous
                  and dedicated to the real-world training and practical problem
                  solving that has been the hallmark of computer science
                  education at CMU since its inception.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-full rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  We offer three distinct master’s options for students who have
                  completed (or will complete) a bachelor’s degree and want to
                  extend their training in computer science. Our largest program
                  is the M.S. in Computer Science, which allows students to work
                  with their academic advisor to create their own course of
                  study.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-full rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Chiang Mai University's Ph.D. in Computer Science is, above
                  all, a research degree. We certify that our students have a
                  broad foundation and awareness of core concepts in computer
                  science, have advanced the field by performing significant
                  original research and have reported that work in a scholarly
                  fashion.
                </p>
              </div>
            </div>
          </div> */}
