import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import Category from "./Category";
import { useState } from "react";
import "../Navigation/style.css";

export default function Navigation() {
  const [isOpenCatPanel, setisOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setisOpenCatPanel(true);
  };
  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-9 ">
          <div className="col_1 w-[20%] ">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill aria-hidden="true" className="text-[18px] link" />
              Shop By Categories
              <FaAngleDown
                className="text-[12px] ml-auto font-bold "
                aria-hidden="true"
              />
            </Button>
          </div>
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-3 ">
              <li className="list-none ">
                <Link
                  to="/"
                  className="link transition  text-[13px] font-[500]"
                >
                  <Button className="link transiton !py-4  font-[500]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative group ">
                <Link
                  to="/productlist"
                  className="transition text-[13px] font-[500]"
                >
                  <Button className="w-full !py-4  !text-left flex !justify-start">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-full left-0 w-[200px] bg-white shadow-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul>
                    <li className="relative group/sub link list-none">
                      <Button className="text-black w-full flex !justify-start !text-left">
                        Men's Fashion
                      </Button>
                      <div className="absolute top-0 left-full w-[200px] bg-white shadow-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all z-50">
                        <ul>
                          <li className="list-none">
                            <Button className="text-black w-full text-left">
                              T-Shirts
                            </Button>
                          </li>
                          <li className="list-none">
                            <Button className="text-black w-full text-left">
                              Jackets
                            </Button>
                          </li>
                          <li className="list-none">
                            <Button className="text-black w-full text-left">
                              Shoes
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none">
                      <Button className="text-black">woMen's Fashion</Button>
                    </li>
                    <li className="list-none">
                      <Button className="text-black">kid's Fashion</Button>
                    </li>
                    <li className="list-none">
                      <Button className="text-black">toy's Fashion</Button>
                    </li>
                    <li className="list-none">
                      <Button className="text-black">skirt's Fashion</Button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="transition text-[13px] font-[500]">
                  <Button className="link  !py-4 transiton font-[500]">
                    Electonics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="transition text-[13px] font-[500]">
                  <Button className="link !py-4  transiton font-[500]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="transition text-[13px] font-[500]">
                  <Button className="link !py-4  transiton font-[500]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="transition text-[13px] font-[500]">
                  <Button className="link transiton !py-4 font-[500]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="transition text-[13px] font-[500]">
                  <Button className="link transiton !py-4  font-[500]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="transition text-[13px] font-[500]">
                  <Button className="link transiton  !py-4 font-[500]">
                    Wellness
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%]">
            <p className="text-[13px] font-[500] flex items-center gap-2 link transition">
              {" "}
              <GoRocket className="text-[18px]" />
              Free International Delivery{" "}
            </p>
          </div>
        </div>
      </nav>
      <Category
        setisOpenCatPanel={setisOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
}
