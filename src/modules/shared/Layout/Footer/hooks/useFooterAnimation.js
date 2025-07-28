import { useEffect } from 'react';
import AOS from 'aos';

const useFooterAnimation = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
    AOS.refresh();
  }, []);
};

export default useFooterAnimation;
