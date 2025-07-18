import Link from "next/link";
import React from "react";

const NotFound404Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold">Not Found 404</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound404Page;
