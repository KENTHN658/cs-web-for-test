"use client";
import Carousel from "@/components/Carousel";
import AcademicFirstPage from "@/components/AcademicFirstPage";
import NewsAndEvent from "@/components/NewsAndEvent";

export default function Home() {
  const images = ["/banner1.svg", "/banner2.svg", "/banner3.svg"];
  return (
    <div>
      <Carousel images={images} />
      <AcademicFirstPage></AcademicFirstPage>
      <NewsAndEvent></NewsAndEvent>
      
    </div>
  );
}
