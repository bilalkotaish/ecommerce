import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Productzoom from "../ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import TextField from "@mui/material/TextField";
import ProductSlider from "../ProductSlider";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import ProductModal from "../ProductModal";
import { fetchData } from "../../utils/api";
import { useParams } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
export default function ProductDetails() {
  const { id } = useParams();
  const [buttonindex, setbuttonindex] = useState(null);
  const [product, setproduct] = useState({});
  const [ActiveTab, setActiveTab] = useState(0);
  const [slideindex, setslideindex] = useState(0);
  const [buttonindex1, setbuttonindex1] = useState(null);
  const [buttonindex2, setbuttonindex2] = useState(null);

  const handleclick = (index) => {
    setbuttonindex(index);
  };
  const handleclickram = (index) => {
    setbuttonindex1(index);
  };
  const handleclickweight = (index) => {
    setbuttonindex2(index);
  };
  const usezoom1 = useRef();
  const usezoom2 = useRef();
  const Goto = (index) => {
    setslideindex(index);
    usezoom1.current.swiper.slideTo(index);
    usezoom2.current.swiper.slideTo(index);
  };
  useEffect(() => {
    fetchData(`/api/product/${id}`).then((res) => {
      if (res?.error === false) {
        setproduct(res?.data);
      } else {
        console.log("Error fetching product details");
      }
    });
  }, []);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" to={"/"} className="link">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                className="link"
              >
                {product?.category?.name}
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                className="link"
              >
                {product?.name}
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <section className="!bg-white py-5">
        {product?.images?.length > 0 && (
          <div className=" container flex gap-8 items-center">
            <div className="productzoom w-[40%] h-[500px] overflow-hidden">
              <div className="flex gap-3 ">
                <div className="slider w-[15%]">
                  <Swiper
                    ref={usezoom1}
                    direction={"vertical"}
                    slidesPerView={4} // Number of slides visible at a time
                    spaceBetween={5} // Space between slides
                    navigation={false} // Enable navigation buttons (next/prev)
                    modules={[Navigation]} // Import navigation module
                    className="zoomthumbs h-[500px]"
                  >
                    {product?.images?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className={`item  rounded-md !overflow-hidden cursor-pointer group ${
                            slideindex === index ? "opacity-1" : "opacity-30"
                          }`}
                          onClick={() => {
                            Goto(index);
                          }}
                        >
                          <img
                            src={item.url}
                            alt={`Product ${index}`}
                            className=" w-full transition-full rounded-lg group-hover:scale-105"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {
                  <div className="zoomcontainer w-[85%] h-[500px] overflow-hidden rounded-md">
                    <Swiper
                      slidesPerView={1}
                      ref={usezoom2}
                      spaceBetween={0}
                      navigation={false}
                    >
                      {product?.images?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <InnerImageZoom
                            src={item.url}
                            zoomType="hover"
                            zoomScale={1}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                }
              </div>
            </div>
            <div className="content w-full md:w-[100%] px-4 md:px-8 lg:px-12">
              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl !space-nowrap font-semibold no-wrap mb-4 text-gray-900 tracking-tight">
                {product?.name}
              </h1>

              {/* Rating and Brand */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                  <Rating
                    name="product-rating"
                    value={product?.rating || 0}
                    precision={0.5}
                    size="small"
                    readOnly
                    className="!text-yellow-500"
                  />
                  <span className="text-xs text-gray-600 ml-1">
                    ({product?.reviews || 0} reviews)
                  </span>
                </div>
                <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Brand:{" "}
                  <span className="font-medium text-gray-800">
                    {product?.brand || "Unknown"}
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  {product?.oldprice && (
                    <span className="line-through text-gray-400 text-lg font-medium">
                      ${product.oldprice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-primary text-2xl font-bold">
                    ${product?.price?.toFixed(2) || "N/A"}
                  </span>
                  {product.item?.discount && (
                    <span className="ml-2 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                      {product?.discount}% OFF
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  <span
                    className={
                      product?.countInStock > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {product?.countInStock > 0
                      ? `In Stock (${product?.countInStock} available)`
                      : "Out of Stock"}
                  </span>
                  {product?.countInStock > 0 && (
                    <span className="ml-2 text-gray-500 italic">
                      Free shipping (2-3 business days)
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {product?.description || "No description available."}
                </p>
              </div>
              {/* Size Selection */}
              <div className="flex items-center mb-5">
                <span className="text-base font-medium">Size:</span>
                <div className="flex items-center gap-2 pl-4">
                  {product?.size?.map((size, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      className={`!rounded-full !px-4 !py-1 ${
                        buttonindex === index
                          ? "!bg-primary !text-white"
                          : "!text-gray-700"
                      }`}
                      onClick={() => handleclick(index)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-5">
                <span className="text-base font-medium">Ram:</span>
                <div className="flex items-center gap-2 pl-4">
                  {product?.productRam?.map((ram, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      className={`!rounded-full !px-4 !py-1 ${
                        buttonindex1 === index
                          ? "!bg-primary !text-white"
                          : "!text-gray-700"
                      }`}
                      onClick={() => handleclickram(index)}
                    >
                      {ram}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-5">
                <span className="text-base font-medium">Weight:</span>
                <div className="flex items-center gap-2 pl-4">
                  {product?.productweight?.map((weight, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      className={`!rounded-full !px-4 !py-1 ${
                        buttonindex2 === index
                          ? "!bg-primary !text-white"
                          : "!text-gray-700"
                      }`}
                      onClick={() => handleclickweight(index)}
                    >
                      {weight}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center mb-5">
                <Button
                  variant="contained"
                  className="!bg-primary !text-white flex items-center gap-2 !ml-4 !px-4 !py-2 hover:!bg-primary-dark whitespace-nowrap"
                >
                  <MdOutlineAddShoppingCart className="text-sm" />
                  Add To Cart
                </Button>
              </div>

              {/* Wishlist & Compare */}
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-primary transition text-sm">
                  <IoMdHeartEmpty className="text-lg" />
                  Add To Wishlist
                </span>
                <span className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-primary transition text-sm">
                  <IoGitCompareOutline className="text-lg" />
                  Add To Compare
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="container !mt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`text-[18px] link cursor-pointer ${
                ActiveTab === 0 ? "text-primary" : ""
              }`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Description
            </span>
            <span
              className={`text-[18px] link cursor-pointer ${
                ActiveTab === 1 ? "text-primary" : ""
              }`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Product Details
            </span>
            <span
              className={`text-[18px] link cursor-pointer ${
                ActiveTab === 2 ? "text-primary" : ""
              }`}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              Reviews(4)
            </span>
          </div>

          {ActiveTab === 0 && (
            <div className="shadow-md w-full p-5 rounded-md">
              <p className="text-gray-600 text-[14px] mb-5">
                Crafted for comfort and effortless sophistication. Designed with
                lightweight, breathable fabric, it ensures all-day ease whether
                you're at work, out with friends, or relaxing on the weekend.
              </p>
              <h4 className="font-[600] mb-4">Casual Shirt</h4>

              <p className="text-gray-600 text-[14px] mb-4 mt-3">
                stay comfortable and stylish with this classic casual shirt,
                crafted from soft, breathable fabric. Featuring a relaxed fit,
                button-down front, and versatile design, it's perfect for
                everyday wear
              </p>

              <h4 className="font-[600] mb-4"> Free Shipping & Easy Returns</h4>
              <p className="text-gray-600 text-[14px] mb-4 mt-3">
                Enjoy free shipping on all orders, plus hassle-free returns if
                you're not completely satisfied. Shop with confidence!
              </p>
              <h4 className="font-[600] mb-4"> 24/7 Online Support</h4>
              <p className="text-gray-600 text-[14px] mb-4 mt-3">
                Our team is always here to help! Reach out anytime for fast,
                friendly assistance.
              </p>
            </div>
          )}

          {ActiveTab === 1 && (
            <div className="shadow-md w-full p-5 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Stand Up
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded (w/o wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Folded (w wheels)
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="px-6 py-4">50" x 24" x 60"</td>
                      <td class="px-6 py-4">50" x 24" x 15"</td>
                      <td class="px-6 py-4">50" x 24" x 18"</td>
                      <td class="px-6 py-4">32"</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <td class="px-6 py-4">48" x 22" x 58"</td>
                      <td class="px-6 py-4">48" x 22" x 14"</td>
                      <td class="px-6 py-4">48" x 22" x 17"</td>
                      <td class="px-6 py-4">30"</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <td class="px-6 py-4">52" x 26" x 62"</td>
                      <td class="px-6 py-4">52" x 26" x 16"</td>
                      <td class="px-6 py-4">52" x 26" x 19"</td>
                      <td class="px-6 py-4">34"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {ActiveTab === 2 && (
            <div className="shadow-md w-full p-5 rounded-md">
              <div className="containerreview w-full">
                <h2 className="font-[500] text-[20px]"> Customers Questions</h2>

                <div className="reviewscroll w-full pt-5 pb-4 pr-5 overflow-x-hidden overflow-y-scroll max-h-[300px] ">
                  <div className="w-full review flex items-center justify-between  border-b border-[rgba(0,0,0,0.3)]   mt-4">
                    <div className="info w-[80%] flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] rounded-full overflow-hidden">
                        <img
                          src="src\assets\reviewimg.jpg"
                          className="w-full"
                          alt=""
                        />
                      </div>

                      <div className="info w-[80%]">
                        <h3 className="text-[16px]">Bilal Kotaish</h3>
                        <h5 className="text-[13px] text-gray-500 mb-0">
                          24-4-2025
                        </h5>
                        <p className=" mt-0 mb-0">
                          {" "}
                          "I absolutely love this casual shirt! The fabric feels
                          super soft against the skin, and the fit is just right
                          — relaxed but still flattering. It’s perfect for
                          everything from weekend outings to casual Fridays at
                          work. The color hasn’t faded after multiple washes,
                          and the stitching feels really durable. Definitely a
                          great value for the price. I’ll be ordering more
                          colors soon!"
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                  <div className="w-full review flex items-center justify-between  border-b border-[rgba(0,0,0,0.3)]   mt-4">
                    <div className="info w-[80%] flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] rounded-full overflow-hidden">
                        <img
                          src="src\assets\reviewimg.jpg"
                          className="w-full"
                          alt=""
                        />
                      </div>

                      <div className="info w-[80%]">
                        <h3 className="text-[16px]">Bilal Kotaish</h3>
                        <h5 className="text-[13px] text-gray-500 mb-0">
                          24-4-2025
                        </h5>
                        <p className=" mt-0 mb-0">
                          {" "}
                          "I absolutely love this casual shirt! The fabric feels
                          super soft against the skin, and the fit is just right
                          — relaxed but still flattering. It’s perfect for
                          everything from weekend outings to casual Fridays at
                          work. The color hasn’t faded after multiple washes,
                          and the stitching feels really durable. Definitely a
                          great value for the price. I’ll be ordering more
                          colors soon!"
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      size="small"
                      readOnly
                    />
                  </div>
                </div>

                <br />

                <div className="reviewform bg-[#fafafa] rounded-md p-4 mr-6 ">
                  <h2 className="text-[18px] font-[500] "> Add Review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Leave A Review"
                      multiline
                      rows={4}
                      className="w-full "
                    />
                    <br /> <br />
                    <Rating name="size-small " defaultValue={3} size="small" />
                    <div className="flex items-center mt-5">
                      <Button className="!bg-primary !text-white !rounded-full">
                        Submit Review
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center pt-10  ">
          <div className="leftsec ml-6">
            <h2 className="text-[25px] font-[600] mb-2 ">Related Products</h2>
          </div>{" "}
        </div>
        <div className="ml-6 mr-6">
          <ProductSlider items={6} />
        </div>
      </section>
    </>
  );
}
