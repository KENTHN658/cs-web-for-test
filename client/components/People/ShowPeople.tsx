"use client";
import React from "react";
import Image from "next/image";
import { PeopleProps } from "@/types/people";
import Link from "next/link";

type Props = {};

const ShowPeople = ({
  peopleItem,
  type_check,
}: {
  peopleItem: PeopleProps[];
  type_check: string;
}) => {
  return (
    <>
      {peopleItem.map((item, index) => {
        return type_check === "all" ? (
          <>
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    src={item.path_people ?? "#"}
                    width="0"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                  />
                </div>
                <div className="pl-8 pr-8 pt-1 text-center md:text-left">
                  <ul className="block mt-1 text-xl leading-tight font-semibold text-slate-700 ">
                    <li>
                      {" "}
                      {item.academic_position_TH}
                      {item.fname_TH} {item.mname_TH} {item.lname_TH}
                    </li>
                    <li>{item.position_TH}</li>
                  </ul>

                  <ul className="list-none text-slate-600 mt-3 mb-4 text-base font-normal">
                    <li>
                      {item.fname_ENG} {item.mname_ENG} {item.lname_ENG}
                    </li>
                    <li>Tel: {item.tel}</li>
                    <li>Email: {item.email} </li>
                    <li>Research Interests: {item.research_interests}</li>
                  </ul>
                  {item.presonal_web === "null" ? (
                    <>
                      <a
                        href={item.presonal_web ?? "#"}
                        className="hidden mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500 "
                      >
                        Personal Website
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={item.presonal_web ?? "#"}
                        className="mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500 "
                      >
                        Personal Website
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : type_check === "staff" && item.type === "staff" ? (
          <>
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    src={item.path_people ?? "#"}
                    width="0"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                  />
                </div>
                <div className="pl-8 pr-8 pt-1 text-center md:text-left">
                  <ul className="block mt-1 text-xl leading-tight font-semibold text-slate-700 ">
                    <li>
                      {" "}
                      {item.academic_position_TH}
                      {item.fname_TH} {item.mname_TH} {item.lname_TH}
                    </li>
                    <li>{item.position_TH}</li>
                  </ul>

                  <ul className="list-none text-slate-600 mt-3 mb-4 text-base font-normal">
                    <li>
                      {item.fname_ENG} {item.mname_ENG} {item.lname_ENG}
                    </li>
                    <li>Tel: {item.tel}</li>
                    <li>Email: {item.email} </li>
                    <li>Research Interests: {item.research_interests}</li>
                  </ul>
                  {item.presonal_web === "null" ? (
                    <>
                      <a
                        href={item.presonal_web ?? "#"}
                        className="hidden mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500 "
                      >
                        Personal Website
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={item.presonal_web ?? "#"}
                        className="mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500 "
                      >
                        Personal Website
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : type_check === "lectur" && item.type === "lectur" ? (
          <>
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    src={item.path_people ?? "#"}
                    width="0"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                  />
                </div>
                <div className="pl-8 pr-8 pt-1 text-center md:text-left">
                  <ul className="block mt-1 text-xl leading-tight font-semibold text-slate-700 ">
                    <li>
                      {" "}
                      {item.academic_position_TH}
                      {item.fname_TH} {item.mname_TH} {item.lname_TH}
                    </li>
                    <li>{item.position_TH}</li>
                  </ul>

                  <ul className="list-none text-slate-600 mt-3 mb-4 text-base font-normal">
                    <li>
                      {item.fname_ENG} {item.mname_ENG} {item.lname_ENG}
                    </li>
                    <li>Tel: {item.tel}</li>
                    <li>Email: {item.email} </li>
                    <li>Research Interests: {item.research_interests}</li>
                  </ul>
                  {item.presonal_web === "null" ? (
                    <>
                      <a
                        href={item.presonal_web ?? "#"}
                        className="hidden mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500 "
                      >
                        Personal Website
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={item.presonal_web ?? "#"}
                        className="mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500 "
                      >
                        Personal Website
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default ShowPeople;
