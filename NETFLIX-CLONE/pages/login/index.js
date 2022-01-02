import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import logo from "../../img/netflix-logo-lg.png";
import Link from "next/link";
import handleSignIn from "../../functions/handleSignIn";
import { useRouter } from "next/router";

export default function index() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSignInClick = async () => {
    setLoading((prev) => true);
    await handleSignIn(state, router);
    setLoading((prev) => false);
  };
  return (
    <div className="netflix-bg">
      <Link href="/">
        <a>
          <div className="w-72 h-72 pl-4 pt-5">
            <Image src={logo} alt="" />
          </div>
        </a>
      </Link>
      <div className="flex justify-center -translate-y-28">
        <div
          className="p-6 xs:p-10 text-white w-[300px] xs:w-[400px] rounded-sm"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <p className="text-2xl font-semibold">Sign In</p>
          <div className="flex flex-col space-y-6 mt-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={state?.email}
              className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={state?.password}
              className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
              onChange={(e) =>
                setState({ ...state, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button
            className={`w-full bg-front mt-12 rounded-md py-3 font-semibold text-lg cursor-pointer ${
              loading && "bg-red-500 cursor-not-allowed"
            } `}
            onClick={handleSignInClick}
            disabled={loading}
          >
            Sign In
          </button>
          <p className="mt-4">
            <span className="opacity-70">New to Netflix ?</span>{" "}
            <Link href="/signup">
              <a>Sign up now</a>
            </Link>
          </p>
        </div>
      </div>
      <Footer bgColor="rgba(0,0,0,0.6)" logo={false} />
    </div>
  );
}
