import { Separator } from '@/components/ui/separator'
import React from 'react'

function HeroSection() {
  return (
    <div>
        
        <div className='flex flex-col justify-start items-center mx-10 gap-10'>

            <h2 className='font-bold text-5xl lg:mr-96 md:ml-16'>Things I’ve made trying to put my mark in the digital universe.</h2>

            <h2 className='lg:mr-96 md:ml-16'>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</h2>

            <Separator/> 
        </div>
    </div>
  )
}

export default HeroSection