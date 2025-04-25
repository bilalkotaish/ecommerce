import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsBoxArrowInUpRight } from "react-icons/bs";
export default function Blogitem() {
  return (
    <div className="blogitem group">
      <div className="item !p-3 !py-2 w-full h-full overflow-hidden !px-3 !rounded-md  cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBjb3ZlciUyMGZvciUyMHdlYmRldmVsb3BtZW50JTIwY29kaW5nfGVufDB8fDB8fHww"
          className="rounded-md w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />
        <span className="flex items-center text-[14px] justify-start bg-white">
          <MdAccessTime /> 5 July ,2024
        </span>
      </div>
      <div className="info ">
        <h3 className="title font-bold text-center">
          <Link to="/" className="link">
            {" "}
            Web Development Intro
          </Link>
        </h3>
        <p className="justify-between text-[rgba(0,0,0,0.7)] mb-4">
          Web development has come a long way from static HTML pages and
          table-based layouts...
        </p>
        <Link className="link font-[500] text-[15px] flex gap-1">
          {" "}
          Read More
          <BsBoxArrowInUpRight />
        </Link>
      </div>
    </div>
  );
}
