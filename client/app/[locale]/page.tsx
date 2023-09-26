"use client";
import Carousel from "@/components/Carousel";
import AcademicFirstPage from "@/components/AcademicHome/AcademicFirstPage";
import NewsAndEvent from "@/components/NewAndEventHome/NewsAndEvent";
import { CarouselProps } from "@/types/carousel";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Home() {
  const images: CarouselProps[] = [
    {
      images: "/bg1.jpg",
      href: "#",
      title: "COMPUTER SCIENCE",
      content: "CMU",
    },
    {
      images: "/bg2.jpg",
      href: "#",
      title: "COMPUTER SCIENCE",
      content: "CMU",
    },
  ];
  return (
    <div>
      <div className="!hidden sm:!block">
        <Carousel images={images} />
      </div>

      <AcademicFirstPage></AcademicFirstPage>
      <NewsAndEvent></NewsAndEvent>
      <LocaleSwitcher></LocaleSwitcher>
    </div>
  );
}
