"use client";
import React from "react";

import Banner from "@/components/AcademicPage/Banner";
import Image from "next/image";
import { PeopleProps } from "@/types/people";
import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";
import ShowPeople from "@/components/People/ShowPeople";

type Props = {};

export default function Master({}: Props) {
  const SidebarOflecturer: SidebarProps[] = [
    {
      type: "header",
      content: "People",
    },
    {
      type: "singleItem",
      content: "Lecturer",
      href: "#",
    },
    {
      type: "singleItem",
      content: "Staff",
      href: "#",
    },
  ];

  const people: PeopleProps[] = [
    {
      type: "lectur",
      academic_position_TH: "ผู้ช่วยศาสตราจารย์ ดร.",
      fname_TH: "วิจักษณ์",
      lname_TH: "ศรีสัจจะเลิศวาจา",
      position_TH:
        "รักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ ผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์",
      academic_position_ENG: "Assistant Professor Dr.",
      fname_ENG: "Wijak",
      lname_ENG: "Srisujjalertwaja",
      tel: " 053-943412 ต่อ 124",
      email: "wijak.cscmu@gmail.com",
      research_interests: "Recommender System",
      presonal_web: "https://www2.cs.science.cmu.ac.th/staff/wss/",

      path_people: "/personal/lecturers/p1.jpg",
    },
    {
      type: "lectur",
      academic_position_TH: "ผู้ช่วยศาสตราจารย์ ดร.",
      fname_TH: "รัศมีทิพย์",
      lname_TH: "วิตา",
      position_TH: "รักษาการแทนรองหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์",
      academic_position_ENG: "Assistant Professor Dr.",
      fname_ENG: "Ratsameetip",
      lname_ENG: "Wita",
      tel: " 053-943412 ต่อ 215",
      email: "ratsameetip.w@cmu.ac.th",
      research_interests:
        "Security management, webservice, ontology and semantic",
      presonal_web: "https://www2.cs.science.cmu.ac.th/staff/ratsameetip/",
      path_people: "/personal/lecturers/p2.jpg",
    },
    {
      type: "lectur",
      academic_position_TH: "ผู้ช่วยศาสตราจารย์ ดร.",
      fname_TH: "เมทินี",
      lname_TH: "เขียวกันยะ",
      position_TH:
        "รักษาการแทนผู้ช่วยหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ฝ่ายบริการวิชาการ",
      academic_position_ENG: "Assistant Professor Dr.",
      fname_ENG: "Matinee",
      lname_ENG: "Kiewkanya",
      tel: " 053-943412 ต่อ 113",
      email: "matinee.k@cmu.ac.th",
      research_interests:
        "Software Metrics, Software Improvement, Machine Learning",
      presonal_web: "https://www2.cs.science.cmu.ac.th/staff/matinee/",
      path_people: "/personal/lecturers/p3.jpg",
    },
    {
      type: "lectur",
      academic_position_TH: "ผู้ช่วยศาสตราจารย์",
      fname_TH: "เบญจมาศ",
      lname_TH: "ปัญญางาม",
      position_TH:
        "รักษาการแทนผู้ช่วยหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ฝ่ายกิจการพิเศษ",
      academic_position_ENG: "Assistant Professor ",
      fname_ENG: "Benjamas",
      lname_ENG: "Panyangam",
      tel: "  053-943412 ต่อ 112",
      email: "bpanyangam@yahoo.com",
      presonal_web: "https://www2.cs.science.cmu.ac.th/staff/benjamas/",
      path_people: "/personal/lecturers/p4.jpg",
    },
    {
      type: "lectur",
      academic_position_TH: "ผู้ช่วยศาสตราจารย์ ดร.",
      fname_TH: "ปราการ",
      lname_TH: "อุณจักร",
      position_TH:
        "รักษาการแทนผู้ช่วยหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ฝ่ายวิจัยและวิชาการ",
      academic_position_ENG: "Assistant Professor Dr.",
      fname_ENG: "Prakarn",
      lname_ENG: "Unachak",
      tel: "  053-943412 ต่อ 119",
      email: "fortmanpung@gmail.com",
      research_interests: "Evolutionary Computing, Optimization",
      presonal_web: "null",
      path_people: "/personal/lecturers/p5.jpg",
    },
    {
      type: "lectur",
      academic_position_TH: "อาจารย์ ดร.",
      fname_TH: "สุธาสินี",
      lname_TH: "โทวุฒิกุล",
      academic_position_ENG: "Dr.",
      fname_ENG: "Sutasinee",
      lname_ENG: "Thovuttikul",
      tel: "053-943412 ต่อ 119",
      email: "sutasinee.th@cmu.ac.th",
      research_interests:
        "Human-computer interaction, Human behavior and interaction Simulation, Social behavioral analysis and design for Different Cultural Communication, Virtual Reality (VR) and Augmented Reality (AR)",
      path_people: "/personal/lecturers/p6.jpg",
      presonal_web:
        "https://www2.cs.science.cmu.ac.th/staff/sutasinee/doku.php",
    },
    {
      type: "staff",

      fname_TH: "นางอริษา",
      lname_TH: "ทาทอง",
      position_TH: "พนักงานปฏิบัติงาน",
      tel: "053-943412 ต่อ 101",
      email: "arisa.t@cmu.ac.th",
      path_people: "/personal/lecturers/p6.jpg",
      presonal_web: "null",
    },
  ];
  return (
    <>
      <Banner
        imageSrc="/academic_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="PEOPLE"
        subtitle="LECTURERS"
        customStyles={{
          width: "300px", // Custom width for this page
          height: "100px", // Custom height for this page
          bottom: "-15px", // Custom bottom attribute for this page
        }}
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>

          <div className="p-1 pt-3 ">
            <ShowPeople peopleItem={people} type_check={"staff"}></ShowPeople>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={SidebarOflecturer}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  );
}
