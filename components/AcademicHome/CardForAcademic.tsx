import React from "react";
import Image from "next/image";
import { CardOfEventProps } from "@/types/cardofevent";
import Link from "next/link";

type Props = {};

const CardForAcademic = ({ posts }: { posts: CardOfEventProps[] }) => {
  return (
    <>
      {posts.map((item, index) => (
        <Link href={item.href ?? "#"}>
          <div className="p-1 snap-center">
            <div className="max-w-full  shadow-lg min-h-full ">
              <Image
                src={item.image ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="academic-image"
                className="w-auto h-auto object-scale-down hidden md:flex justify-center"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.content}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default CardForAcademic;
