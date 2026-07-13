import { GraduationCap } from 'lucide-react';
import React from 'react'


function EducationTimeline() {
  return (
    <section className="flex md:justify-end justify-center font-second">
    <div className="w-80 -z-20">
      <h2 className="font-display text-xl text-gray-900 mb-8 flex items-center gap-3 font-bold">
        <span className="grid place-items-center h-9 w-9 rounded-xl bg-indigo-50 text-indigo-600"><GraduationCap size={18}/></span>
        Education
      </h2>
      <ul>
        <li className="animate-in fade-in slide-in-from-left-4 fill-mode-both relative flex items-baseline gap-6 pb-7">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-200">
            <span className="block h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-100"></span>
          </div>
          <div>
            <p className="text-sm text-gray-800 text-left font-semibold">Master Of Computer Application(MCA)</p>
            <p className="mt-2 text-gray-500 text-sm">Marian College Kuttikanam</p>
            <p className="mt-1 text-indigo-600 text-xs font-medium">2020-2022</p>

          </div>
        </li>
        <li style={{ animationDelay: '120ms' }} className="animate-in fade-in slide-in-from-left-4 fill-mode-both relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-0 before:w-[2px] before:bg-gray-200">
            <span className="block h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-100"></span>
          </div>
          <div>
            <p className="text-sm text-gray-800 font-semibold">Bachelor Of Computer Application(BCA)</p>
            <p className="mt-2 text-gray-500 text-sm">St George's College Aruvithura.</p>
            <p className="mt-1 text-indigo-600 text-xs font-medium">2017-2020</p>

          </div>
        </li>

      </ul>
    </div>
  </section>
  )
}

export default EducationTimeline
