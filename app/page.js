import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterSection from "./_components/FooterSection";

export default function Home() {
  return (
  <>
  <div className="font-roboto">

 
   <div className="my-52">
        <h2 className=" text-3xl flex justify-center items-center md:text-5xl font-roboto">
          Software developer
        </h2>
        <p className="flex justify-center items-center md:px-32 md:pt-5 font-roboto from-neutral-400">
          I’m Nandhu Sathish, a fullstack developer and UI/UX designer based in
          Kerala, India.Experienced software developer with expertise in
          designing, developing, and maintaining software systems. Proficient in
          various platforms, languages, and frameworks, including React,
          Next.Js, Angular, and Express JS.
        </p>

        <div className="flex justify-center items-center gap-8 text-2xl mt-16 text-gray-500">
          <FaLinkedin className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <BiLogoGmail className="cursor-pointer" />
        </div>
      </div>
      <div>
       <FooterSection/>
      </div>
      </div>
      </>
      
  );
}
