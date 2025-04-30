import Accountsidebar from "../../Component/AccountSidebar";
import Listitems from "../../Component/Mylist/Listitems";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Badge from "../../Component/Badge";
import { useState } from "react";

export default function Orders() {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handleTogglePopup = (index) => {
    if (openPopupIndex === index) {
      setOpenPopupIndex(null);
    } else {
      setOpenPopupIndex(index);
    }
  };

  return (
    <section className="section py-10 pb-10 sticky">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <Accountsidebar />
        </div>

        <div className="col-2 w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0">
                There are{" "}
                <span className="text-primary font-bold">1 Product</span> In
                Your Orders
              </p>
            </div>

            <div className="overflow-x-auto relative mt-5">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">&nbsp;</th>
                    <th className="px-6 py-3">Order Id</th>
                    <th className="px-6 py-3">Payments</th>
                    <th className="px-6 py-3">Products</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">UserId</th>
                    <th className="px-6 py-3">Phone Number</th>
                    <th className="px-6 py-3">Address</th>
                    <th className="px-6 py-3">Total Amount</th>
                    <th className="px-6 py-3">Pin Code</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4">
                      <Button
                        onClick={() => handleTogglePopup(0)}
                        className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]"
                      >
                        {openPopupIndex === 0 ? (
                          <FaAngleUp className="text-gray-600 text-[16px]" />
                        ) : (
                          <FaAngleDown className="text-gray-600 text-[16px]" />
                        )}
                      </Button>
                    </td>
                    <td className="px-6 py-4 text-primary">1213</td>
                    <td className="px-6 py-4">paypal</td>
                    <td className="px-6 py-4">casual Shirt</td>
                    <td className="px-6 py-4">Bilal kotaish</td>
                    <td className="px-6 py-4 text-primary">1213</td>
                    <td className="px-6 py-4">78994740</td>
                    <td className="px-6 py-4 w-[300px]">
                      asdasdasdasdxczasdasd
                    </td>
                    <td className="px-6 py-4">1250$</td>
                    <td className="px-6 py-4">0000</td>
                    <td className="px-6 py-4">bilal@gmail.com</td>
                    <td className="px-6 py-4">
                      <Badge status="Canceled" />
                    </td>
                    <td className="px-6 py-4">24-10-2023</td>
                  </tr>

                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4">
                      <Button
                        onClick={() => handleTogglePopup(1)}
                        className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]"
                      >
                        {openPopupIndex === 1 ? (
                          <FaAngleUp className="text-gray-600 text-[16px]" />
                        ) : (
                          <FaAngleDown className="text-gray-600 text-[16px]" />
                        )}
                      </Button>
                    </td>
                    <td className="px-6 py-4 text-primary">1213</td>
                    <td className="px-6 py-4">paypal</td>
                    <td className="px-6 py-4">casual Shirt</td>
                    <td className="px-6 py-4">Bilal kotaish</td>
                    <td className="px-6 py-4 text-primary">1213</td>
                    <td className="px-6 py-4">78994740</td>
                    <td className="px-6 py-4 w-[300px]">
                      asdasdasdasdxczasdasd
                    </td>
                    <td className="px-6 py-4">1250$</td>
                    <td className="px-6 py-4">0000</td>
                    <td className="px-6 py-4">bilal@gmail.com</td>
                    <td className="px-6 py-4">
                      <Badge status="Canceled" />
                    </td>
                    <td className="px-6 py-4">24-10-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal with order details */}
      {openPopupIndex === 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-4xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setOpenPopupIndex(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Product Id</th>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 text-primary">1234</td>
                    <td className="px-6 py-4 text-primary">Shirt</td>
                    <td className="px-6 py-4">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                        className="w-[40px] h-[50px] object-cover rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4">25$</td>
                    <td className="px-6 py-4 text-primary">25$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setOpenPopupIndex(null)}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {openPopupIndex === 1 && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-4xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setOpenPopupIndex(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Product Id</th>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="px-6 py-4 text-primary">1234</td>
                    <td className="px-6 py-4 text-primary">Shirt</td>
                    <td className="px-6 py-4">
                      <img
                        src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                        className="w-[40px] h-[50px] object-cover rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4">25$</td>
                    <td className="px-6 py-4 text-primary">25$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setOpenPopupIndex(null)}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
