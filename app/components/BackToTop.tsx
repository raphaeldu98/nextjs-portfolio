"use client";
import { useEffect, useState } from 'react';

function BackToTop() {
  // useState to control the visibility of the backToTop button
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  // Effect to handle scroll event and determine button visibility
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY; // Current Y position of scroll
      setBackToTopVisible(position > 300); // Update state based on scroll position
    };

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to scroll page back to top
  const scrollUp = () => {
    window.scrollTo({
      top: 0, // Scroll to top of page
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <div>
      {backToTopVisible && (
        <button
          onClick={scrollUp}
          className="fixed bottom-5 right-5 h-12 w-12 bg-black rounded-full flex items-center justify-center text-white shadow cursor-pointer"
          aria-label="Back to top"
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '0.7rem solid transparent',
              borderRight: '0.7rem solid transparent',
              borderBottom: '1.4rem solid white',
            }}
          ></div>
        </button>
      )}
    </div>
  );
}

export default BackToTop;
