import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

function FooterSection() {
  const socials = [
    { href: 'https://www.linkedin.com/in/sarath-vs-0938a11ab/', icon: FaLinkedin },
    { href: 'https://www.instagram.com/sarath__v.s/?igsh=MWx4aWN4aWlvazRtNA%3D%3D', icon: FaInstagram },
    { href: 'https://github.com/sarathvs-Dev', icon: FaGithub },
    { href: 'mailto:sarathvs124@gmail.com', icon: BiLogoGmail },
  ]

  return (
    <div className="font-second">
      <div className="mx-auto max-w-5xl px-6 py-14 grid gap-10 md:grid-cols-3 text-center md:text-left">
        <div>
          <p className="font-display text-xl font-bold text-white">Sarath<span className="text-indigo-500">.</span></p>
          <p className="mt-3 text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
            Frontend Software Engineer crafting clean, scalable, user-centric web experiences with React.js, Vue.js, and Next.js.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Navigate</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Me</Link>
            <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">My Projects</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Connect</p>
          <div className="mt-3 flex items-center justify-center md:justify-start gap-4 text-xl text-gray-400">
            {socials.map(({ href, icon: Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-0.5 transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <h2 className="flex justify-center items-center text-gray-500 text-sm py-5">© {new Date().getFullYear()} Sarath VS. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default FooterSection
