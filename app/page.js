import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterSection from "./_components/FooterSection";
import myImage from '@/public/myImage.jpg'
import EducationTimeline from "./_components/EducationTimeline";
import JobCareer from "./_components/JobCareer";
import TechStack from "./_components/TechStack";
import { Button } from "@/components/ui/button";
import { IoIosArrowDropdown } from "react-icons/io";
import { ArrowDownAZ, ArrowDownCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="font-second">


        <div className="my-36">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex   justify-center items-center">

              <Image src={myImage} width={250} height={250} className=" rounded-full " />
            </div>


            <div className="lg:-ml-44 md:ml-10 md:mt-12 lg:pr-44  px-10 mt-10">
              <div className="">
                <p>
                  <span className="font-bold text-lg">Hey, I'm Sarath V S</span>  <br></br>
                  <span className=" text-3xl  md:text-4xl">Software Developer</span></p>
              </div>
              {/* </div> */}


              <h2 className=" text-lg  mt-5 md:mt-1  md:pt-5   from-neutral-400 text-justify">
                I’m Sarath V S, a fullstack developer and UI/UX designer based in
                Kerala, India.Experienced software developer with expertise in
                designing, developing, and maintaining software systems. Proficient in
                various platforms, languages, and frameworks, including React,
                Next.Js, Angular, and Express JS.
              </h2>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 "> */}

          <div className="flex justify-center items-center gap-8 text-2xl mt-16 text-gray-500">
            <a href="https://www.linkedin.com/in/sarath-vs-0938a11ab/">  <FaLinkedin className="cursor-pointer hover:text-blue-900" /></a>
            <a href="https://www.instagram.com/sarath__v.s/?igsh=MWx4aWN4aWlvazRtNA%3D%3D"> <FaInstagram className="cursor-pointer hover:text-pink-800" /></a>
            <a href="https://github.com/sarathvs-Dev"><FaGithub className="cursor-pointer hover:text-black" /></a>
            <a href="mailto:sarathvs124@example.com">
              <BiLogoGmail className="cursor-pointer hover:text-red-700" />
            </a>
          </div>
          <div className="flex justify-center items-center pt-20">
            <a href="./sarathvs.pdf" download>
              <Button variant="outline" className="text-gray-500 gap-3">
                <ArrowDownCircle /> Download My Resume
              </Button>
            </a>
          </div>

        </div>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-28">
            <EducationTimeline />
            <JobCareer />


          </div>
          <div className="my-16 lg:mx-56 -z-20">
            <TechStack />

          </div>
          <FooterSection />
        </div>
      </div>
    </>

  );
}
