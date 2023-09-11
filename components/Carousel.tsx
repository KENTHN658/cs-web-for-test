import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselProps } from "@/types/carousel";

const Carousel = ({ images }: CarouselProps) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {images.map((src, i) => (
        <SwiperSlide>
          <div className="relative h-96 flex-[0_0_100%]" key={i}>
            <Image
              src={src}
              fill
              className="object-cover"
              alt="asdasdasdasdad"
            />
            <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
              <h1 className="text-white font-semibold text-4xl">
                COMPUTER SCIENCE
              </h1>
              <p className="text-gray-200 pr-9">CMU</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
