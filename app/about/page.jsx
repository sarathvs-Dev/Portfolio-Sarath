import React from 'react'
import AboutHeroSection from './_componets/AboutHeroSection'
import FooterSection from '../_components/FooterSection'

function About() {
  return (
    <div>
         <div className="my-36 mx-5 md:mx-20 lg:mx-36">

           <AboutHeroSection/>

         </div>
<div className='bg-gray-950'>
         <FooterSection/>
         </div>
    </div>
  )
}

export default About
