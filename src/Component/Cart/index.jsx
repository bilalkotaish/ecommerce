import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import CartItems from "./CartItems";
export default function Cart() {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftpart w-[70%]">
          <div className="shadow-md rounded-md p-5 bg-white">
            <div className="py-2 px-3  border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                {" "}
                There are{" "}
                <span className="text-primary font-bold">1 Product</span> In
                Your Cart
              </p>
            </div>
            <CartItems size="S" qty="1" />
          </div>
        </div>

        <div className="rightpart w-[30%]  ">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3"> Cart Totals</h3>
            <hr />
            <div className="space-y-2 pb-4">
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[400]">Subtotal</span>
                <span className="text-[14px] font-bold text-primary">25$</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[400]">Shipping</span>
                <span className="text-[14px] font-[600]">Free</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[400]">Estimate for:</span>
                <span className="text-[14px] font-[600]">Lebanon</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[14px] font-[400]">Total</span>
                <span className="text-[14px] font-bold text-primary">25$</span>
              </p>
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
