import { BriefcaseBusiness } from 'lucide-react';
import React from 'react'


function JobCareer() {
  return (
    <div>   <section className="flex md:justify-start justify-center">
    <div className="w-80 -z-20">
      <h2 className="font-display text-xl text-gray-900 mb-8 flex items-center gap-3 font-bold">
        <span className="grid place-items-center h-9 w-9 rounded-xl bg-fuchsia-50 text-fuchsia-600"><BriefcaseBusiness size={18}/></span>
        Work Experience
      </h2>
      <ul>
      <li className="animate-in fade-in slide-in-from-right-4 fill-mode-both relative flex items-baseline gap-6 pb-7">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-gray-200">
            <span className="block h-3 w-3 rounded-full bg-fuchsia-600 ring-4 ring-fuchsia-100"></span>
          </div>
          <div>
            <p className="text-sm text-gray-800 font-semibold">Software Engineer</p>
            <p className="mt-2 text-gray-500 text-sm">Teksalah, Kochi</p>
            <p className="mt-1 text-fuchsia-600 text-xs font-medium">Oct 2024 - Present</p>

          </div>
        </li>
        <li style={{ animationDelay: '120ms' }} className="animate-in fade-in slide-in-from-right-4 fill-mode-both relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-0 before:w-[2px] before:bg-gray-200">
            <span className="block h-3 w-3 rounded-full bg-fuchsia-600 ring-4 ring-fuchsia-100"></span>
          </div>
          <div>
            <p className="text-sm text-gray-800 font-semibold">Software Engineer</p>
            <p className="mt-2 text-gray-500 text-sm">Innovature Labs, Infopark Kochi</p>
            <p className="mt-1 text-fuchsia-600 text-xs font-medium">Jul 2022 - Mar 2024</p>

          </div>
        </li>

      </ul>
    </div>
  </section></div>
  )
}

export default JobCareer
