import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Productzoom from "../ProductZoom";

export default function ProductDetails() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="link">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                className="link"
              >
                Fashion
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <section className="!bg-white py-5">
        <div className=" container flex gap-4">
          <div className="productzoom w-[40%] h-[500px] overflow-hidden">
            <Productzoom />
          </div>
        </div>
      </section>
    </>
  );
}
