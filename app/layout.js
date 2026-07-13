import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import HeaderSection from "./_components/HeaderSection";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Sarath V S | Frontend Software Engineer",
  description: "Portfolio of Sarath V S, a Frontend Software Engineer specializing in React.js, Vue.js, and Next.js.",
};

export default function RootLayout({ children }) {
    const data="home"
  return (

    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <HeaderSection pathname={data}/>
        {children}</body>
    </html>
  );
}
