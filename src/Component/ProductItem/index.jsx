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

export default function ProductItem(props) {
  const context = useContext(myContext);
  const { item } = props;

  // Safely get the first image URL
  const primaryImage = item?.images?.[0]?.url;
  const secondaryImage = item?.images?.[1]?.url;

  // Handle category display - ensure we show the name if it's an object
  const categoryName =
    typeof item?.category === "object" ? item?.category?.name : item?.category;

  return (
    <div className="productitem bg-white rounded-lg border-2 border-[rgba(0,0,0,0.1)] shadow-lg overflow-hidden">
      <div className="imagewrapper group/sub relative w-full bg-white rounded-lg border-1 border-[rgba(0,0,0,0.1)] shadow-md">
        <Link to={`/productdetails/${item?.id || item?._id}`}>
          <div className="img h-[250px] overflow-hidden relative">
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

        {item?.discount && (
          <span className="discount text-orange-500 flex items-center absolute text-[12px] font-[600] top-2 left-2 bg-white px-2 py-1 rounded-md">
            {item.discount}%
          </span>
        )}

        <div className="action absolute top-[-200px] right-[-5px] transition-all flex flex-col items-center gap-2 w-50px h-50px group/sub group-hover/sub:top-2 group-hover/sub:right-2 opacity-0 group-hover/sub:opacity-100">
          <Tooltip title="Add to wishlist">
            <Button className="absolute top-2 right-2 p-2 !rounded-full w-[35px] h-[35px] !bg-white text-black font-[500] hover:!bg-primary hover:text-white transition-all duration-300 group">
              <IoMdHeartEmpty className="text-[18px] text-gray-500 group-hover:text-white group-hover:opacity-1" />
            </Button>
          </Tooltip>

          <Tooltip title="Quick view">
            <Button
              className="absolute top-12 right-2 p-2 !rounded-full w-[35px] h-[35px] !bg-white text-black hover:!bg-primary hover:text-white transition-all duration-300 group"
              onClick={() => context.handleOpen(true, item)}
            >
              <IoExpandOutline className="text-[18px] text-gray-500 group-hover:text-white" />
            </Button>
          </Tooltip>

          <Tooltip title="Compare">
            <Button className="absolute top-[88px] right-2 p-2 !rounded-full w-[35px] h-[35px] !bg-white text-black hover:!bg-primary hover:text-white transition-all duration-300 group">
              <IoGitCompareOutline className="text-[18px] text-gray-500 group-hover:text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="!text-[12px] link transition-all">
          <Link to="/">{categoryName || "Uncategorized"}</Link>
        </h6>

        <h3 className="text-[11px] link title mt-2 transition-all text-black font-[600]">
          <Link to={`/productdetails/${item?.id || item?._id}`}>
            {item?.name?.substr(0, 40) + "..." || "Product Name"}
          </Link>
        </h3>

        <div className="flex items-center gap-3 mt-2">
          {item?.oldprice && (
            <span className="oldprice line-through text-gray-500 text-[15px] font-[500]">
              ${item.oldprice}
            </span>
          )}
          <span className="newprice text-primary font-bold">
            ${item?.price || "N/A"}
          </span>
        </div>

        {item?.rating !== undefined && (
          <Rating
            name="size-small"
            defaultValue={item.rating}
            size="small"
            readOnly
            precision={0.5}
          />
        )}
      </div>
    </div>
  );
}
