import React from 'react'
import HeaderSection from '../_components/HeaderSection'

function AboutLayout({children}) {
   const data='about'
  return (
    <div>
    <HeaderSection pathname={data}/>
    <div className='mx-5 md:mx-20 lg:mx-36'>
    
    {children}
    </div>
    </div>
  )
}

export default AboutLayout