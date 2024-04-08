import { useEffect, useState } from "react";

export const useShowHeaderBackground = ( path: string ) => {
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

  return { showHeaderBackground, setShowHeaderBackground };
};