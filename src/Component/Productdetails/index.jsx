import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Productzoom from "../ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useState } from "react";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import TextField from "@mui/material/TextField";
import ProductSlider from "../ProductSlider";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import ProductModal from "../ProductModal";

export default function ProductDetails() {
  const [buttonindex, setbuttonindex] = useState(null);
  const sizes = ["S", "M", "L", "XL"];
  const [ActiveTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="link">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                className="link"
              >
                Fashion
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                className="link"
              >
                Men Opaque Casual Shirt
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <section className="!bg-white py-5">
        <div className=" container flex gap-8 items-center">
          <div className="productzoom w-[40%] h-[500px] overflow-hidden">
            <Productzoom />
          </div>
          <ProductModal />
        </div>

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
