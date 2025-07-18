import NotFound404Page from "@/app/not-found";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import React from "react";

const ServiceDetails = ({ params }) => {
  const id = params.id;

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

  const singleData = data.find((d) => d.id == id);

  if (singleData) {
    return (
      <div>
        <p>ID: {id}</p>
        <p>{singleData.name}</p>
        <img src={singleData.image} alt="" />
      </div>
    );
  } else {
    return(
      <NotFound404Page/>
    )
  }
};

export default ServiceDetails;
