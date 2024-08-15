import React from 'react'
import HeroSection from './_components/HeroSection'
import ProjectCard from './_components/ProjectCard'

function Project() {
  return (
    <div className='my-36'>
        
        <HeroSection/>
        <div className='my-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>

        </div>
    </div>
  )
}

export default Project