import React from "react";
import logo from "../../img/netflix-logo-lg.png";
import Image from "next/image";

export default function Footer({ bgColor, logo: nflogo }) {
  return (
    <div className="text-white px-4 sm:px-8 md:px-24 lg:px-36 py-12" style={{ background: bgColor }}>
      <p className="opacity-60">
        Questions? Call{" "}
        <a href="tel:000-800-040-1843" className="hover:underline">
          000-800-040-1843
        </a>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5">
        <p className="my-1 opacity-60 font-light hover:underline">FAQ</p>
        <p className="my-1 opacity-60 font-light hover:underline">Help Center</p>
        <p className="my-1 opacity-60 font-light hover:underline">Terms of Use</p>
        <p className="my-1 opacity-60 font-light hover:underline">Privacy</p>
        <p className="my-1 opacity-60 font-light hover:underline">
          Cookie Preferences
        </p>
        <p className="opacity-60 font-light hover:underline">
          Corporate Information
        </p>
      </div>
      {/* <div className="grid grid-cols-4 mt-3">
      </div> */}
      {nflogo && (
        <div className="w-48 sm:w-64 -ml-7">
          <Image src={logo} alt="logo" />
        </div>
      )}
    </div>
  );
}
