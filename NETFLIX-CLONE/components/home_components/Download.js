import React from "react";

export default function Download() {
  return (
    <div className="text-white bg-black pb-10 px-4 xs:px-8 sm:px-16 md:px-24 lg:pl-0 lg:pr-36 flex flex-col lg:flex-row items-center">
      <div className="hidden lg:inline-flex">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
          className="transform scale-90 hover:scale-100 animation cursor-pointer"
        />
      </div>
      <div className="flex justify-center lg:hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
          className="transform scale-90 hover:scale-100 animation cursor-pointer"
        />
      </div>
      <div>
        <p className="text-center lg:text-left text-4xl lg:text-5xl font-bold">
          Download your shows to watch offline.
        </p>
        <p className="text-center lg:text-left text-base sm:text-xl lg:text-2xl font-semibold mt-5">
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
}
