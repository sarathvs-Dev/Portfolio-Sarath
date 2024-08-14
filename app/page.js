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

export default function Home() {
  return (
    <>
      <div className="font-roboto">


        <div className="my-36">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex   justify-center items-center">

              <Image src={myImage} width={250} height={250} className=" rounded-full " />
            </div>


            <div className="md:-ml-44 md:mt-12 md:pr-44 px-10 mt-10">
              <div className=" font-roboto">
                <p>
                  <span className="font-bold text-lg">Hey, I'm Sarath V S</span>  <br></br>
                  <span className=" text-3xl  md:text-4xl">Software Developer</span></p>
              </div>
              {/* </div> */}


              <h2 className=" text-lg  mt-5 md:mt-1  md:pt-5  font-roboto from-neutral-400 text-justify">
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
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
            <BiLogoGmail className="cursor-pointer" />
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-28">
            <EducationTimeline />
            <JobCareer />


          </div>
          <div className="my-16 lg:mx-56">
            <TechStack />

          </div>
          <FooterSection />
        </div>
      </div>
    </>

  );
}
