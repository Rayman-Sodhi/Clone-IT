import { getCookie, removeCookies } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../../img/netflix-logo-lg.png";
import avatar from "../../img/avatar.png";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {sbs} from '../../atoms/sbs'

export default function index() {
  const router = useRouter();
  const data = getCookie("user");
  const user = data && JSON.parse(data);
  const [flag, setFlag] = useRecoilState(sbs);
  const [userDB, setUserDB] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const rsp = await axios.post("/api/auth/getUser", {
          email: user?.email,
        });
        setUserDB(rsp.data.data);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (!getCookie("user")) {
      router.push("/");
    }
  }, []);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setFlag(true)
      alert("Subscribed Success");
    }
    if (query.get("canceled")) {
      alert("Subscribed Canceled");
    }
    router.push("/profile");
  }, []);
  const handleSignOutClick = () => {
    removeCookies("user");
    router.push("/");
  };
  const handleDeleteClick = async () => {
    if(!user)return;
    const rsp = prompt("Please enter your email address to confirm")
    if(rsp !== user?.email){
      alert("Email not matched")
      return;
    }
    try {
      await axios.post('/api/auth/deleteUser',{email: user?.email})
      removeCookies("user");
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("An error occurred")
      return
    }
  }
  return (
    <div className="bg-black h-screen px-3 pt-3 text-white">
      <div className="flex justify-between">
        <div className="w-32 h-10">
          <Link href="/netflix">
            <a>
              <Image src={logo} alt="" />
            </a>
          </Link>
        </div>
        <div className="w-10 h-10">
          <Image src={avatar} alt="" className="rounded-full" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="sm:w-[500px] absolute top-[25vh]">
          <p className="text-3xl font-semibold">Edit Profile</p>
          <div className="flex space-x-4">
            <div className="w-24 h-24">
              <Image src={avatar} alt="" className="" />
            </div>
            <div className="w-full">
              <p className="font-semibold italic bg-gray-500 w-full px-3 py-1 rounded-sm">
                {user?.email}
              </p>
              <p className="my-2 font-medium">
                {userDB?.plan
                  ? `Plans (Current Plan: ${userDB.plan})`
                  : "Plans (Current Plan: Not Subscribed)"}
              </p>
              <hr className="opacity-50" />
              <p className="mt-2 text-sm font-semibold opacity-75">
                Renewal Date:{" "}
                {userDB?.expires ? `${userDB?.expires}` : "Subscribe to Renew"}
              </p>
              <Card title="Netflix Standard" quality="1080p" userDB={userDB} />
              <Card title="Netflix Basic" quality="480p" userDB={userDB} />
              <button
                className="w-full bg-front font-semibold flex justify-center rounded-md py-2 mt-5"
                onClick={handleSignOutClick}
              >
                Sign Out
              </button>
              <button
                className="w-full bg-front font-semibold flex justify-center rounded-md py-2 mt-5"
                onClick={handleDeleteClick}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, quality, userDB }) => {
  const data = getCookie("user");
  const user = data && JSON.parse(data);
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  const [flag, setFlag] = useRecoilState(sbs);
  const [loading, setLoading] = useState(false);
  const handleSubscribeClick = async () => {
    try {
      setLoading((prev) => true);
      const stripe = await stripePromise;
      const rsp = await axios.post("/api/checkout_sessions", {
        name: title,
        quality: quality,
        price: quality === "1080p" ? "300" : "200",
      });
      const result = await stripe.redirectToCheckout({
        sessionId: rsp.data.id,
      });
      if (result.error) {
        alert(result.error.message);
        setLoading((prev) => false);
        return;
      }
    } catch (error) {
      console.log(error);
      setLoading((prev) => false);
      alert("An error occurred");
      return;
    }
    setLoading((prev) => false);
  };
  useEffect(() => {
    if(!flag) return
    async function fetchData() {
      try {
        await axios.post("/api/auth/updateUser", {
          plan: `${title} ${quality}`,
          email: user?.email,
        });
        setFlag(false)
      } catch (error) {
        console.log(error);
        alert("An error occurred");
      }
    }
    fetchData();
  }, [flag]);
  return (
    <div className="flex items-center justify-between my-2">
      <div className="flex flex-col opacity-75">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{quality}</p>
      </div>
      <button
        className={`bg-front font-bold py-2 px-4 rounded-md ${
          (loading || userDB?.subscribed === true) && "bg-red-500 cursor-not-allowed"
        }`}
        onClick={handleSubscribeClick}
        disabled={loading || userDB?.subscribed === true}
      >
        Subscribe
      </button>
    </div>
  );
};
