import { NavLink } from "react-router";
import Button from "@mui/material/Button";
import { MdCloudUpload } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Accountsidebar() {
  return (
    <div className="card bg-white shadow-md rounded-md ">
      <div className="w-full p-3 p-5 flex items-center justify-center flex-col">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src=" src\assets\profile.jpeg"
            className="w-full h-full object-cover"
          />
          <div
            className="overlay w-full h-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.6)] flex
                          items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100"
          >
            <MdCloudUpload className="text-white text-[25px]" />
            <input
              type="file"
              className="top-0 left-0 absolute w-full h-full opacity-0"
            />
          </div>
        </div>

        <h3> Bilal Kotaish</h3>
        <h6 className="text-[14px] font-[500]"> Bilalkotaish@gmail.com</h6>
      </div>

      <ul className="list-none pb-4 myaccounttabs">
        <li className="w-full">
          <NavLink to="/myaccount" exact={true} activeClassName="isActive">
            <Button className="w-full !rounded-none flex !py-2 !text-left !px-5 !justify-start  items-center pt-1 !capitalize !text-[rgba(0,0,0,0.7)] gap-2">
              <FaRegUser className="text-[15px]" /> My Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/mylist" exact={true} activeClassName="isActive">
            <Button className="w-full !rounded-none flex !text-left !py-2 !px-5 !justify-start  items-center pt-1 !capitalize !text-[rgba(0,0,0,0.7)] gap-2">
              <GoChecklist className="text-[18px]" /> My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/myorders" exact={true} activeClassName="isActive">
            <Button className="w-full !rounded-none flex !text-left !px-5  !py-2 !justify-start  items-center pt-1 !capitalize !text-[rgba(0,0,0,0.7)] gap-2">
              <BsBagCheck className="text-[18px]" /> My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/logout" exact={true} activeClassName="isActive">
            <Button className="w-full !rounded-none flex !text-left !px-5 !justify-start !py-2 items-center pt-1 !capitalize !text-[rgba(0,0,0,0.7)] gap-2">
              <RiLogoutBoxLine className="text-[18px]" /> Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
