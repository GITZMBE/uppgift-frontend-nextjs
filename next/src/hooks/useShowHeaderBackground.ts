import { useEffect, useState } from "react";

export const useShowHeaderBackground = ( path: string ) => {
  const [showHeaderBackground, setShowHeaderBackground] = useState<boolean>(false);
  
  const handleMouseEvent = () => {
    if (window.scrollY > 0) {
      setShowHeaderBackground(true);
    } else {
      setShowHeaderBackground(false);
    }
  };  

  useEffect(() => {
    window.addEventListener("scroll", _ => handleMouseEvent());

    return window.removeEventListener("scroll", handleMouseEvent);
  }, []);

  return { showHeaderBackground, setShowHeaderBackground };
};