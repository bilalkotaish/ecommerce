import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [ShowPassword, setShowPasword] = useState(false);

  return (
    <>
      <section className="section py-10">
        <div className="container">
          <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
            <img
              src="src/assets/logo.png"
              className="w-[140px] mx-auto h-auto"
            />

            <h3 className=" !text-center text-[18px] font-[600]">
              {" "}
              Login To Your Account
            </h3>
            <form className="w-full">
              <div className="formgroup w-full mb-5 mt-5">
                <TextField
                  id="EmailId*"
                  type="email"
                  label="Email"
                  variant="outlined"
                  className="w-full"
                />
              </div>
              <div className="formgroup w-full mb-3 relative">
                {ShowPassword === true ? (
                  <TextField
                    id="Password"
                    type="text"
                    label="Password"
                    variant="outlined"
                    className="w-full"
                  />
                ) : (
                  <TextField
                    id="Password"
                    type="password"
                    label="Password"
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

              <a className="link text-[13px] text-gray-500 cursor-pointer ">
                Forget Password?
              </a>

              <div className="flex !items-center mt-3 mb-3">
                <Button className="btn-org w-full">Login</Button>
              </div>

              <a className="text-[13px]  text-gray-700 cursor-pointer">
                New here?
                <Link
                  to="/register"
                  className="link text-[13px]  text-gray-700 cursor-pointer"
                >
                  Create your account!
                </Link>
              </a>

              <p className="text-[14px] mt-3 !text-center  ">
                {" "}
                Or Continue With Social Accounts
              </p>
              <Button className="w-full !mt-3 gap-3 !bg-[#f1f1f1] !text-black">
                <FcGoogle /> Sign In With Google
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
