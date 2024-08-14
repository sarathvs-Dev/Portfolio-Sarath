import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterSection from "./_components/FooterSection";
import myImage from '@/public/myImage.jpg'

export default function Home() {
  return (
    <>
      <div className="font-roboto">


        <div className="my-36">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex md:justify-end justify-center items-center">

            <Image src={myImage} width={100} height={100} className="border rounded-full " /> 
            </div>      
          
          <div className=" text-3xl  md:text-4xl font-roboto flex md:justify-start justify-center items-center">
            <p>
         <span className="">I Am</span>  <br></br> 
         <span>Software Developer</span></p>
          </div> 
            </div>

         
          <h2 className="flex justify-center items-center mt-5 md:mt-1 md:px-40 md:pt-5 px-8 font-roboto from-neutral-400 text-justify">
            I’m Sarath V S, a fullstack developer and UI/UX designer based in
            Kerala, India.Experienced software developer with expertise in
            designing, developing, and maintaining software systems. Proficient in
            various platforms, languages, and frameworks, including React,
            Next.Js, Angular, and Express JS.
          </h2>

          <div className="flex justify-center items-center gap-8 text-2xl mt-16 text-gray-500">
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
            <BiLogoGmail className="cursor-pointer" />
          </div>
        </div>
        <div>
          <FooterSection />
        </div>
      </div>
    </>

  );
}
