import React from 'react'
import AboutHeroSection from './_componets/AboutHeroSection'
import FooterSection from '../_components/FooterSection'
import { Separator } from '@/components/ui/separator'

function About() {
  return (
    <div>
         <div className="my-36">

           <AboutHeroSection/>
         
           
         </div>
         <Separator/> 

         <FooterSection/>
    </div>
  )
}

export default About