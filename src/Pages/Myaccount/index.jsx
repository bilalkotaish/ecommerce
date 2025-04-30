import { MdCloudUpload } from "react-icons/md";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { RiLogoutBoxLine } from "react-icons/ri";
import { NavLink } from "react-router";
import TextField from "@mui/material/TextField";
import Accountsidebar from "../../Component/AccountSidebar";
export default function Myaccount() {
  return (
    <>
      <section className="py-10">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <Accountsidebar />
          </div>

          <div className="col-2 w-[50%]">
            <div className="card bg-white shadow-md rounded-md p-5">
              <h2 className="pb-3 font-[500] text-center"> My Profile</h2>
              <hr />
              <form className="mt-5">
                <div className="flex items-center  gap-5 ">
                  <div className="w-[50%]">
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                  <div className="w-[50%]">
                    <TextField
                      label="Email"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-3 gap-5 ">
                  <div className="w-[50%]">
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                </div>

                <br />

                <div className="flex items-center gap-5">
                  <Button className="btn-org w-[100px]"> Save</Button>
                  <Button className="btn-org btn-border w-[100px] h-[40px] ">
                    {" "}
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
