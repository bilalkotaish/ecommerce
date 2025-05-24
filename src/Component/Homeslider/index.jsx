import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

export default function HomeSlider(props) {
  return (
    <div className="homeslider bg-white">
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
          {props.data.length !== 0 &&
            props.data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="rounded-[20px] overflow-hidden item">
                    <img
                      src={item.image[0].url}
                      className="w-full"
                      alt="bannerslide"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
