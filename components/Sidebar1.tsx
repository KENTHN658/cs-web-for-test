"use client";
import React from "react";
import { sidebarItem } from "@/utils/sidebar";
import { CustomFlowbiteTheme, Sidebar } from "flowbite-react";

type Props = {};

const Sidebar1 = (props: Props) => {
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
      <Sidebar theme={customTheme} className="w-full">
        <Sidebar.Items className=" p-0">
          <Sidebar.ItemGroup className="p-0">
            {sidebarItem.map((item, index) =>
              item.type === "header" ? (
                <>
                  <Sidebar.Item href={item.href} key={item.content}>
                    <h1>{item.content}</h1>
                  </Sidebar.Item>

                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                </>
              ) : item.type === "singleItem" ? (
                <>
                  <Sidebar.Item href={item.href} key={item.content}>
                    <p>{item.content}</p>
                  </Sidebar.Item>

                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                </>
              ) : item.type === "multiItem" ? (
                <>
                  <Sidebar.Collapse label={item.content} key={item.content}>
                    {item.SidebarOption ? (
                      item.SidebarOption.map((value, index) =>
                        value.type === "Have" ? (
                          <>
                            <div className="ml-5">
                              <Sidebar.Collapse label={value.title}>
                                {value.SideBarSubOption?.map(
                                  (value2, index) => (
                                    <>
                                      <Sidebar.Item href="#">
                                        <div className="ml-2">
                                          {value2.title}
                                        </div>
                                      </Sidebar.Item>
                                    </>
                                  )
                                )}
                              </Sidebar.Collapse>
                            </div>
                          </>
                        ) : (
                          <>
                            <Sidebar.Item href="#">{value.title}</Sidebar.Item>
                          </>
                        )
                      )
                    ) : (
                      <></>
                    )}
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                </>
              ) : (
                <></>
              )
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default Sidebar1;
