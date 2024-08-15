import React from 'react'
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa6'

function ProjectCard() {
  return (
    <div>
        <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-h-[38rem]  max-w-[38rem] flex-row">
  {/* <div
    class="relative w-2/6 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="card-image" class="object-cover w-50 h-full" />
  </div> */}
  <div class="p-6">
  <h4 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Task Management System
    </h4>
    <h6
      class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 text-justify">
      A software application designed to help teams and individuals organize,
prioritize, and track tasks within a project.

    </h6>
    <div className='flex flex-row gap-2 text-2xl'>
    <FaNodeJs className='text-green-800'/>
    <FaVuejs className='text-green-900'/>
    </div>
 
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 ">
   
    </p>
    <a href="#" class="inline-block"><button
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  
    </div>
  )
}

export default ProjectCard