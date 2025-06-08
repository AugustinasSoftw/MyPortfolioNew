"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [downScrollCount, setDownScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        // scrolling down
        setDownScrollCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 2) {
            setShow(false); // hide after 2 down scrolls
          }
          return newCount;
        });
      } else {
        // scrolling up
        setDownScrollCount(0); // reset
        setShow(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed mt-6 top-0 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-neutral-900 border border-gray-600 text-white rounded-md shadow transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <nav className="flex space-x-6 font-medium text-xs">
        <a href="#">Home</a>
        <a href="#Projects">Projects</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}
