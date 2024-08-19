import { Separator } from '@/components/ui/separator'
import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

function ConnectSection() {
  return (
    <div>

        <div>
         
            <div className="my-10">
      <div className="space-y-1">
        <h4 className="font-bold text-xl leading-none items-center">Connect with Me</h4>
        {/* <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p> */}
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-3xl text-gray-600">
        <div>
        <a href="https://www.linkedin.com/in/sarath-vs-0938a11ab/">  <FaLinkedin className="cursor-pointer hover:text-blue-900" /></a>

        </div>
        <Separator orientation="vertical" />
        <div>
        <a href="https://www.instagram.com/sarath__v.s/?igsh=MWx4aWN4aWlvazRtNA%3D%3D"> <FaInstagram className="cursor-pointer hover:text-pink-800" /></a>

        </div>
        <Separator orientation="vertical" />
        <div>
        <a href="mailto:sarathvs124@gmail.com.com">
              <BiLogoGmail className="cursor-pointer hover:text-red-700" />
            </a>
        </div>
        <Separator orientation="vertical" />
        {/* <div>
        <a href="https://wa.me/919495330037">
        <FaWhatsapp className="cursor-pointer hover:text-green-700" />
            </a>
        </div> */}
      </div>
    </div>
        </div>
    </div>
  )
}

export default ConnectSection