'use client'
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
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

export default function Home() {


  return (
    <>
      <div className="font-second">


        <div className="my-36">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex   justify-center items-center md:mt-4">

              <Image src={myImage} width={300} height={300} className=" rounded-full " />
            </div>


            <div className="lg:-ml-44 md:ml-10 md:mt-16 lg:pr-44  px-10 mt-10">
              <div className="">
                <p>
                  <span className="font-bold text-lg">Hey, I'm Sarath V S</span>  <br></br>
                  <span className=" text-3xl  md:text-4xl">Software Developer</span></p>
              </div>
              {/* </div> */}


              <h2 className="text-lg mt-5 md:mt-1  md:pt-5   from-neutral-400 text-justify">
              I am Sarath V S, a Software Engineer with almost 2 years of experience in developing web applications. Skilled in React JS, Vue JS, and Next.js, I am passionate about creating innovative solutions and continuously expanding my expertise in software development.              </h2>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 "> */}

          <div className="flex justify-center items-center gap-8 text-2xl mt-8 text-gray-500">
            <a href="https://www.linkedin.com/in/sarath-vs-0938a11ab/">  <FaLinkedin className="cursor-pointer hover:text-blue-800" /></a>
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
          <Separator />

          <FooterSection />
        </div>
      </div>
    </>

  );
}
