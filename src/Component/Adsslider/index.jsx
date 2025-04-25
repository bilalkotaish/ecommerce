import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Bannerbox from "../BannerBox";
export default function Adsslider(props) {
  return (
    <div className=" w-full bg-white py-16">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="smlbtn"
      >
        <SwiperSlide>
          <Bannerbox
            img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745345997_HPMC.jpg?im=Resize=(768,448)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Bannerbox
            img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745427449_HPMC--17-.jpg?im=Resize=(768,448)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Bannerbox
            img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744469612_grocery_super_saver.jpg?im=Resize=(768,448)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Bannerbox
            img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745427216_HPMC--11-.jpg?im=Resize=(768,448)"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
