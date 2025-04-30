import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IoBagCheckOutline } from "react-icons/io5";

export default function Checkout() {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftcol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>

            <form className="w-full mt-3">
              <div className="flex items-center gap-5">
                <div className="col w-[50%]">
                  <TextField
                    id="fullname"
                    label="Full Name"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    id="Email"
                    label="Email"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField label="Phone Number" fullWidth />
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-4 mb-4">
                Shipping Address
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                <TextField label="Home No. & Street Name" fullWidth />
                <TextField label="Appartment,suits,unit Etc." fullWidth />
                <div className="grid md:grid-cols-2 gap-4">
                  {" "}
                  <TextField label="City/Town" fullWidth />
                  <TextField label="Country" fullWidth />
                </div>

                <TextField label="Postal Code" fullWidth />
              </div>
            </form>
          </div>
        </div>

        <div className="rightsection w-[30%]">
          <div className="card shadow-md bg-white  rounded-md p-5">
            <h4 className="text-center font-[600] mb-2">Your Order Summary</h4>

            <div className="flex items-center  justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="font-[600]">Product</span>
              <span className="font-[600]">Subtotal</span>
            </div>
            <div className="scroll mb-5 max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
              <div className="flex items-center justify-between py-2">
                <div className="flex part1 items-center gap-3">
                  <div className="img w-[50px] h-[50px] group object-cover overflow-hidden rounded-md">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                      className="w-full group-hover:scale-105 transition-all"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">Men Opaque Casual...</h4>
                    <p className="text-[13px]"> Qty:1</p>
                  </div>
                </div>

                <span className="text-[14px] text-primary font-[500] pr-1">
                  25.00$
                </span>
              </div>
            </div>

            <Button className="btn-org w-full flex gap-2 mt-3">
              Checkout
              <IoBagCheckOutline className="text-[20px]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
