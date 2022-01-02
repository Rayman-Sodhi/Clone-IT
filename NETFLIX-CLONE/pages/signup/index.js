import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import logo from "../../img/netflix-logo-lg.png";
import bcrypt from "bcryptjs";
import handleSignup from "../../functions/handleSignup";
import { useRouter } from "next/router";
import axios from "axios";

export default function index() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSentOTP, setHasSentOTP] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSignupClick = async () => {
    // e.preventDefault();
    setLoading((prev) => true);
    await handleSignup(state, setState, setHasSentOTP);
    setLoading((prev) => false);
  };
  const handleVerifyClick = async () => {
    setLoading((prev) => true);
    if (!otp) {
      alert("Invalid otp");
      return;
    }
    const isMatch = await bcrypt.compare(otp, state?.otp);
    if (!isMatch) {
      alert("Incorrect otp");
      console.log("incorrect");
      return;
    }
    try {
      const hash = await bcrypt.hash(state?.password, 10);
      const rsp = await axios.post("/api/signup", {
        name: state?.name,
        email: state?.email,
        password: hash,
      });
      if (rsp.data.data === "Already Exists") {
        alert("User Already Exists");
        router.replace("/login");
        return;
      }
    } catch (error) {
      alert("An error occurred");
      console.log(error);
      return;
    }
    setLoading((prev) => false);
    router.replace("/login");
  };
  return (
    <div className={`netflix-bg ${hasSentOTP && "h-screen"} `}>
      <Link href="/">
        <a>
          <div className="w-72 h-72 pl-4 pt-5">
            <Image src={logo} alt="" />
          </div>
        </a>
      </Link>
      {!hasSentOTP ? (
        <div className="flex justify-center -translate-y-28">
          <div
            className="p-6 xs:p-10 text-white w-[300px] xs:w-[400px] rounded-sm"
            style={{ background: "rgba(0,0,0,0.8)" }}
          >
            <p className="text-2xl font-semibold">Sign Up</p>
            <div className="flex flex-col space-y-6 mt-3">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={state?.name}
                className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={state?.email}
                className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={state?.password}
                className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={state?.confirmPassword}
                className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <button
              className={`w-full bg-front mt-12 rounded-md py-3 font-semibold text-lg cursor-pointer ${
                loading && "bg-red-500 cursor-not-allowed"
              } `}
              onClick={handleSignupClick}
              disabled={loading}
            >
              Sign Up
            </button>
            <p className="mt-4">
              <span className="opacity-70">Already have an account ?</span>{" "}
              <Link href="/login">
                <a>Sign In now</a>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center -translate-y-28">
          <div
            className=" p-10 text-white w-[400px] rounded-sm"
            style={{ background: "rgba(0,0,0,0.8)" }}
          >
            <p className="text-2xl font-semibold">Verify to Continue</p>
            <div className="flex flex-col space-y-6 mt-3">
              <input
                type="text"
                placeholder="Enter OTP"
                name="otpUser"
                value={otp}
                className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button
              className={`w-full bg-front mt-12 rounded-md py-3 font-semibold text-lg cursor-pointer ${
                loading && "bg-red-500 cursor-not-allowed"
              } `}
              onClick={handleVerifyClick}
              disabled={loading}
            >
              Verify
            </button>
            <p className="mt-4">
              <span className="opacity-70">Already have an account ?</span>{" "}
              <Link href="/login">
                <a>Sign In now</a>
              </Link>
            </p>
          </div>
        </div>
      )}
      <Footer bgColor="rgba(0,0,0,0.6)" logo={false} />
    </div>
  );
}
