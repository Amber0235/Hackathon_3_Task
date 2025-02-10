

import Image from "next/image";

export default function Hero(){
    return (
        <main className="bg-[#F2F0F1] mt-20 md:mt-1 md:h-[700px] md:px-10 sm:pt-4  flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start max-w-screen-2xl mx-auto">
              {/* left */}
               <div className="  md:pl-0  md:w-[500px] space-y-5  sm:pt-7 mt-10 px-3">
                <h1 className={`text-4xl md:text-5xl lg:text-5xl font-extrabold`}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="w-full sm:w-[140px] text-sm bg-black text-white py-2 px-8 rounded-[20px]" >Shop Now</button>
                <div className=" flex justify-evenly md:justify-between flex-wrap md:flex-nowrap gap-y-4 mt-4 ml-4 space-x-3">
                  <div className="border-r pr-2">
                    <h1 className="text-2xl md:text-5xl  ">200+</h1>
                    <p className="text-xs md:text-[15px] text-gray-500">International Brands</p>
                  </div>
                  <div className="border-r pr-5">
                    <h1 className="text-2xl md:text-5xl  ">2,000+</h1>
                    <p className="text-xs md:text-[15px] text-gray-500">High-Quality Products</p>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-5xl ">30,000+</h1>
                    <p className="text-xs md:text-[15px] text-gray-500">Happy Customers</p>
                  </div>
               </div>
               </div>
               {/* mid div */}
              
              {/* right */}
              <div className="relative">
              <Image src={"/profile.png"}
               className="w-[450px] h-[650px]"
              width={200} height={200} alt="hero-image"></Image> 
               <Image src={"/star.png"}
               className="w-[70px] sm:w-[100px] absolute top-[80px] right-6 "
              width={200} height={200} alt="hero-image"></Image> 
               <Image src={"/star.png"}
               className="w-[50px] sm:w-[70px]  absolute top-[300px] left-[0px] sm:left-[-10px] "
              width={200} height={200} alt="hero-image"></Image> 
              </div>
        </main>
    )
}

// import Image from "next/image"
// export default function Hero(){
//     return(
//         <main className="max-w-screen-2xl mx-auto w-[100%] h-full md:h-[450px] flex flex-col overflow-x-hidden md:flex-row justify-between items-start bg-[#f0f0f0]">
//             {/* left */}
//             <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-8 pl-3">
//                 <h1 className="text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
//                 <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed
//                 to bring out your individuality and cater to your sense of style.</p>
//                 <button className="bg-black py-2 px-8 rounded-[16px] mt-4 text-sm text-white">Shop Now</button>

//                 <div className=" flex justify-evenly md:justify-between flex-wrap md:flex-nowrap gap-y-2 mt-4 ml-1 space-x-1">
//                   <div className="border-r pr-2">
//                     <h1 className="text-2xl md:text-5xl  ">200+</h1>
//                     <p className="text-xs md:text-[15px] text-gray-500">International Brands</p>
//                   </div>
//                   <div className="border-r pr-5">
//                     <h1 className="text-2xl md:text-5xl  ">2,000+</h1>
//                     <p className="text-xs md:text-[15px] text-gray-500">High-Quality Products</p>
//                   </div>
//                   <div>
//                     <h1 className="text-2xl md:text-5xl ">30,000+</h1>
//                     <p className="text-xs md:text-[15px] text-gray-500">Happy Customers</p>
//                   </div>
//                </div>
//                </div>

//                       {/* right */}
//             <div className="relative">
//             <Image src={"/profile.png"} className="w-[500px] mr-8" width={200} height={600} alt="profile"></Image>

//             {/*star */}
//             <Image src={"/star.png"} className="w-[50px] sm:w-[70px] absolute top-[200px] left-[30px] md:top-[200px]
//              sm:left-[-10px]" width={200} height={300} alt="profile"></Image>

// {/* className="w-[50px] sm:w-[70px]  absolute top-[230px] left-[0px] sm:left-[-30px] 
//               width={200} height={200} alt="profile"></Image>  */}
//             <Image src={"/star.png"} className="w-[80px] md:w-[90px] absolute top-10 right-[50px] md:top-[50px]
//              md:right-[20px]" width={200} height={200} alt="profile"></Image>
            
//             </div>
        
//         </main>
//     )
// }
            