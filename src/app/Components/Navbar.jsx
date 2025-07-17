import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full py-6 bg-blue-400 flex justify-between px-10">
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
        <div>
          <Link href="/login" className="px-4 py-2 rounded border">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 rounded border ml-2">
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
