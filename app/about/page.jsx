import React from 'react'
import AboutHeroSection from './_componets/AboutHeroSection'
import FooterSection from '../_components/FooterSection'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

function About() {
  return (
    <div>
         <div className="my-36 mx-5 md:mx-20 lg:mx-36">

           <AboutHeroSection/>
         
           
         </div>
<div className='bg-gray-950'>
         <div className="flex h-5 items-center space-x-4  text-gray-200 py-8 justify-center md:hidden bg-gray-900">
      
       
      <div className="hover:text-gray-50">
      <Link href={'/'}>
      Home
      </Link>

      </div>
      <Separator orientation="vertical" className="h-5 "/>
      <div className="hover:text-gray-50 ">
      <Link href={'/projects'}>
          My Projects
          </Link>
      </div>
     
    </div>
         <Separator className="bg-gray-500  md:h-2"/> 

         <FooterSection/>
         </div>
    </div>
  )
}

export default About