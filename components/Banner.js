import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[250px] sm:h-[400px] lg:h-[400px] xl:h-[550px] 2xl:h-[500px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute  top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg lg:text-2xl font-bold">
          Not sure where to go ?
        </p>
        <button className="bg-white px-6 py-2 rounded-full shadow-md text-purple-500 my-4 font-bold hover:shadow-xl active:scale-90 transition duration-150">
          I`m Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
