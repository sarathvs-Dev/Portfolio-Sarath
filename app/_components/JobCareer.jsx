import React from 'react'

function JobCareer() {
  return (
    <div>   <section class="flex min-h-screen md:justify-start justify-center">
    <div class="w-80 ">
      <h2 class="text-xl text-gray-700 mb-7">Career Deatils</h2>
      <ul>
        <li class="relative flex items-baseline gap-6 pb-5">
          <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">SOFTWARE ENGINEER</p>
            <p class="mt-2 text-gray-600 text-sm">Innovature Labs,Kochi</p>
            <p class="mt-2 text-gray-600 text-sm">2023-2024</p>

          </div>
        </li>
        <li class="relative flex items-baseline gap-6 pb-5">
          <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">Associate Engineer</p>
            <p class="mt-2 text-gray-600 text-sm">Innovature Labs,Kochi</p>
            <p class="mt-2 text-gray-600 text-sm">2022-2023</p>

          </div>
        </li>
      
      </ul>
    </div>
  </section></div>
  )
}

export default JobCareer