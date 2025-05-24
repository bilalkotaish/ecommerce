import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/index.jsx";
export default function ProductSlider(props) {
  return (
    <div className="productslider py-3">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        className="mySwiper"
        slidesPerView={props.items}
      >
        {props.data?.length !== 0 &&
          props.data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="item h-[390px] w-[100%] flex">
                  <ProductItem item={item} />
                </div>
              </SwiperSlide>
            );
          })}
        {/* <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
