import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Productlisting from "./Pages/Productlisting";
import Footer from "./Component/Footer";
import ProductDetails from "./Component/Productdetails";
import { createContext, useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Productzoom from "./Component/ProductZoom";
import { RiCloseLine } from "react-icons/ri";
import ProductModal from "./Component/ProductModal";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Drawer from "@mui/material/Drawer";
import { MdClose } from "react-icons/md";
import CartPanel from "./Component/CartPanel";
import Cart from "./Component/Cart";
import Emailverify from "./Pages/verification";
import toast, { Toaster } from "react-hot-toast";
import Forgetpass from "./Component/Forgetpass";
import Checkout from "./Pages/Checkout";
import Myaccount from "./Pages/Myaccount";
import Listitems from "./Component/Mylist/Listitems";
import MyList from "./Component/Mylist";
import Orders from "./Pages/Orders";
import { fetchData } from "./utils/api";
import Address from "./Pages/Myaccount/address";

export const myContext = createContext();

function App() {
  const [openProduct, setOpenProduct] = useState({
    open: false,
    item: {},
  });
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);
  const [openCartPanel, setopenCartPanel] = useState(false);
  const [islogin, setislogin] = useState(false);
  const [userData, setuserData] = useState(null);
  const [catData, setCatData] = useState([]);

  const Alertbox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };
  useEffect(() => {
    fetchData("/api/category/getcategory").then((res) => {
      console.log("Fetched category data:", res);
      setCatData(res.categories || []);
    });
  }, []);
  const toggleCartPanel = (newOpen) => () => {
    setopenCartPanel(newOpen);
  };
  useEffect(() => {
    const token = localStorage.getItem("accesstoken");

    if (token) {
      setislogin(true);
      fetchData(`/api/user/userdetails`)
        .then((res) => {
          if (res.error) {
            throw res;
          }
          setuserData(res.data);
        })
        .catch((err) => {
          const message = err?.message || err?.response?.data?.message;

          if (message === "You Are Not Logged In") {
            localStorage.removeItem("accesstoken");
            localStorage.removeItem("refreshToken");
            Alertbox("error", "Your session has expired");
            setislogin(false);
          } else {
            Alertbox("error", "An error occurred while fetching user data");
          }
        });
    } else {
      setislogin(false);
    }
  }, []);

  const handleClickOpen = () => {
    setOpenProduct(true);
  };

  const handleClose = () => {
    setOpenProduct({
      open: false,
      item: {},
    });
  };
  const handleOpen = (status, item) => {
    setOpenProduct({
      open: status,
      item,
    });
  };

  const values = {
    setOpenProduct,
    setopenCartPanel,
    openCartPanel,
    toggleCartPanel,
    handleOpen,
    Alertbox,
    islogin,
    setislogin,
    setuserData,
    userData,
    catData,
    setCatData,
  };
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route
              path="/productlist"
              exact={true}
              element={<Productlisting />}
            />
            <Route
              path="/productdetails/:id"
              exact={true}
              element={<ProductDetails />}
            />
            <Route path="/Login" exact={true} element={<Login />} />
            <Route path="/Register" exact={true} element={<Register />} />
            <Route path="/Cart" exact={true} element={<Cart />} />
            <Route path="/verify" exact={true} element={<Emailverify />} />
            <Route
              path="/Resetpassword"
              exact={true}
              element={<Forgetpass />}
            />
            <Route path="/checkout" exact={true} element={<Checkout />} />
            <Route path="/myaccount" exact={true} element={<Myaccount />} />
            <Route path="/mylist" exact={true} element={<MyList />} />
            <Route path="/orders" exact={true} element={<Orders />} />
            <Route path="/address" exact={true} element={<Address />} />
          </Routes>
          <Footer />

          <Dialog
            open={openProduct.open}
            onClose={handleClose}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="productdetailsmodal"
          >
            <DialogContent>
              <div className="flex items-center w-full productdetailsmodal container relative">
                <Button
                  onClick={handleClose}
                  className="!w-[40px] !h-[40px] !min-w-[40px] !text-[25px] !rounded-full !text-black !absolute top-[15px] right-[0px]"
                >
                  {" "}
                  <RiCloseLine />
                </Button>
                {openProduct.item.length !== 0 && (
                  <>
                    {" "}
                    <div className="col-1 w-[40%]">
                      <Productzoom images={openProduct.item.images} />
                    </div>
                    <div className="col-2 w-[60%] py-2 px-6 pr-1">
                      <ProductModal item={openProduct.item} />
                    </div>
                  </>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </myContext.Provider>
      </BrowserRouter>

      <Toaster />
    </>
  );
}

export default App;
//export { myContext };
