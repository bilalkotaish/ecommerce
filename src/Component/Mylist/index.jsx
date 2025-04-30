import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import Listitems from "./Listitems";
import Accountsidebar from "../AccountSidebar";
export default function MyList() {
  return (
    <section className="section py-10 pb-10 sticky">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <Accountsidebar />
        </div>

        <div className="col-2 w-[70%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-5 px-3  border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0">
                {" "}
                There are{" "}
                <span className="text-primary font-bold">1 Product</span> In
                Your List
              </p>
            </div>
            <Listitems />
          </div>
        </div>
      </div>
    </section>
  );
}
