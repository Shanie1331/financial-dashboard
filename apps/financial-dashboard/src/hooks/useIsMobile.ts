import { useEffect, useState } from "react";

export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
  
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      checkIfMobile();
  
      window.addEventListener('resize', checkIfMobile);
  
      return () => {
        window.removeEventListener('resize', checkIfMobile);
      };
    }, []);
  
    return isMobile;
  };

  export default useIsMobile
