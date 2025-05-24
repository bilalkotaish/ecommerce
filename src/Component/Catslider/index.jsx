import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
export default function Catslider(props) {
  return (
    <div className="catslider py-8 bg-white pt-8">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {props.data.length !== 0 &&
            props.data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Link to="/products">
                    <div className="item !p-3 !py-7 !px-3  bg-blue-50 rounded-sm  text-center items-center flex flex-col justify-center">
                      <img
                        src={item?.images[0]?.url}
                        className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                        alt="bannerslide"
                      />
                      <h3 className="text-center font-[300]">{item.name}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
