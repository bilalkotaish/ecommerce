import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Productlisting from "./Pages/Productlisting";
import Footer from "./Component/Footer";
import ProductDetails from "./Component/Productdetails";
import { createContext } from "react";
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

const myContext = createContext();

function App() {
  const [openProduct, setOpenProduct] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);
  const [openCartPanel, setopenCartPanel] = useState(false);
  const [islogin, setislogin] = useState(true);

  const Alertbox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const toggleCartPanel = (newOpen) => () => {
    setopenCartPanel(newOpen);
  };

  const handleClickOpen = () => {
    setOpenProduct(true);
  };

  const handleClose = () => {
    setOpenProduct(false);
  };
  const values = {
    setOpenProduct,
    setopenCartPanel,
    openCartPanel,
    toggleCartPanel,
    Alertbox,
    islogin,
    setislogin,
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
              path="/productdetails"
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
          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>

      <Toaster />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={openProduct}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productdetailsmodal"
      >
        <DialogContent>
          <div className="flex items-center w-full productdetailsmodalcontainer relative">
            <Button
              onClick={handleClose}
              className="!w-[40px] !h-[40px] !min-w-[40px] !text-[25px] !rounded-full !text-black !absolute top-[15px] right-[0px]"
            >
              {" "}
              <RiCloseLine />
            </Button>
            <div className="col-1 w-[40%]">
              <Productzoom />
            </div>
            <div className="col-2 w-[60%] py-2 px-6 pr-1">
              <ProductModal />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { myContext };
