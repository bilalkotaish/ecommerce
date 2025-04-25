import { Link } from "react-router-dom";
export default function Bannerbox(props) {
  return (
    <div className="box w-80 md:w-80 lg:w-80 xl:w-80 2xl:w-80 p-3 py-7 px-3 bg-white rounded-lg group text-center items-center flex flex-col justify-center">
      <Link to="/products">
        <img
          src={props.src}
          className="w-full transition-all transform duration-300 ease-in-out hover:scale-110  group-hover:rotate-1"
          alt="bannerslide"
        />
      </Link>
    </div>
  );
}
