import React, { useState, useEffect } from "react";
import { ChevronUp } from 'lucide-react'; 

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
<button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 z-50 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
  aria-label="Back to top"
>
  <ChevronUp size={20} />
</button>
    )
  );
};

export default BackToTop;