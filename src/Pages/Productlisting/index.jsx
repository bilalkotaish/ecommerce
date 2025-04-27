import Sidebar from "../../Component/sidebar/index.jsx";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../Component/ProductItem/index.jsx";
import Button from "@mui/material/Button";
import ProductItemListView from "../../Component/ProductItemlistview/index.jsx";
import { BsFillGridFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";

export default function Productlisting() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ItemView, SetItemView] = useState("grid");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-8">
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
          </Breadcrumbs>
        </div>
      </div>

      <div className="bg-white p-2 mt-3 ">
        <div className="container flex gap-3">
          <div className="sidebarwrapper w-[20%] h-[100%] bg-white p-3">
            <Sidebar />
          </div>
          <div className="rightcontent w-[80%] py-3">
            <div className="p-2 w-full bg-[#f1f1f1] mb-4 rounded-md flex items-center justify-between">
              <div className="col-1 flex items-center gap-0 itemViewActions">
                <Button
                  className={`!w-[40px] !h-[40px] !rounded-full !text-black ${
                    ItemView === "list" && "active"
                  }`}
                  onClick={() => {
                    SetItemView("list");
                  }}
                >
                  <IoMdMenu />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !rounded-full !text-black  ${
                    ItemView === "grid" && "active"
                  }`}
                  onClick={() => {
                    SetItemView("grid");
                  }}
                >
                  <BsFillGridFill />
                </Button>
                <span className="text-[14px] font-[400] text-[rgba(0,0,0,0.5)]">
                  {" "}
                  There are 10 products Available{" "}
                </span>
              </div>

              <div className="col-2 ml-auto flex items-center justify-end">
                <span className="text-[14px] font-[600] text-[rgba(0,0,0,0.5)]">
                  Sort by
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!text-[12px] !text-black !bg-white !capitalize !border-2 !border-[#000]"
                >
                  Sales,highest to lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !bg-white !capitalize !border-2 !border-[#000]"
                  >
                    Sales,highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !bg-white !capitalize !border-2 !border-[#000]"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !bg-white !capitalize !border-2 !border-[#000]"
                  >
                    Name , A to Z{" "}
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !bg-white !capitalize !border-2 !border-[#000]"
                  >
                    Name , Z to A{" "}
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !bg-white !capitalize !border-2 !border-[#000]"
                  >
                    Price , highest to lowest{" "}
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !bg-white !capitalize !border-2 !border-[#000]"
                  >
                    Name , lowest to highest{" "}
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className={`grid gap-4 ${
                ItemView === "grid"
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {ItemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <Pagination
              className=" flex justify-center mt-3 items-center"
              count={10}
              hidePrevButton
              hideNextButton
            />
          </div>
        </div>
      </div>
    </section>
  );
}
