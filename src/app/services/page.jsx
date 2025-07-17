"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Services = () => {
  const router = useRouter();
  const isTrue = false;

  const handleServiceTrue = () => {
    if (isTrue) {
      router.push("/services/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <p className="font-bold text-3xl">This is a services page</p>
      <p>
        <Link href="/services/address">Address Page</Link>
      </p>
      <button
        type="button"
        onClick={handleServiceTrue}
        className="px-4 py-2 border rounded"
      >
        Address
      </button>
    </div>
  );
};

export default Services;
