import React from "react";

export default function EnjoyTV() {
  return (
    <div className="text-white bg-black py-24 px-4 xs:px-8 sm:px-16 md:px-24 lg:px-36 flex flex-col lg:flex-row items-center">
      <div className="">
        <p className="text-center lg:text-left font-bold text-4xl lg:text-5xl">Enjoy on your TV.</p>
        <p className="text-center lg:text-left font-semibold text-base sm:text-xl lg:text-2xl mt-5">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      </div>
      <div className="mt-3 lg:mt-0">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="rounded-md transform hover:scale-110 animation cursor-pointer"
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
