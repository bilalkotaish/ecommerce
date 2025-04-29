import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";
export default function CartPanel() {
  return (
    <>
      <div className=" scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className=" cartItem w-full flex items-center  gap-4 !border-b !border-[rgba(0,0,0,0.2)] pb-4 pt-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md ">
            <Link to="/product/1" className="block group">
              <img
                src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                alt=""
                className="group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500] link">
              <Link to="/product/1" className="link transition-all">
                Men Opaque Casual Shirt{" "}
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-1 mb-4">
              <span>
                Qty:<span>2</span>
              </span>
              <span className="text-primary">
                Price:<span>$25</span>
              </span>
            </p>

            <MdDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>

      <div className="btmsection absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5 ">
        <div className="btminfo w-full px-4 border-t border-[rgba(0,0,0,0.1)] py-3 flex justify-between items-center flex-col ">
          <div className="flex items-center w-full justify-between ">
            <span className="text-[16px] font-[500]"> 1 Item :</span>
            <span className="text-primary">25$</span>
          </div>

          <div className="flex items-center w-full justify-between">
            <span className="text-[16px] font-[500]"> Shipping :</span>
            <span className="text-primary">5$</span>
          </div>
        </div>

        <div className="btminfo w-full px-4 border-t border-[rgba(0,0,0,0.1)] py-3 flex justify-between items-center flex-col ">
          <div className="flex items-center w-full justify-between ">
            <span className="text-[16px] font-[500]"> Total(tax Excl.): </span>
            <span className="text-primary">30.00$</span>
          </div>

          <div className="flex items-center w-full justify-between">
            <span className="text-[16px] font-[500]"> Total (tax incl.): </span>
            <span className="text-primary">30.00$</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full jusitfy-between pl-3 pr-3 ">
          <Link to="/cart" className="w-[50%] d-block">
            <Button className="btn-org w-full  flex-1 !h-[50px] !text-[16px] font-semibold">
              View Cart
            </Button>
          </Link>
          <Link to="/checkout" className="w-[50%] d-block">
            <Button className="btn-org w-full  flex-1 !h-[50px] !text-[16px] font-semibold">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
