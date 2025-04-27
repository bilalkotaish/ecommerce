import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
export default function Sidebar() {
  const [isOpen, setIsopened] = useState(false);
  const [isOpen1, setIsopened1] = useState(false);
  const [isOpen2, setIsopened2] = useState(false);
  const handleclick = () => {
    setIsopened(!isOpen);
  };

  const handleclick1 = () => {
    setIsopened1(!isOpen1);
  };
  const handleclick2 = () => {
    setIsopened2(!isOpen2);
  };
  return (
    <aside className="sidebar py-5">
      <div className="box mt-3">
        <h3 className=" w-full text-[16px] mb-3 flex items-center font-[600] pr-3">
          Shop By Category{" "}
          <Button
            className="!text-black !w-[30px] !h-[30px] min-w-[30px] !ml-auto !rounded-full"
            onClick={handleclick}
          >
            {isOpen === true ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </Button>{" "}
        </h3>
        <Collapse isOpened={isOpen}>
          <div className="scroll px-4 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Grocery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Jewelery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className=" w-full text-[16px] mb-3 flex items-center font-[600] pr-3">
          Availability{" "}
          <Button
            className="!text-black !w-[30px] !h-[30px] min-w-[30px] !ml-auto !rounded-full"
            onClick={handleclick1}
          >
            {isOpen1 === true ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </Button>{" "}
        </h3>
        <Collapse isOpened={isOpen1}>
          <div className="scroll px-4 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Available"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Instock"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Outstock"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-3">
        <h3 className=" w-full text-[16px] mb-3 flex items-center font-[600] pr-3">
          Sizes{" "}
          <Button
            className="!text-black !w-[30px] !h-[30px] min-w-[30px] !ml-auto !rounded-full"
            onClick={handleclick2}
          >
            {isOpen2 === true ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </Button>{" "}
        </h3>
        <Collapse isOpened={isOpen2}>
          <div className="scroll px-4 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="small"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="medium"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="large"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="x-large"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className=" w-full text-[16px] mb-3 flex items-center font-[600] pr-3">
          Filter By Price{" "}
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 pricerange">
          <span className=" text-[13px]">
            From <strong className="text-dark"> $:{100}</strong>
          </span>
          <span className=" text-[13px] ml-auto">
            To <strong className="text-dark"> $:{1500}</strong>
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className=" w-full text-[16px] mb-3 flex items-center font-[600] pr-3">
          Filter By Rating{" "}
        </h3>
        <div className="w-full">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>

        <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>

        <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>

        <div className="w-full">
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
      </div>
    </aside>
  );
}
