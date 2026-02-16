"use client"; // Because useState is used

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="py-0 w-full bg-[#f5f5f5] fixed top-0 left-0 right-0 z-10">
      <div className="w-full max-w-screen-xl mx-auto px-2 flex items-center justify-between">
        <Image src="/asset/logo/logo.png" alt="Logo" width={130} height={24} className="w-24 md:w-32" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 absolute right-4 text-black"
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 md:gap-8 items-center absolute md:static top-full left-0 w-full md:w-auto bg-[#f5f5f5] md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm md:text-base text-[#282828] no-underline ${
                pathname === link.href ? "font-bold" : "font-normal"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
