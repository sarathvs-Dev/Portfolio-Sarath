import React from 'react'
import HeaderSection from '../_components/HeaderSection'

function ProjectLayout({children}) {
  return (
    <div>
      <HeaderSection/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
      
      {children}
      </div>
      </div>
  )
}

export default ProjectLayout