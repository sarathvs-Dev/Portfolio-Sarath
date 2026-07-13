import { Separator } from '@/components/ui/separator'
import React from 'react'

function HeroSection() {
  return (
    <div className="relative">
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl animate-blob"></div>

        <div className='flex flex-col justify-start items-start gap-6'>

            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">My Work</span>

            <h2 className='font-display font-bold md:text-5xl text-4xl max-w-3xl tracking-tight'>Explore the standout <span className="text-gradient">projects</span> that define my journey and expertise.</h2>

            <h2 className='max-w-3xl text-left font-normal text-gray-600 leading-relaxed'>Over the past two years, I have honed my skills across a range of technologies including React, Vue, and Next.js. My best works are showcased here, demonstrating my ability to craft dynamic user interfaces and lead innovative R&D initiatives. Dive into these highlights to see how I blend technical proficiency with creative problem-solving.</h2>

            <Separator className="mt-4"/>
        </div>
    </div>
  )
}

export default HeroSection
