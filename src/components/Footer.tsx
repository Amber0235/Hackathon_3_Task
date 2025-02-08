import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";

import Image from "next/image";

import Offers from "./Offers";





export default function Footer(){
    return (
        <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32 max-w-screen-2xl mx-auto ">
          {/*  */}
          <span className="absolute top-[-60px]">
            <Offers />
          
          </span>
        {/* container */}
        <div  className="flex h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b ">
          {/* top div */}
          <div className="flex flex-col justify-center items-center w-[200px] mt-12 ml-6"> 
        
            <ul>
                <h2 className="text-3xl sm:text-2xl font-extrabold space-y-4 pl-12 mt-3">SHOP.CO</h2>
                <p className=" w-full md:w-[300] md:mt-2 pl-10"> We have clothes that suits your style and which you&aposre proud to wear. From women to men.</p>
                   {/* icon */}
                   <div className="flex items-center space-x-3 mt-2 ml-10">
                    <FaInstagram className="text-xl"/>
                     <FaFacebook className="text-xl"/>
                       <FaGithub className="text-xl"/>
                      <FaTwitter className="text-xl"/>
                      

                   </div>
            </ul>
          </div>
          {/* mid div */}
          <div className="h-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 gap-4 flex justify-between items-center space-y-4 ml-5 mx-6 ">
              {/* box 1 */}
                 <ul className="space-y-2 mt-3 ">
                   <h2 className="text-sm sm:text-2xl font-bold ">Company</h2>
                   <li  className="text-sm">About</li>
                   <li  className="text-sm">Features</li>
                   <li  className="text-sm">Works</li>
                   <li  className="text-sm">Career</li>
                   </ul>
                {/* box 2 */}
                <ul className="space-y-2">
                   <h2 className="text-sm sm:text-2xl font-bold">Help</h2>
                   <li  className="text-sm">Customer Support</li>
                   <li  className="text-sm">Delivery Details</li>
                   <li  className="text-sm">Privacy Policy</li>
                   <li  className="text-sm">Terms and Conditions</li>
                   </ul>
                {/* box 3*/}
                <ul className="space-y-2">
                   <h2 className="text-sm sm:text-2xl font-bold">FAQ</h2>
                   <li  className="text-sm">Account</li>
                   <li  className="text-sm">Manage Deliveries</li>
                   <li  className="text-sm">Orders</li>
                   <li  className="text-sm">Payments</li>
                   </ul>
                {/* box 4 */}
                <ul className="space-y-2">
                   <h2 className=" text-sm sm:text-2xl font-bold ">Resources</h2>
                   <li className="text-sm">Free eBooks</li>
                   <li className="text-sm">Devlopment Tutorial</li>
                   <li className="text-sm">How to-Blog</li>
                   <li className="text-sm">Youtube Playlist</li>
                   </ul>
                {/* complete boxes*/}

          </div>
           
        </div>
         {/* bottom div */}
         <div className="flex flex-col sm:flex-row justify-between items-center mt-2 max-w-screen-2xl mx-auto ml-5 mr-5">
                <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex items-center ">
                    <Image src={"/footer1.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer2.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer3.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer4.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer5.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                </div>
                
            </div>
        </main>
    )
}

