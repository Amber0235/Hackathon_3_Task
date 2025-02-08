import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./providers";
import Link from "next/link";
// import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>
             <Link href={"/"}>Home</Link>
          <Link href={"/cart"}>Cart</Link>
        {children}
        </Providers>
        
        </body>
    </html>
  );
}

  
