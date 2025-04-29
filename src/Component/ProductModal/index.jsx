import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Qtybox from "../../Component/Qtybox";
import { useState } from "react";

export default function ProductModal() {
  const [buttonindex, setbuttonindex] = useState(null);
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="content w-full md:w-[60%] px-5 md:px-10">
      <h1 className="text-2xl font-semibold mb-3 text-gray-800">
        Men Opaque Casual Shirt
      </h1>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-gray-500 text-sm">
          Brand: <span className="font-semibold text-gray-800">Zara</span>
        </span>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <span className="text-sm text-gray-500 hover:underline cursor-pointer">
          Reviews (5)
        </span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="line-through text-gray-400 text-lg font-medium">
          $58.00
        </span>
        <span className="text-primary text-lg font-bold">$29.00</span>
      </div>

      <span className="text-sm text-gray-700 font-semibold block mb-3">
        Available in Stock:{" "}
        <span className="text-green-600 font-bold">147 items</span>
      </span>

      <p className="text-gray-600 text-sm leading-6 mb-5">
        Crafted for comfort and effortless sophistication. Designed with
        lightweight, breathable fabric, it ensures all-day ease whether you're
        at work, out with friends, or relaxing on the weekend.
      </p>

      {/* Size Selection */}
      <div className="flex items-center mb-5">
        <span className="text-base font-medium">Size:</span>
        <div className="flex items-center gap-2 pl-4">
          {sizes.map((size, index) => (
            <Button
              key={index}
              variant="outlined"
              size="small"
              className={`!rounded-full !px-4 !py-1 ${
                buttonindex === index
                  ? "!bg-primary !text-white"
                  : "!text-gray-700"
              }`}
              onClick={() => setbuttonindex(index)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Shipping Info */}
      <p className="text-gray-500 text-sm mb-4 italic">
        Free Shipping (Est. Delivery: 2-3 Days)
      </p>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center mb-5">
        <div className="w-[70px]">
          <Qtybox />
        </div>
        <Button
          variant="contained"
          className="!bg-primary !text-white flex items-center gap-2 !ml-4 hover:!bg-primary-dark"
        >
          <MdOutlineAddShoppingCart className="text-lg" />
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
  );
}
