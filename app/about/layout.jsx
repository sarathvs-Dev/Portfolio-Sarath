import React from 'react'
import HeaderSection from '../_components/HeaderSection'

function AboutLayout({children}) {
   const data='about'
  return (
    <div>
    <HeaderSection pathname={data}/>
    <div className=''>
    
    {children}
    </div>
    </div>
  )
}

export default AboutLayout