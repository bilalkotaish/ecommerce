import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Productlisting from "./Pages/Productlisting";
import Footer from "./Component/Footer";
import ProductDetails from "./Component/Productdetails";

function App() {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
