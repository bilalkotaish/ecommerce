import Button from "@mui/material/Button";
import { VscDiffAdded } from "react-icons/vsc";
import { PiMinusSquareLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CategoryCollapse() {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [subInnerMenuIndex, setSubInnerMenuIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setSubInnerMenuIndex(null); // reset inner submenu when changing main
  };

  const toggleInnerSubmenu = (index) => {
    setSubInnerMenuIndex(subInnerMenuIndex === index ? null : index);
  };

  return (
    <div className="scroll w-full">
      <ul className="w-full">
        {/* Fashion Main Category */}
        <li className="list-none flex flex-col relative">
          <Button
            className="w-full !text-left !justify-between !text-black/90 !px-4 hover:bg-gray-100"
            onClick={() => toggleSubmenu(0)}
          >
            Fashion
            {submenuIndex === 0 ? (
              <PiMinusSquareLight className="text-xl" />
            ) : (
              <VscDiffAdded className="text-xl" />
            )}
          </Button>

          {/* Fashion Submenu */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              submenuIndex === 0 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <ul className="pl-6 bg-gray-50">
              {/* Inner Submenu for Fashion */}
              <li className="list-none relative">
                <Button
                  className="w-full !text-left !justify-between !text-black/80 !px-4 hover:bg-gray-200"
                  onClick={() => toggleInnerSubmenu(0)}
                >
                  Apparel
                  {subInnerMenuIndex === 0 ? (
                    <PiMinusSquareLight className="text-xl" />
                  ) : (
                    <VscDiffAdded className="text-xl" />
                  )}
                </Button>

                {/* Fashion Inner Submenu */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    subInnerMenuIndex === 0 ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="pl-6 bg-gray-100">
                    {["T-Shirts", "Jeans", "Jackets", "Shoes"].map(
                      (item, index) => (
                        <li
                          key={index}
                          className="list-none mb-2 flex items-center"
                        >
                          <Link
                            to="/"
                            className="w-full text-[13px] text-black/80 hover:text-black hover:underline transition"
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        {/* Electronics Main Category */}
        <li className="list-none flex flex-col relative">
          <Button
            className="w-full !text-left !justify-between !text-black/90 !px-4 hover:bg-gray-100 mt-2"
            onClick={() => toggleSubmenu(1)}
          >
            Electronics
            {submenuIndex === 1 ? (
              <PiMinusSquareLight className="text-xl" />
            ) : (
              <VscDiffAdded className="text-xl" />
            )}
          </Button>

          {/* Electronics Submenu */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              submenuIndex === 1 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <ul className="pl-6 bg-gray-50">
              {/* Inner Submenu for Electronics */}
              <li className="list-none relative">
                <Button
                  className="w-full !text-left !justify-between !text-black/80 !px-4 hover:bg-gray-200"
                  onClick={() => toggleInnerSubmenu(1)}
                >
                  Mobiles
                  {subInnerMenuIndex === 1 ? (
                    <PiMinusSquareLight className="text-xl" />
                  ) : (
                    <VscDiffAdded className="text-xl" />
                  )}
                </Button>

                {/* Electronics Inner Submenu */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    subInnerMenuIndex === 1 ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="pl-6 bg-gray-100">
                    {["iPhone", "Samsung", "OnePlus", "Xiaomi"].map(
                      (item, index) => (
                        <li
                          key={index}
                          className="list-none mb-2 flex items-center"
                        >
                          <Link
                            to="/"
                            className="w-full text-[13px] text-black/80 hover:text-black hover:underline transition"
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </li>

              {/* You can add more sections inside Electronics like this: */}
              <li className="list-none relative">
                <Link
                  to="/"
                  className="w-full block text-[14px] py-2 px-4 text-black/80 hover:bg-gray-200 transition"
                >
                  Laptops
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="w-full block text-[14px] py-2 px-4 text-black/80 hover:bg-gray-200 transition"
                >
                  Cameras
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
