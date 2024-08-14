'use client';
import React from 'react';

function TechStack() {
  const row1 = [
    "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3uncngDj3h6h1TjNFSo9sgh7PENCLELPM_dGiMf-26_wipiIUpKxwyfmiApxklX5SMQ&usqp=CAU",
    "https://i.pinimg.com/originals/56/67/67/56676773cb4f0c00d7d47c6a84b9407c.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bctuHVp7CoSYIgexL8-iR5EfQq-E354UnA&s",
    "https://cdn.iconscout.com/icon/free/png-256/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030134.png"
  ];

  const row2 = [
    "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    "https://i.pinimg.com/736x/c5/5f/50/c55f50cb7be3c17582cc0e28f961fe56.jpg",
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    "https://static-00.iconduck.com/assets.00/angular-icon-2048x2048-24b236vf.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe6IR3EKgALq0lEUvpW3GmPH8rpAv1cK0_w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_cQFT2t2hhHGNBAUVWyslwMvXYnK9qHZRw&s",
  ];

  return (
    <div className="relative flex items-center justify-center text-black">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-2 text-[2.2rem] font-medium text-[#02203c] md:text-[1.8rem]">
          Toolkit.
        </div>
        <div className="mb-10 text-[1.1rem] font-light text-[#7c8e9a] md:text-[1rem] ml-5 md:ml-1">
          Crafting Solutions with Expertise in Modern Technologies.
        </div>

        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-full overflow-hidden select-none" style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), black 10%, black 90%, rgba(0, 0, 0, 0))' }}>
            <div className="flex items-center justify-around whitespace-nowrap animate-scrollX">
              {row1.map((el, index) => (
                <div key={index} className="grid place-items-center p-[clamp(1.2rem,5vw,2.5rem)] w-[clamp(12rem,8vw,25rem)] md:w-[clamp(10rem,6vw,20rem)] md:p-[clamp(1rem,5vw,2rem)]">
                  <img src={el} alt="" className="object-contain w-full h-full p-[15px_20px] md:p-[10px_15px] rounded-[0.5rem] aspect-[16/9]" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-around whitespace-nowrap animate-scrollX">
              {row1.map((el, index) => (
                <div key={index} className="grid place-items-center p-[clamp(1.2rem,5vw,2.5rem)] w-[clamp(12rem,8vw,25rem)] md:w-[clamp(10rem,6vw,20rem)] md:p-[clamp(1rem,5vw,2rem)]">
                  <img src={el} alt="" className="object-contain w-full h-full p-[15px_20px] md:p-[10px_15px] rounded-[0.5rem] aspect-[16/9]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-full overflow-hidden select-none" style={{ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), black 10%, black 90%, rgba(0, 0, 0, 0))' }}>
            <div className="flex items-center justify-around whitespace-nowrap animate-scrollXReverse">
              {row2.map((el, index) => (
                <div key={index} className="grid place-items-center p-[clamp(1.2rem,5vw,2.5rem)] w-[clamp(12rem,8vw,25rem)] md:w-[clamp(10rem,6vw,20rem)] md:p-[clamp(1rem,5vw,2rem)]">
                  <img src={el} alt="" className="object-contain w-full h-full p-[15px_20px] md:p-[10px_15px] rounded-[0.5rem] aspect-[16/9]" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-around whitespace-nowrap animate-scrollXReverse">
              {row2.map((el, index) => (
                <div key={index} className="grid place-items-center p-[clamp(1.2rem,5vw,2.5rem)] w-[clamp(12rem,8vw,25rem)] md:w-[clamp(10rem,6vw,20rem)] md:p-[clamp(1rem,5vw,2rem)]">
                  <img src={el} alt="" className="object-contain w-full h-full p-[15px_20px] md:p-[10px_15px] rounded-[0.5rem] aspect-[16/9]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
