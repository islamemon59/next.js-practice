import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full py-6 bg-blue-400">
        <ul className="flex justify-center gap-6 items-center font-bold text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
