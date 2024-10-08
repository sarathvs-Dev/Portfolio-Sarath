'use client'
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import FooterSection from "./_components/FooterSection";
import myImage from '@/public/me3.jpg'
import EducationTimeline from "./_components/EducationTimeline";
import JobCareer from "./_components/JobCareer";
import TechStack from "./_components/TechStack";
import { Button } from "@/components/ui/button";
import { IoIosArrowDropdown } from "react-icons/io";
import { ArrowDownAZ, ArrowDownCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {


  return (
    <>
      <div className="font-second">


        <div className="md:mt-36 md:mb-48 mt-20 mb-16 lg:ml-64 lg:pr-48">
          {/* <div className="grid lg:grid-cols-2 grid-cols-1"> */}
            {/* <div className="md:flex hidden   justify-center items-center md:mt-4">

              <Image src={myImage} width={300} height={300} className=" rounded-full " />
            </div> */}



            <div className="  md:mt-16 lg:pr-44  px-10 mt-10">
              <div className="">
              <div className="flex   justify-start items-center md:flex pb-5">

<Image src={myImage} width={70} height={70} className=" rounded-full " />
</div>
                <p>
               
                   
                    <span className="font-bold text-lg">Hey, I'm Sarath V S</span>  <br></br>

              
                  <span className=" text-3xl  md:text-4xl font-bold">Software Developer</span></p>
              </div>
              {/* </div> */}


              <h2 className="text-lg mt-5 md:mt-1  md:pt-5   from-neutral-400 ">
                I am Sarath V S, a Software Engineer with almost 2 years of experience in developing web applications. Skilled in React JS, Vue JS, and Next.js, I am passionate about creating innovative solutions and continuously expanding my expertise in software development.              </h2>

              <div className="flex md:justify-start  justify-center items-center gap-8 text-2xl mt-8 text-gray-700">
                <a href="https://www.linkedin.com/in/sarath-vs-0938a11ab/">  <FaLinkedin className="cursor-pointer hover:text-blue-800" /></a>
                <a href="https://www.instagram.com/sarath__v.s/?igsh=MWx4aWN4aWlvazRtNA%3D%3D"> <FaInstagram className="cursor-pointer hover:text-pink-800" /></a>
                <a href="https://github.com/sarathvs-Dev"><FaGithub className="cursor-pointer hover:text-black" /></a>
                <a href="mailto:sarathvs124@example.com">
                  <BiLogoGmail className="cursor-pointer hover:text-red-700" />
                </a>
              </div>


              <div className="flex md:justify-start justify-center items-center pt-20">
            <a href="./sarathvs.pdf" download>
              <Button variant="outline" className="text-white gap-3 bg-black hover:bg-gray-800 hover:text-white">
                <ArrowDownCircle /> Download My Resume
              </Button>
            </a>
          </div>

            </div>


          {/* </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 "> */}


         

        </div>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-12 ">
            <EducationTimeline />
            <JobCareer />


          </div>
          <div className="my-16 lg:mx-56 -z-20">
            <TechStack />

          </div>
         

          <div className="bg-gray-950">
            <div className="flex h-5 items-center space-x-4     py-8 justify-center md:hidden bg-gray-900">


              <div className="hover:text-gray-50  text-gray-200 ">
                <Link href={'/about'}>
                  About Me
                </Link>

              </div>
            <Separator orientation="vertical" className=" h-6" />

              <div className="hover:text-gray-50 text-gray-200">
                <Link href={'/projects'}>
                  My Projects
                </Link>
              </div>

            </div>
           
            <Separator  className="bg-gray-500  md:h-2" />

            <FooterSection />

            </div>
          </div>
        </div>
      </>

      );
}
