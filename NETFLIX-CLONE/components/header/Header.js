import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../utils/Requests";
import logo from "../../img/netflix-logo-lg.png";
import avatar from "../../img/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { searchState } from "../../atoms/search";
import { queryState } from "../../atoms/query";
export default function Header({ userDB }) {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useRecoilState(queryState);
  const [search, setSearch] = useRecoilState(searchState);
  useEffect(() => {
    async function fetchData() {
      try {
        const rsp = await axios.get(requests.fetchTrending);
        setMovie(rsp?.data?.results?.[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (!query) return;
    async function fetchData() {
      const rsp = await axios.get(requests.fetchSearch + query);
      setSearch(rsp?.data?.results.length > 0 ? rsp?.data?.results : null);
    }
    fetchData();
  }, [query]);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.93)) ,url(https://image.tmdb.org/t/p/original/${
          query && search ? search?.[0]?.backdrop_path : movie?.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        animation: "moving 10s linear infinite",
      }}
      className="md:px-3 pt-3"
    >
      <div className="flex items-end xs:items-start justify-between">
        <div className="w-24 xs:w-32 xs:h-10">
          <Image src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-white py-1 px-3 rounded-sm outline-none focus:outline-none mr-4 w-40 xs:w-auto"
            style={{ background: "rgba(0,0,0,0.7)" }}
          />
          <Link href="/profile">
            <a>
              <div className="w-10 h-10">
                <Image src={avatar} alt="" className="rounded-full" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="px-2 md:w-3/4 lg:w-1/2 absolute" style={{top: '35vh'}} >
        <p className="text-white font-bold text-3xl sm:text-4xl">
          {query && search ? search?.[0]?.title : movie?.title}
        </p>
        <div className="flex space-x-4 my-3">
          <button
            className="text-white py-2 px-10 rounded-sm font-semibold"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() =>
              userDB?.subscribed ? alert("Play") : alert("Subscribe to Play")
            }
          >
            Play
          </button>
          <button
            className="text-white py-2 px-10 rounded-sm font-semibold"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            My List
          </button>
        </div>
        <p className="text-white font-semibold text-sm sm:text-base ">
          {query && search ? search?.[0]?.overview?.slice(0,200) + "...." : movie?.overview?.slice(0,200) + "...."}
        </p>
      </div>
      {/* <div className="mt-20">&nbsp;</div> */}
    </div>
  );
}
