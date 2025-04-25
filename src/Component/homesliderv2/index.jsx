import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";

export default function Homev2() {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      effect={"fade"}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="homesliderv2"
    >
      <SwiperSlide>
        <div className="w-full rounded-md item overflow-hidden ">
          <img src="src\assets\sliderv2(1).jpg" />

          <div
            className="info absolute top-0 -right-[100%] w-[50%] opacity-0 duration-700 
          transition-all h-[100%] z-50 p-8 items-center flex flex-col justify-center"
          >
            <h4 className="text-[20px] w-full font-[500] text-left  opacity-0 relative -right-[100%] ">
              {" "}
              Big Saving Day Sale!!
            </h4>
            <h2 className="text-[30px] mt-6 font-[650]  opacity-0 relative -right-[100%] ">
              {" "}
              Women Solid Rounded Top Yellow T-Shirt
            </h2>

            <h5 className="text-[20px] w-full font-[500]  opacity-0 relative -right-[100%] flex items-center gap-5 text-left mt-4">
              Starting At{" "}
              <span className="text-primary text-[30px] !mr-4  ">$59.00</span>{" "}
            </h5>
            <div className="w-full opacity-0 relative -right-[100%] btn_">
              <Button className="!text-white !bg-primary  "> Shop Now</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item w-full overflow-hidden rounded-md">
          <img src="src\assets\sliderv2(2).jpg" />
          <div
            className="info absolute top-0 -right-[100%] w-[50%] opacity-0 duration-700 
          transition-all h-[100%] z-50 p-8 items-center flex flex-col justify-center"
          >
            <h4 className="text-[20px] w-full font-[500] opacity-0 relative -right-[100%] text-left ">
              {" "}
              Big Saving Day Sale!!
            </h4>
            <h2 className="text-[30px] opacity-0  opacity-0 relative -right-[100%]  mt-6 font-[650]">
              {" "}
              Buy The Modern SmartPhone with Multi Color
            </h2>

            <h5 className="text-[20px]  opacity-0 relative -right-[100%] w-full font-[500] flex items-center gap-5 text-left mt-4">
              Starting At{" "}
              <span className="text-primary   text-[30px] !mr-4">$590.00</span>{" "}
            </h5>
            <div className="w-full opacity-0 relative -right-[100%] btn_">
              <Button className="!text-white   !bg-primary"> Shop Now</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
