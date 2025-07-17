"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Services = () => {
  const router = useRouter();
  const isTrue = false;

  const data = [
    {
      id: "u1",
      name: "Rafiul Islam",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "u2",
      name: "Nusrat Jahan",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "u3",
      name: "Tanvir Hasan",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: "u4",
      name: "Mim Akter",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: "u5",
      name: "Sajid Mahmud",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

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

      <div>
        {data.map((d) => {
          return (
            <div key={d.id} className="space-y-4">
              <p>{d.name}</p>
              <Link href={`/services/${d.id}`}>
                <img src={d.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
