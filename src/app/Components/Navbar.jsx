import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full py-6 bg-blue-400">
        <ul className="flex justify-center gap-6 items-center font-bold text-white">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
