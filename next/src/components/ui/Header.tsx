"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePageHasHero, useShowHeaderBackground } from "../../hooks";

export const Header = () => {
  const path: string = usePathname();
  const [pathname, setPathname] = useState<string>(path || "");
  const { showHeaderBackground, setShowHeaderBackground } = useShowHeaderBackground(pathname);
  const { hasHero } = usePageHasHero(pathname);

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <header
      className={`fixed flex justify-between items-center w-full py-4 px-2 sm:px-8 md:px-12 transition z-50 ${
        !hasHero && showHeaderBackground && "bg-white"
      } ${
        hasHero && showHeaderBackground
          ? "bg-white shadow-lg"
          : "bg-transparent"
      } ${showHeaderBackground && "shadow-lg"}`}
    >
      <Link href='/'>
        <img src='/Logo.png' className='h-10' alt='' />
      </Link>
      <nav
        className={`flex text-sm transition ${
          showHeaderBackground || !hasHero ? "" : "text-light"
        }`}
      >
        <Link className="text-nowrap p-1 sm:p-2" href='/about'>About Us</Link>
        <Link className="text-nowrap p-1 sm:p-2" href='/products'>Products</Link>
        <Link className="text-nowrap p-1 sm:p-2" href='/cart'>Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
