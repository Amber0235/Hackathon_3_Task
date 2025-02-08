import Hero from "@/components/Hero";
import SELL from "./products/sell";
import Shirts from "./products/shirts";
import Footer from "@/components/Footer";
// import Offers from "@/components/Offers";

import FontShowcase from "@/components/Fonts";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <FontShowcase />
      <SELL />
      <Shirts />
      < Footer />
      {/* <Offers /> */}
      
    </div>
  );
}