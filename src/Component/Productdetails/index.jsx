import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Productzoom from "../ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useState } from "react";
import Qtybox from "../../Component/Qtybox";

export default function ProductDetails() {
  const [buttonindex, setbuttonindex] = useState(null);
  const sizes = ["S", "M", "L", "XL"];

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
        <div className=" container flex gap-8">
          <div className="productzoom w-[40%] h-[500px] overflow-hidden">
            <Productzoom />
          </div>
          <div className="content w-[60%]">
            <h1 className="text-[25px] font-[600]">Men Opaque Casual Shirt</h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-[13px]">
                {" "}
                Brand:{" "}
                <span className="font-[500] text-black opacity-75"> Zara</span>
              </span>
              <Rating
                name="size-small"
                defaultValue={3}
                size="small"
                readOnly
              />
              <span className="text-[13px] text-gray-500 cursor-pointer">
                {" "}
                Reviews(5)
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="oldprice line-through text-gray-500 text-[20px] font-[500]">
                58.00$
              </span>
              <span className="newprice text-primary text-[20px] font-bold">
                29.00$
              </span>
            </div>
            <span className="text-[14px] text-gray-600 font-[600]">
              Available in Stock:{" "}
              <span className="text-green-600 !font-bold">147 items</span>
            </span>
            <p className="text-gray-600 text-[14px] mb-4 mt-3">
              Crafted for comfort and effortless sophistication. Designed with
              lightweight, breathable fabric, it ensures all-day ease whether
              you're at work, out with friends, or relaxing on the weekend.
            </p>
            <div className="flex items-center">
              <span className="text-[16px]">Size:</span>

              <div className="flex items-center pl-2 gap-1 actions">
                {sizes.map((size, index) => (
                  <Button
                    key={index}
                    className={
                      buttonindex === index ? "!bg-primary !text-white" : ""
                    }
                    onClick={() => setbuttonindex(index)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-4 ">
              <div className="qtywrapper w-[80px] ">
                <Qtybox />
              </div>

              <Button></Button>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
