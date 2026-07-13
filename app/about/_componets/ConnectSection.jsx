import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

function ConnectSection() {
  const links = [
    { href: 'https://www.linkedin.com/in/sarath-vs-0938a11ab/', icon: FaLinkedin, hover: 'hover:bg-blue-600 hover:text-white' },
    { href: 'https://www.instagram.com/sarath__v.s/?igsh=MWx4aWN4aWlvazRtNA%3D%3D', icon: FaInstagram, hover: 'hover:bg-pink-600 hover:text-white' },
    { href: 'mailto:sarathvs124@gmail.com', icon: BiLogoGmail, hover: 'hover:bg-red-600 hover:text-white' },
    { href: 'https://wa.me/919495330037', icon: FaWhatsapp, hover: 'hover:bg-green-600 hover:text-white' },
  ]

  return (
    <div className="my-10">
      <h4 className="font-bold text-xl leading-none items-center">Connect with Me</h4>
      <div className="flex items-center gap-4 mt-6">
        {links.map(({ href, icon: Icon, hover }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`grid place-items-center h-12 w-12 rounded-full bg-gray-100 text-gray-600 text-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${hover}`}
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  )
}

export default ConnectSection
