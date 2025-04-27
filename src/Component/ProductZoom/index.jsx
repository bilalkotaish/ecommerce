import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";

export default function Productzoom() {
  const [slideindex, setslideindex] = useState(0);
  const usezoom1 = useRef();
  const usezoom2 = useRef();
  const Goto = (index) => {
    setslideindex(index);
    usezoom1.current.swiper.slideTo(index);
    usezoom2.current.swiper.slideTo(index);
  };
  return (
    <div className="flex gap-3 ">
      <div className="slider w-[15%]">
        <Swiper
          ref={usezoom1}
          direction={"vertical"}
          slidesPerView={2} // Number of slides visible at a time
          spaceBetween={20} // Space between slides
          navigation={true} // Enable navigation buttons (next/prev)
          modules={[Navigation]} // Import navigation module
          className="zoomthumbs h-[500px]"
        >
          <SwiperSlide>
            <div
              className={`item gap-2 rounded-md overlow-hidden cursor-pointer group ${
                slideindex == 0 ? "opacity-1" : "opacity-30"
              }`}
              onClick={() => {
                Goto(0);
              }}
            >
              <img
                src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                alt="Product 1"
                className=" w-full transition-full rounded-lg group-hover:scale-105"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="item item gap-2 rounded-md overlow-hidden cursor-pointer group "
              onClick={() => {
                Goto(1);
              }}
            >
              <img
                src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg"
                alt="Product 2"
                className="w-full transition-full rounded-lg group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="item gap-2 rounded-md overlow-hidden cursor-pointer group"
              onClick={() => {
                Goto(2);
              }}
            >
              <img
                src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                alt="Product 1"
                className=" w-full transition-full rounded-lg group-hover:scale-105"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="item item gap-2 rounded-md overlow-hidden cursor-pointer group"
              onClick={() => {
                Goto(3);
              }}
            >
              <img
                src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg"
                alt="Product 2"
                className="w-full transition-full rounded-lg group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="zoomcontainer w-[85%] h-[500px] overflow-hidden">
        <Swiper
          slidesPerView={1}
          ref={usezoom2}
          spaceBetween={0}
          navigation={false}
        >
          <SwiperSlide>
            <InnerImageZoom
              src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
              zoomType="hover"
              zoomScale={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg"
              zoomType="hover"
              zoomScale={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
              zoomType="hover"
              zoomScale={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg"
              zoomType="hover"
              zoomScale={1}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
