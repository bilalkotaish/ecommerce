import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { VscDiffAdded } from "react-icons/vsc"
import "../Navigation/style.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PiMinusSquareLight } from "react-icons/pi";
const Category = (props) => {
    const [submenuIndex, setsubmenuIndex] = useState(null)
    const [subinnermenuIndex, setinnersubmenuIndex] = useState(null)
    const toggleDrawer = (value) => () => {
        props.setisOpenCatPanel(value);
    };
    const opensubmenu = (index) => {
        if (submenuIndex === index) {
            setsubmenuIndex(null)
        }
        else {
            setsubmenuIndex(index)
        }

    }
    const openinnersubmenu = (index) => {
        if (subinnermenuIndex === index) {
            setinnersubmenuIndex(null)
        }
        else {
            setinnersubmenuIndex(index)
        }

    }
    const DrawerList = (

        <Box sx={{ width: 250 }} role="presentation" className="category" >
            <h3 className="p-2 text-[16px] text-center flex items-center justify-between">
                Shop By Categories
                <IoMdClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' />
            </h3>

            <div className="scroll">
                <ul className="w-full">
                    <li className="list-none flex items-center relative">
                        <Link to="/" className='w-full !text-left flex !justify-start !text-black/90'>
                            <Button className="w-full !text-left flex !justify-start !text-black/90">
                                Fashion
                                {submenuIndex===0 ? <PiMinusSquareLight className="absolute top-[10px] text-black/90 cursor-pointer"
                                    onClick={() => opensubmenu(0)}
                                    style={{ right: '15px' }}
                                    aria-hidden="true" /> :
                                    <VscDiffAdded
                                        className="absolute top-[10px] text-black/90 cursor-pointer"
                                        onClick={() => opensubmenu(0)}
                                        style={{ right: '15px' }}
                                        aria-hidden="true"
                                    />
                                }

                            </Button>
                        </Link>
                    </li>
                </ul>
                {submenuIndex == 0 && <ul className="submenu absolute top-[45] left-0 w-full pl-3 ">
                    <li className="list-none relative">
                        <Link to="/" className='w-full !text-left flex !justify-start !text-black/90'>
                            <Button className="w-full !text-left flex !justify-start !px-3 !text-black/90">
                                Appearl
                                {subinnermenuIndex == 0 ?
                                    <PiMinusSquareLight
                                        className="absolute top-[10px] text-black/90 cursor-pointer"
                                        style={{ right: '15px' }}
                                        aria-hidden="true"
                                        onClick={() => openinnersubmenu(0)}
                                    /> : <VscDiffAdded
                                        className="absolute top-[10px] text-black/90 cursor-pointer"
                                        style={{ right: '15px' }}
                                        aria-hidden="true"
                                        onClick={() => openinnersubmenu(0)}
                                    />
                                }


                            </Button>
                        </Link>
                        {subinnermenuIndex == 0 && <ul className="submenu absolute top-[45] left-0 w-full pl-3 ">
                            <li className="list-none relative  mb-1">
                                <Link className="w-full !text-left flex text-[13px] !justify-start !px-3 !text-black/90">
                                    Appearl

                                </Link>
                            </li>
                            <li className="list-none relative  mb-1">
                                <Link className="w-full !text-left flex  text-[13px] !justify-start !px-3 !text-black/90">
                                    SmartPhone

                                </Link>
                            </li>
                            <li className="list-none relative  mb-1">
                                <Link className="w-full !text-left flex text-[13px] !justify-start !px-3 !text-black/90">
                                    Tablet

                                </Link>
                            </li>
                            <li className="list-none link relative mb-1">
                                <Link className="w-full  !text-left flex text-[13px] !justify-start !px-3 !text-black/90">
                                    Smartwatch

                                </Link>
                            </li>

                        </ul>}

                    </li>
                </ul>






                
                }


            </div>
        </Box>)


    return (
        <div>

            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}
export default Category