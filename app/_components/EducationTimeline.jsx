import { GraduationCap, GraduationCapIcon } from 'lucide-react';
import React from 'react'
import { FaUniversity } from "react-icons/fa";


function EducationTimeline() {
  return (
    <section class="flex  md:justify-end  justify-center  font-second">
    <div class="w-80 -z-20">
      <h2 class="text-xl text-gray-900 mb-7 flex items-center gap-3 font-bold" ><GraduationCap/>Education </h2>
      <ul>
        <li class="relative flex items-baseline gap-6 pb-5">
          <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600 text-left font-semibold">Master Of Computer Application(MCA)</p>
            <p class="mt-2 text-gray-600 text-sm">Marian College Kuttikanam</p>
            <p class="mt-2 text-gray-600 text-sm">2020-2022</p>

          </div>
        </li>
        <li class="relative flex items-baseline gap-6 pb-5">
          <div class="before:absolute before:left-[5.5px] before:h-0 before:w-[1px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600 font-semibold">Bachelor Of Computer Application(BCA)</p>
            <p class="mt-2 text-gray-600 text-sm">St George's College Aruvithura.</p>
            <p class="mt-2 text-gray-600 text-sm">2017-2020</p>

          </div>
        </li>
      
      </ul>
    </div>
  </section>
  )
}

export default EducationTimeline