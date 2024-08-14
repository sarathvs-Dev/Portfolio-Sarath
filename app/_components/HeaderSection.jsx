import React from 'react'

function HeaderSection() {
  return (
    <div>
        <div className='bg-gray-100'>
            <nav className='fixed top-0 bg-white w-full '>
                <div className='m-auto flex justify-end md:mx-28 md:my-6  my-4 items-center text-gray-700'>
                    {/* <h1 className='pl-8 py-4 text-xl '>SARATH VS</h1> */}

                    <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer'>
                    <li className="relative group py-4 px-6 text-blue-700 font-bold cursor-pointer">
  Home
  {/* <span
    className="absolute bottom-0  h-[2px] bg-blue-400   transition-all duration-300 ease-in-out w-full left-0"
  ></span> */}
</li>

<li className="relative group py-4 px-6  hover:text-blue-700 font-bold cursor-pointer">
  About
  {/* <span
    className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"
  ></span> */}
</li>
<li className="relative group py-4 px-6 hover:text-blue-700 font-bold cursor-pointer">
  Project
  {/* <span
    className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"
  ></span> */}
</li>


                    </ul>
                    <button className='block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group'>
                        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                        <div className='w-5 h-1 bg-gray-600 '></div>

                        <div className='absolute top-0 -right-full h-screen w-6/12 bg-white border opacity-0
                        group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
                        <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>

                            <li className='hover:bg-gray-200 py-4 px-6 w-full'>Home</li>
                            <li className='hover:bg-gray-200 py-4 px-6 w-full'>About</li>
                            <li className='hover:bg-gray-200 py-4 px-6 w-full'>Project</li>

                        </ul>
                        </div>

                    </button>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default HeaderSection