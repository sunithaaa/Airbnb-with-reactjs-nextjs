import React from "react";
import Image from "next/image";

const MediumCards = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-52 w-52 lg:h-52 w-60">
        <Image src={img} layout="fill" className="rounded-xl " />
      </div>
      <h4 className="text-xl mt-2 font-semibold">{title}</h4>
    </div>
  );
};

export default MediumCards;
