'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

function HeaderSection({ pathname }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home", key: "home" },
    { href: "/about", label: "About", key: "about" },
    { href: "/projects", label: "Project", key: "projects" },
  ];

  return (
    <div className="font-second">
      <nav
        className={`fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "border-gray-100 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="m-auto flex items-center justify-between md:mx-28 mx-6 my-4 md:my-5">
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-gray-900">
            Sarath<span className="text-indigo-600">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`rounded-full px-5 py-2 transition-colors duration-200 ${
                    pathname === link.key
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="block md:hidden p-3 rounded-lg focus:outline-none hover:bg-gray-100 group">
            <div className="w-5 h-0.5 bg-gray-700 mb-1.5 transition-transform"></div>
            <div className="w-5 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-5 h-0.5 bg-gray-700"></div>

            <div
              className="fixed top-0 -right-full h-screen w-8/12 max-w-xs bg-white border-l shadow-2xl opacity-0
                        group-focus:right-0 group-focus:opacity-100 transition-all duration-300 z-40"
            >
              <ul className="flex flex-col items-stretch w-full text-base font-semibold cursor-pointer pt-24 px-6 gap-2">
                {links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={`block rounded-lg py-3 px-4 ${
                        pathname === link.key
                          ? "bg-indigo-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default HeaderSection;
