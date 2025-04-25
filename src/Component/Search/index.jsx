import "./style.css"
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
export default function Search(){
    return(
        <div className="searchbox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[80px] relative">
            <input className="w-full h-[50px] focus:outline-none bg-inherit rounded-[80px] p-2 text-[15px] " placeholder="Search For Products...." type="text"/>
            <Button className="!absolute top-[7px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full"><IoSearch className="text-black"/></Button>
        </div>
    )
}