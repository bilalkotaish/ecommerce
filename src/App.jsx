import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Productlisting from "./Pages/Productlisting";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
