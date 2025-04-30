import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { IoMdClose } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "@mui/material/Button";

export default function Listitems(props) {
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/productdetails" className="group">
          <img
            src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
            className="w-full group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoMdClose className="cursor-pointer absolute top-[0px] right-[0px] link transition-all text-[22px]" />
        <span className="text-[13px] text-gray-500">CLAFOUTIS</span>
        <h4 className="text-[16px] ">
          <Link to="/productdetails">Men Opaque Casual Shirt</Link>
        </h4>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />

        <div className="flex items-center gap-3 mt-2">
          <span className="oldprice line-through text-gray-500 text-[14px] font-[500]">
            58.00$
          </span>
          <span className="newprice text-primary text-[14px] font-bold">
            29.00$
          </span>
          <span className="newprice text-orange-500 text-[14px] font-bold">
            50% OFF
          </span>
        </div>

        <Button className="btn-org gap-2 !mt-3">
          Add To Cart
          <MdOutlineShoppingCart className="text-[18px]" />
        </Button>
      </div>
    </div>
  );
}
