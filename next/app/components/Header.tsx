'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showHeaderBackground, setShowHeaderBackground] = useState<boolean>(false);
  
  const handleMouseEvent = () => {
    if (window.scrollY > 48) {
      setShowHeaderBackground(true);
    } else if (window.scrollY <= 48) {
      setShowHeaderBackground(false);
    }
  };  

  useEffect(() => {
    window.addEventListener("scroll", _ => handleMouseEvent());

    return window.removeEventListener("scroll", handleMouseEvent);
  }, []);  

  return (
    <header className={`fixed flex justify-between items-center w-full p-4 transition ${ showHeaderBackground ? 'bg-white shadow-lg' : 'bg-transparent' } z-50`}>
      <Link href="/">
        <img src="Logo.png" className="h-10" alt="" />
      </Link>
      <nav className={`transition ${ showHeaderBackground ? '' : 'text-[#EEEEEE]' }`}>
        <Link href="/products">Products</Link>
      </nav>
    </header>
  );
};

export default Header;
