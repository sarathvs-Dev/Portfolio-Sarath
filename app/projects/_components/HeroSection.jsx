import { Separator } from '@/components/ui/separator'
import React from 'react'

function HeroSection() {
  return (
    <div>
        
        <div className='flex flex-col justify-start items-center mx-5 gap-10'>

            <h2 className='font-bold md:text-5xl text-4xl lg:mr-96 md:ml-8'>Explore the standout projects that define my journey and expertise.</h2>

            <h2 className='lg:mr-96 md:ml-8 text-justify'>Over the past two years, I have honed my skills across a range of technologies including React, Vue, and Next.js. My best works are showcased here, demonstrating my ability to craft dynamic user interfaces and lead innovative R&D initiatives. Dive into these highlights to see how I blend technical proficiency with creative problem-solving.</h2>

            <Separator/> 
        </div>
    </div>
  )
}

export default HeroSection