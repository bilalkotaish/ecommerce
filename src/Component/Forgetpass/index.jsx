import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { myContext } from "../../App";

export default function forgetPassword() {
  const [ShowPassword, setShowPasword] = useState(false);
  const [ShowPassword2, setShowPasword2] = useState(false);
  const context = useContext(myContext);
  const history = useNavigate();

  return (
    <>
      <section className="section py-10">
        <div className="container">
          <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
            <img
              src="src\assets\RESET.png"
              className="w-[80px] mx-auto h-auto mb-2"
            />

            <h3 className=" !text-center text-[18px] mb-5 font-[600]">
              {" "}
              Reset Your Password
            </h3>
            <form className="w-full">
              <div className="formgroup w-full mb-3 relative">
                {ShowPassword === true ? (
                  <TextField
                    id="Password"
                    type="text"
                    label="New Password"
                    variant="outlined"
                    className="w-full"
                    name="password"
                  />
                ) : (
                  <TextField
                    id="Password"
                    type="password"
                    label="New Password"
                    variant="outlined"
                    className="w-full"
                  />
                )}
                <Button
                  className="!absolute  !top-[10px] !right-[10px] !z-50 !w-[35px] !min-w-[35px] !h-[35px]
              !rounded-full !text-black"
                  onClick={() => setShowPasword(!ShowPassword)}
                >
                  {ShowPassword === true ? (
                    <IoMdEye className="text-[20px]" />
                  ) : (
                    <IoMdEyeOff />
                  )}
                </Button>
              </div>
              <div className="formgroup w-full mb-3 relative">
                {ShowPassword2 === true ? (
                  <TextField
                    id="confirmPassword"
                    type="text"
                    label="Confirm Password"
                    variant="outlined"
                    className="w-full"
                    name="password"
                  />
                ) : (
                  <TextField
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                    className="w-full"
                  />
                )}

                <Button
                  className="!absolute  !top-[10px] !right-[10px] !z-50 !w-[35px] !min-w-[35px] !h-[35px]
              !rounded-full !text-black"
                  onClick={() => setShowPasword2(!ShowPassword2)}
                >
                  {ShowPassword2 === true ? (
                    <IoMdEye className="text-[20px]" />
                  ) : (
                    <IoMdEyeOff />
                  )}
                </Button>
              </div>

              <div className="flex !items-center mt-3 mb-3">
                <Link to="/login">
                  <Button className="btn-org w-full">Reset Password</Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
