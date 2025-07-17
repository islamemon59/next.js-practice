"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathRouter = usePathname();
  if (pathRouter.includes == "dashboard") {
    return (
      <footer className="w-full text-center bg-blue-400 py-4">
        <p>Copyright 2025</p>
      </footer>
    );
  } else {
    <></>;
  }
};

export default Footer;
