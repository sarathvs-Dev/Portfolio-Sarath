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
import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {


  return (
    <>
      <div className="font-second">

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl animate-blob"></div>
          <div className="pointer-events-none absolute top-40 -right-24 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl animate-blob [animation-delay:2s]"></div>

          <div className="md:mt-40 md:mb-48 mt-24 mb-16 lg:ml-64 lg:pr-48">
            <div className="md:mt-16 lg:pr-44 px-10 mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex justify-start items-center pb-5">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 opacity-70 blur-sm"></div>
                  <Image src={myImage} width={70} height={70} className="relative rounded-full ring-2 ring-white" />
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Hey, I'm Sarath V S
                </span>
                <p className="mt-4 font-display text-3xl md:text-6xl font-bold tracking-tight text-gray-900">
                  Software <span className="text-gradient">Developer</span>
                </p>
              </div>

              <h2 className="text-lg mt-5 md:mt-6 max-w-xl text-gray-600 leading-relaxed">
                I am Sarath V S, a Frontend Software Engineer with 3+ years of experience building high-performance web applications. Skilled in React.js, Vue.js, and Next.js, I have delivered enterprise ERP systems and AI-powered tools, and I'm passionate about crafting clean, scalable, user-centric interfaces.
              </h2>

              <div className="flex md:justify-start justify-center items-center gap-6 text-2xl mt-8 text-gray-500">
                <a href="https://www.linkedin.com/in/sarath-vs-0938a11ab/" className="transition-transform hover:-translate-y-1">  <FaLinkedin className="cursor-pointer hover:text-blue-700" /></a>
                <a href="https://www.instagram.com/sarath__v.s/?igsh=MWx4aWN4aWlvazRtNA%3D%3D" className="transition-transform hover:-translate-y-1"> <FaInstagram className="cursor-pointer hover:text-pink-600" /></a>
                <a href="https://github.com/sarathvs-Dev" className="transition-transform hover:-translate-y-1"><FaGithub className="cursor-pointer hover:text-gray-900" /></a>
                <a href="mailto:sarathvs124@example.com" className="transition-transform hover:-translate-y-1">
                  <BiLogoGmail className="cursor-pointer hover:text-red-600" />
                </a>
              </div>


              <div className="flex md:justify-start justify-center items-center gap-4 pt-14 flex-wrap">
            <a href="./sarathvs.pdf" download="Sarath_VS_Resume.pdf">
              <Button className="text-white gap-3 rounded-full bg-gray-900 hover:bg-indigo-600 shadow-lg shadow-gray-300/50 hover:shadow-indigo-300/50 transition-all px-6 h-12">
                <ArrowDownCircle /> Download My Resume
              </Button>
            </a>
            <Link href="/projects">
              <Button variant="outline" className="gap-3 rounded-full border-gray-300 hover:bg-gray-100 px-6 h-12">
                View My Work
              </Button>
            </Link>
          </div>

          <div className="flex md:justify-start justify-center gap-10 md:gap-14 pt-16 flex-wrap">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10+", label: "Projects Delivered" },
              { value: "2", label: "Enterprise ERP Systems" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="font-display text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

            </div>

        </div>
        </div>
        <div>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">Background</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Education &amp; Experience</h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-12 ">
            <EducationTimeline />
            <JobCareer />


          </div>
          <div className="my-16 lg:mx-56 -z-20">
            <TechStack />

          </div>
         

          <div className="bg-gray-950">
            <FooterSection />
            </div>
          </div>
        </div>
      </>

      );
}
