import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png"
import Search from "../Search";


import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import Navigation from "./Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header(){
    return(
        <div>
        <header className="bg-white">
            <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col-1 w-[50]">
                            <p className="text-[12px] font-[500]"> Get the items 50% off with free delivery on the first order</p>

                        </div>
                        <div className="flex item-center justify-end">
                            <ul className=" flex item-center gap-3">
                                <li className="list-none ">
                                    <Link to="help-center" className="text-[12px] link transition font-[500]">Help Center</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/ordertracking" className="text-[12px] link transition font-[500]">Order Tracking</Link>
                                </li>
                                
                            </ul>

                        </div>

                    </div>

                </div>
            </div>

            <div className="header py-3 border-gray-250 border-b-[1px]">
                <div className="container flex item-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to={"/"}><img src={logo} className="w-[140px] h-auto"></img></Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search/>
                        
                    </div>
                    <div className="col3 w-[30%] flex items-center pl-7">
                        <ul className="flex items-center gap-3 w-full justify-end">
                            
                            <li className="list-none">
                                <Link to="Login" className="transition-text-[14px] link font-[500]">login</Link> /
                                <Link to="register" className="transition-text-[14px] link  font-[500]">register</Link>
                            </li>
                            
                            <li>
                            <Tooltip title="compare">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                <LuGitCompareArrows />
                                     </StyledBadge>
                                         </IconButton>
                                         </Tooltip>
                            </li>
                            <li>
                            <Tooltip title="cart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                 <MdOutlineShoppingCart />
                                     </StyledBadge>
                                         </IconButton>
                                         </Tooltip>
                            </li>
                            <li>
                            <Tooltip title="wishlist">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                 <FaRegHeart  />
                                     </StyledBadge>
                                         </IconButton>
                                         </Tooltip>
                            </li>
                            
                            
                           
                        </ul>
                    </div>
                </div>

            </div>
            <Navigation/>
        </header>

        </div>  
    )
}