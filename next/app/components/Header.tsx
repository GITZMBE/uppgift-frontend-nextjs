'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePageHasHero, useShowHeaderBackground } from "../hooks";

const Header = () => {
  const path: string = usePathname();
  const [pathname, setPathname] = useState<string>(path || "");
  const {showHeaderBackground, setShowHeaderBackground} = useShowHeaderBackground(pathname);
  const { hasHero } = usePageHasHero(pathname);

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <header className={`fixed flex justify-between items-center w-full py-4 px-4 sm:px-8 md:px-12 transition ${ hasHero ? '' : 'shadow-lg' } ${ hasHero && showHeaderBackground ? 'bg-white shadow-lg' : 'bg-transparent' } z-50`}>
      <Link href="/">
        <img src="/Logo.png" className="h-10" alt="" />
      </Link>
      <nav className={`flex gap-4 transition ${ showHeaderBackground ? '' : 'text-light' }`}>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
