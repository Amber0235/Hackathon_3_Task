import { MdOutlineEmail } from "react-icons/md";


export default function Offers(){
    return(
        <main className="w-full flex justify-center items-center max-w-screen-2xl mx-auto  mt-10 sm:mr-6">
            <div className="w-[95%] h-full sm:h-[120px] md:ml-15  bg-black text-white flex flex-col sm:flex-row justify items-center px-12  rounded-[15px] ">
               <h1 className="text-3xl sm:text-2xl font-bold ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
               <div className="space-y-3">
                      <div className="flex  justify-center items-center sm:w-[400px] h-[40px] rounded-[60px] bg-[#F0F0F0]">
                          <MdOutlineEmail className="text-xl ml-2 text-black"/>
                          <input placeholder="search item..." className="w-full ml-2 outline-none h-full rounded-[62px]  bg-[#F0F0F0] "></input>
                       </div>
                       <div className="flex  justify-center items-center sm:w-[400px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                         <p className="text-black">Subscribe to Newsletter</p>
                       </div>

               </div>
            </div>
        </main>
    )
}