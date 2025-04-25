import Adsslider from "../../Component/Adsslider/index.jsx";
import Catslider from "../../Component/Catslider/index.jsx";
import HomeSlider from "../../Component/Homeslider/index.jsx";
import Bannerboxv2 from "../../Component/bannerboxv2/index.jsx";
import Blogitem from "../../Component/Blogitem/index.jsx";
import { Navigation } from "swiper/modules";
import "./../../index.css";
import { FaShippingFast } from "react-icons/fa";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductSlider from "../../Component/ProductSlider/index.jsx";
import Footer from "../../Component/Footer/index.jsx";
import Homev2 from "../../Component/homesliderv2/index.jsx";
export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HomeSlider />

      <Catslider />

      <section className="py-6">
        <div className="container flex items-center gap-5">
          <div className="part1 w-[70%]">
            <Homev2 />
          </div>
          <div className="part-2 w-[30%]  flex items-center gap-5 h-[195px]justify-between flex-col">
            <Bannerboxv2 info="right" image="src\assets\bannerv2.jpg" />
            <Bannerboxv2 info="left" image="src\assets\bannerv2-2.jpg" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec">
              <h2 className="text-[25px] font-[600]">Popular Products</h2>
              <p className="text-[15px] font-[600]">Shop the latest products</p>
            </div>

            <div className="rightsec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Grocery" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewllery" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="freeship w-[70%] m-auto p-4 py-2 border border-[red] rounded-md flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex col-1 items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] uppercase font-[600]">
                Free Shipping
              </span>
            </div>
            <div className="flex col-2 items-center gap-1">
              <p className=" mb-0 font-[600]">
                Get Free Shipping on all orders over $100
              </p>
            </div>
            <div className="flex col-3 items-center gap-1">
              <p className="text-[20px] mb-0 font-[600]">Shop Now</p>
            </div>
          </div>

          <Adsslider items={4} />
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec">
              <h2 className="text-[25px] font-[600]">Latest Products</h2>
            </div>
          </div>
          <ProductSlider items={5} />
          <Adsslider items={3} />
        </div>
      </section>
      <section className="bg-white py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec">
              <h2 className="text-[25px] font-[600]">Featured Products</h2>
            </div>
          </div>
          <ProductSlider items={5} />
          <Adsslider items={3} />
        </div>
      </section>

      <section className="bg-white blogsection pb-8 py-5 pt-0">
        <div className="py-5 container">
          <h2 className="text-[25px] font-[600]">Latest Blogs</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="swiperblog"
          >
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
