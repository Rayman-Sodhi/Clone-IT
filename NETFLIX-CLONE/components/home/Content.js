import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

export default function Content() {
  return (
    <div className="text-white flex flex-col items-center translate-y-24">
      <p className="text-2xl sm:text-3xl md:text-5xl font-bold ">Unlimited movies, TV</p>
      <p className="text-2xl sm:text-3xl md:text-5xl font-bold ">shows and more.</p>
      <p className="text-sm xs:text-base font-medium md:font-normal md:text-xl lg:text-2xl mt-3">Watch anywhere. Cancel anytime.</p>
      <p className="text-sm xs:text-base font-medium md:font-normal md:text-xl lg:text-2xl mt-1 md:mt-5 text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex mt-2">
        <input
          type="email"
          placeholder="Email address"
          className="py-2 sm:py-3 md:py-4 px-5 w-48 sm:w-64 md:w-96 text-black outline-none focus:outline-none"
        />
        <Link href="/signup">
          <a className="flex space-x-1 items-center bg-front px-2 md:px-3 font-medium sm:font-normal text-sm sm:text-lg md:text-2xl">
            <p>Get Started</p>
            <BsChevronRight className="mt-1" />
          </a>
        </Link>
      </div>
    </div>
  );
}
