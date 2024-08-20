import React from 'react'
import HeaderSection from '../_components/HeaderSection'

function ProjectLayout({children}) {
  const data="projects"
  return (
    <div>
      <HeaderSection pathname={data}/>
      <div className=''>
      
      {children}
      </div>
      </div>
  )
}

export default ProjectLayout