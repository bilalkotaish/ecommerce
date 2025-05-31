import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoExpandOutline, IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { myContext } from "../../App";
import { useContext } from "react";

export default function ProductItemListView(props) {
  const context = useContext(myContext);
  const { item } = props;

  // Safely get the first image URL
  const primaryImage = item?.images?.[0]?.url;
  const secondaryImage = item?.images?.[1]?.url;

  // Handle category display - ensure we show the name if it's an object
  const categoryName =
    typeof item?.category === "object" ? item?.category?.name : item?.category;
  return (
    <div className="productitem flex bg-white rounded-lg border-2 border-[rgba(0,0,0,0.1)] shadow-lg overflow-hidden w-full">
      {/* Image Section */}
      <div className="imagewrapper group/sub relative w-[25%] min-w-[250px] bg-white rounded-l-lg border-r border-[rgba(0,0,0,0.1)] overflow-hidden">
        <Link to={`/productdetails/${item?.id || item?._id}`}>
          <div className="img h-[300px] overflow-hidden">
            {primaryImage && (
              <img
                src={primaryImage}
                alt={item?.name || "Product image"}
                className="w-full h-full object-cover transition-all duration-300 group-hover/sub:scale-110"
              />
            )}
            {secondaryImage && (
              <img
                src={secondaryImage}
                alt={item?.name || "Product secondary image"}
                className="w-full h-full absolute top-0 left-0 transition-all duration-1000 opacity-0 group-hover/sub:opacity-100 object-cover"
              />
            )}
          </div>
        </Link>

        <span className="discount text-orange-500 flex items-center absolute text-[12px] font-semibold top-2 left-2 bg-white px-2 py-1 rounded-md">
          {item?.discount}%
        </span>

        <div className="action absolute flex flex-col gap-2 top-2 right-2 opacity-0 group-hover/sub:opacity-100 transition-all">
          <Tooltip title="Wishlist" arrow>
            <Button className="!w-[35px] !h-[35px] !p-2 !rounded-full !bg-white hover:!bg-primary text-black hover:text-white">
              <IoMdHeartEmpty />
            </Button>
          </Tooltip>
          <Tooltip title="View" arrow>
            <Button className="!w-[35px] !h-[35px] !p-2 !rounded-full !bg-white hover:!bg-primary text-black hover:text-white">
              <IoExpandOutline onClick={() => context.setOpenProduct(true)} />
            </Button>
          </Tooltip>
          <Tooltip title="Compare" arrow>
            <Button className="!w-[35px] !h-[35px] !p-2 !rounded-full !bg-white hover:!bg-primary text-black hover:text-white">
              <IoGitCompareOutline />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Info Section */}
      <div className="info !p-6 w-[75%] flex flex-col justify-center">
        <h6 className="text-gray-500 text-[14px] font-medium uppercase mb-2">
          <Link to="/" className="hover:text-primary transition">
            {categoryName}
          </Link>
        </h6>

        <h3 className="text-[18px] font-semibold text-black leading-snug mb-3">
          <Link to="/" className="hover:text-primary transition">
            {item?.name}
          </Link>
        </h3>

        <p className="text-gray-600 text-[14px] mb-4">
          {item?.description ? item?.description : "No description available"}
        </p>

        <Rating
          name="size-small"
          defaultValue={item?.rating || 0}
          size="small"
          readOnly
          className="mb-4"
        />

        <div className="flex items-center gap-3 mb-4">
          <span className="oldprice line-through text-gray-500 text-[14px]">
            {item?.oldprice}$
          </span>
          <span className="newprice text-primary font-bold text-[20px]">
            {item?.price}$
          </span>
        </div>
        <div className="group w-[22%]">
          <Button
            className="gap-2 !text-white !w-full  !bg-primary group-hover:!bg-[rgba(0,0,0,0.7)] !normal-case w-fit"
            startIcon={<MdOutlineAddShoppingCart />}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
