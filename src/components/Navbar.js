"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  const Customlink = ({ href, title, className = "" }) => {
    const isActive = href === currentLink;
    return (
      <Link href={href}>
        <div
          onClick={() => {
            setIsMenuOpen(false);
          }}
          onMouseEnter={() => {
            setCurrentLink(href);
          }}
          onMouseLeave={() => {
            setCurrentLink("");
          }}
          className={`${className} block mt-4 lg:inline-block px-5 py-3 rounded-lg lg:mt-0 hover:border-radius-8 ${
            isActive ? "bg-slate-100" : ""
          }`}
        >
          {title}
        </div>
      </Link>
    );
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white flex justify-between items-center lg:px-0 md:px-5">
      <Link href="/">
        <div className="text-2xl font-bold">Logo</div>
      </Link>

      <div className="hidden md:block">
        <Customlink href="/about" title="About" className="mr-10" />
        <Customlink href="/learning" title="Learning" className="mr-10" />
        <Customlink href="/contact" title="Contact" />
      </div>

      <div className="md:hidden">
        <button onClick={handleMenuClick}>
          {isMenuOpen ? (
            <XIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <MenuIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 w-full h-full bg-white z-10">
          <div className="flex flex-col justify-center items-center h-full">
            <Customlink
              href="/about"
              title="About"
              className="text-2xl my-4"
            />
            <Customlink
              href="/learning"
              title="Learning"
              className="text-2xl my-4"
            />
            <Customlink
              href="/contact"
              title="Contact"
              className="text-2xl my-4"
            />
            <button onClick={handleMenuClick}>
              <XIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
