import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { IoMdClose } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
export default function CartItems(props) {
  const [sizeanchorEl, sizesetAnchorEl] = useState(null);
  const [selectedSize, setselectedSize] = useState(props.size);

  const opensize = Boolean(sizeanchorEl);
  const [qtyanchorEl, qtysetAnchorEl] = useState(null);
  const [selectedqty, setselectedqty] = useState(props.qty);

  const openqty = Boolean(qtyanchorEl);
  const handleClickSize = (event) => {
    sizesetAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    sizesetAnchorEl(null);
    if (value !== null) {
      setselectedSize(value);
    }
  };
  const handleClickqty = (event) => {
    qtysetAnchorEl(event.currentTarget);
  };
  const handleCloseqty = (value) => {
    qtysetAnchorEl(null);
    if (value !== null) {
      setselectedqty(value);
    }
  };

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

        <div className="flex items-center gap-4">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1fa] 
          text-[11px] py-1 px-2 font-[600] cursor-pointer rounded-md"
              onClick={handleClickSize}
            >
              {" "}
              Size: {selectedSize} <GoTriangleDown />
            </span>

            <Menu
              id="size-menu"
              anchorEl={sizeanchorEl}
              open={opensize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1fa] text-[11px] py-1 px-2
             font-[600] cursor-pointer rounded-md"
              onClick={handleClickqty}
            >
              {" "}
              Qty: {selectedqty} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={qtyanchorEl}
              open={openqty}
              onClose={() => handleCloseqty(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseqty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseqty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseqty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseqty(4)}>4</MenuItem>
            </Menu>
          </div>
        </div>

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
      </div>
    </div>
  );
}
