"use client"
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SheetSide } from "../components/Humburgur";

import { NavigationMenuDemo } from "../components/Navigation";

import { CgProfile } from "react-icons/cg";
// import { useSelector } from "react-redux";





export default function Header() {
    return (
        
   
        <header className="w-full h-[60px] bg-white flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex justify-center items-center">
        <SheetSide />
        <h1 className="text-xl sm:text-3xl font-bold pl-12">SHOP.CO</h1>
        </div>
        {/* navbar */}
        
        <ul className="hidden md:block">
            <li className="space-x-5 flex items-center">
            
                
                

                <Link href={""}> <NavigationMenuDemo /></Link>
                <Link href={"/sell"}>On Sale</Link>
                <Link href={"/arrival"}>New Arrival</Link>
                <Link href={"/brands"}>Brands</Link>
                </li>
            
        </ul>
        
        {/* search input */}
        <div className="hidden md:block">
        <div className="flex justify-start items-center w-[300px] h-[40px] rounded-[62px] bg-[#f0f0f0]">
                <IoSearch className="text-xl ml-2 "/>
                    
        <input placeholder="search item..." className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#f0f0f0]"></input>
        </div>
        </div>
            {/* cart */}
            
            

            <div className="flex items-center mr-7 space-x-5">
              <IoSearch className="text-xl ml-2 md:hidden" />
              <Link href={"/cart"}>
              <IoCartOutline className="text-2xl" />
             </Link>
             <CgProfile className="text-2xl" />
           </div>

    
        
        </header>
        
    );
}
