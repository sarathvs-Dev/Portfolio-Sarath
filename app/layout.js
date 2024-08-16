import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSection from "./_components/HeaderSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarath V S",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    const data="home"
  return (
  
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection pathname={data}/>
        {children}</body>
    </html>
  );
}
