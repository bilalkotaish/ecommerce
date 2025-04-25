import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
export default function Catslider() {
  return (
    <div className="catslider py-8 pt-8">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !pt-8 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Electonics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Grocery</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/products">
              <div className="item !p-3 !py-7 !px-3 bg-white rounded-sm  text-center items-center flex flex-col justify-center">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661120743_jw.png"
                  className="w-[80px] transition-all transform duration-300 ease-in-out hover:scale-110"
                  alt="bannerslide"
                />
                <h3 className="text-center font-[300]">Jwellery</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
