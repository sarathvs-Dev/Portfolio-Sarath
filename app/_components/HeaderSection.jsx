import Link from "next/link";
import React from "react";

function HeaderSection({pathname}) {
  return (
    <div>
      <div className="bg-gray-100 font-second z-40">
        <nav className="fixed top-0 bg-white w-full ">
          <div className="m-auto flex justify-end md:mx-28 md:my-6  my-4 items-center text-gray-700">
            {/* <h1 className='pl-8 py-4 text-xl '>SARATH VS</h1> */}

            <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <li className={`hover:bg-gray-100 hover:rounded-full py-4 px-6 w-full ${pathname === 'home' ? 'text-blue-700 font-bold' : 'text-gray-700'}`}>
                    <Link href="/">Home</Link>
                  </li>

                  <li className={`hover:bg-gray-100 hover:rounded-full relative group py-4 px-6 ${pathname === 'about' ? 'text-blue-700 font-bold' : 'text-gray-700'} cursor-pointer`}>
                <Link href="/about">About</Link>
              </li>

              <li className={`hover:bg-gray-100 hover:rounded-full relative group py-4 px-6 ${pathname === 'projects' ? 'text-blue-700 font-bold' : 'text-gray-700'} cursor-pointer`}>
                <Link href="/projects">Project</Link>
              </li>
            </ul>
            <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 "></div>

              <div
                className="absolute top-0 -right-full h-screen w-6/12 bg-white border opacity-0
                        group-focus:right-0 group-focus:opacity-100 transition-all duration-300 z-40"
              >
                <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                  <li className="hover:bg-gray-200 py-4 px-6 w-full"><Link href={'/'}>Home</Link> </li>
                  <li className="hover:bg-gray-200 py-4 px-6 w-full"> <Link href={'/about'}>About</Link></li>
                  <li className="hover:bg-gray-200 py-4 px-6 w-full">
                  <Link href={'/projects'}>Project</Link>   
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderSection;
