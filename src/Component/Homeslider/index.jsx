import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

export default function HomeSlider() {
  return (
    <div className="homeslider">
      <div className="container">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          className="sliderhome"
        >
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="src\assets\banner1.jpg"
                className="w-full"
                alt="bannerslide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="src\assets\banner2.jpg"
                className="w-full"
                alt="bannerslide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="src\assets\banner3.jpg"
                className="w-full"
                alt="bannerslide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="src\assets\banner4.jpg"
                className="w-full"
                alt="bannerslide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="src\assets\banner7.jpg"
                className="w-full"
                alt="bannerslide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="src\assets\banner6.jpg"
                className="w-full"
                alt="bannerslide"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="src\assets\banner8.jpg"
                className="w-full"
                alt="bannerslide"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
