import Image from "next/image";
import React from "react";
import myImage from "@/public/myPicS.jpg";
import ConnectSection from "./ConnectSection";
import { HomeIcon, LocateIcon } from "lucide-react";
import { FaLocationArrow, FaMobileScreen } from "react-icons/fa6";
import { BiMobile } from "react-icons/bi";
import { FaMobile } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Separator } from "@/components/ui/separator";

function AboutHeroSection() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl animate-blob"></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      <div className="md:hidden flex justify-center items-center md:-mt-20  ">
    <div className="relative">
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 opacity-40 blur-xl"></div>
    <Image
    src={myImage}
      width={350}
      height={350}
      className="relative rounded-3xl shadow-xl"
    />
    </div>
  </div>

        <div className="">

          <div>


          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700 mb-4">Get to know me</span>
          <h2 className="font-display font-bold md:text-5xl text-3xl tracking-tight"> About <span className="text-gradient">Myself</span></h2>
          <h2 className=" justify-center items-center mt-6 text-gray-600 font-normal text-base leading-relaxed">
            I am a results-driven Frontend Software Engineer with 3+ years of
            experience delivering high-performance web applications for
            enterprise and consumer products. I began my journey with a strong
            foundation in computer applications and built on it through
            hands-on experience at Innovature Labs, Infopark, and now at
            Teksalah, Kochi. I specialize in React.js and Vue.js with a strong
            eye for UI/UX using Tailwind CSS, backed by experience in REST API
            integration and full-stack development.<br></br><br></br>At
            Teksalah, I architect and build ERP system modules for Cummins
            Arabia&mdash;including an HSE Management platform and a Delegation of
            Authority approval system&mdash;integrating Vue.js with Java backends
            to deliver pixel-perfect, production-grade interfaces. I have also
            contributed to AI-powered tools using YOLOv8, DeepFace, and
            EasyOCR, and collaborated closely with cross-functional teams in
            Agile environments to ship projects that meet real business
            objectives.
            <br></br><br></br>
            In addition to my technical skills, I bring strong
            problem-solving abilities, effective communication, and a fast
            learner's adaptability to new technologies&mdash;qualities that make
            me a valuable asset to any team focused on growth and innovation.
          </h2>
</div>

<ConnectSection/>




          
        </div>
     
  <div className="md:flex justify-center items-center -mt-20 hidden">
    <div className="relative">
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 opacity-30 blur-2xl"></div>
    <Image
      src={myImage}
      width={400}
      height={400}
      className="relative rounded-3xl shadow-xl"
    />
    </div>
  </div>


      </div>
    </div>
  );
}

export default AboutHeroSection;
