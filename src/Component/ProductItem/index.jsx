import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { IoExpandOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import { IoGitCompareOutline } from "react-icons/io5";
import { useContext } from "react";
import { myContext } from "../../App";
export default function ProductItem() {
  const context = useContext(myContext);

  return (
    <div className="productitem  bg-white rounded-lg border-2 border-[rgba(0,0,0,0.1)] shadow-lg overflow-hidden">
      <div className="imagewrapper group/sub  relative w-full  bg-white rounded-lg border-1 border-[rgba(0,0,0,0.1)] shadow-md">
        <Link to="/product/1">
          <div className="img h-[250px] overflow-hidden">
            <img
              src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
              alt="product"
              className="w-full h-full object-cover transition-all duration-300 group-hover/sub:scale-110"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg"
              alt="product"
              className="w-full h-[250px] absolute top-0 left-0 transition-all duration-1000 opacity-0 group-hover/sub:opacity-100  "
            />
          </div>
        </Link>
        <span className="discount text-orange-500 flex items-center absolute text-[12px] font-[600] top-2 left-2 bg-white px-2 py-1 rounded-md">
          50% off
        </span>
        <div
          className="action absolute  top-[-200px] right-[-5px] transition-all flex flex-col 
        items-center gap-2 w-50px h-50px group/sub group-hover/sub:top-2 group-hover/sub:right-2 opacity-0 group-hover/sub:opacity-100"
        >
          <Button
            className="absolute top-2 right-2  p-2 !rounded-full w-[35px] h-[35px] 
          !bg-white text-black font-[500] hover:!bg-primary hover:text-white transition-all duration-300  group "
          >
            <IoMdHeartEmpty className="text-[18px] text-gray-500 group-hover:text-white group-hover:opacity-1" />
          </Button>
          <Button
            className="absolute top-2 right-2  p-2 !rounded-full w-[35px] h-[35px] 
          !bg-white text-black hover:!bg-primary hover:text-white transition-all duration-300 group"
          >
            <IoExpandOutline
              onClick={() => context.setOpenProduct(true)}
              className="text-[18px] text-gray-500 group-hover:text-white"
            />
          </Button>
          <Button
            className="absolute top-2 right-2  p-2 !rounded-full w-[35px] h-[35px] 
          !bg-white text-black hover:!bg-primary hover:text-white transition-all duration-300 group"
          >
            <IoGitCompareOutline className="text-[18px] text-gray-500 group-hover:text-white" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="!text-[12px] link transition-all ">
          <Link to="/">CLAFOUTIS</Link>
        </h6>
        <h3 className=" text-[13px] link title mt-2 transition-all text-black font-[600]">
          <Link to="/">Men Opaque Casual Shirt</Link>
        </h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="oldprice line-through text-gray-500 text-[15px] font-[500]">
            58.00$
          </span>
          <span className="newprice text-primary font-bold">29.00$</span>
        </div>

        <Rating name="size-small" defaultValue={3} size="small" readOnly />
      </div>
    </div>
  );
}
