import React from 'react'
import AboutHeroSection from './_componets/AboutHeroSection'
import FooterSection from '../_components/FooterSection'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

function About() {
  return (
    <div>
         <div className="my-36">

           <AboutHeroSection/>
         
           
         </div>

         <div className="flex h-5 items-center space-x-4  text-gray-600 mb-6 mt-16 justify-center md:hidden ">
      
       
      <div className="hover:text-gray-950">
      <Link href={'/'}>
      Home
      </Link>

      </div>
      <Separator orientation="vertical" />
      <div className="hover:text-gray-950">
      <Link href={'/projects'}>
          My Projects
          </Link>
      </div>
     
    </div>
         <Separator/> 

         <FooterSection/>
    </div>
  )
}

export default About