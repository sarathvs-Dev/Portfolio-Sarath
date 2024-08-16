import React from 'react'
import HeaderSection from '../_components/HeaderSection'

function ProjectLayout({children}) {
  const data="projects"
  return (
    <div>
      <HeaderSection pathname={data}/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
      
      {children}
      </div>
      </div>
  )
}

export default ProjectLayout