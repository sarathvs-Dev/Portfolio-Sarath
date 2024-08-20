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
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      <div className="md:hidden flex justify-center items-center md:-mt-20  ">
    <Image
    src={myImage}
      width={350}
      height={350}
      className="rounded-3xl shadow-md"
    />
  </div>

        <div className="">

          <div>

         
          <h2 className="font-bold md:text-5xl text-3xl"> About Myself</h2>
          <h2 className=" justify-center items-center mt-10  text-gray-900">
            I am a motivated Software Engineer with nearly two years of
            experience in developing both front-end and back-end components of
            web applications. My journey in the tech industry began with a
            strong foundation in computer applications, which I built upon with
            hands-on experience at Innovature in Infopark, Kochi. I specialize
            in creating dynamic and efficient web solutions using a range of
            technologies, including React JS, Vue JS, and Python. My work is
            driven by a passion for innovation and a commitment to delivering
            high-quality, scalable applications.<br></br><br></br> <br></br>Throughout my
            career, I have had the opportunity to contribute to several research
            and development projects, hone my skills in Agile methodologies, and
            collaborate with cross-functional teams to deliver projects that
            meet business objectives. I am constantly exploring new technologies
            and trends in web design, aiming to create user-centric designs that
            are not only visually appealing but also optimized for performance.
            <br></br><br></br>
            <br></br>In addition to my technical skills, I bring strong
            problem-solving abilities, effective communication, and leadership
            qualities to the table. I am always eager to learn and adapt to new
            challenges, making me a valuable asset to any team focused on growth
            and innovation.
          </h2>
</div>

<ConnectSection/>




          
        </div>
     
  <div className="md:flex justify-center items-center -mt-20 hidden">
    <Image
      src={myImage}
      width={400}
      height={400}
      className="rounded-3xl shadow-md"
    />
  </div>


      </div>
    </div>
  );
}

export default AboutHeroSection;
