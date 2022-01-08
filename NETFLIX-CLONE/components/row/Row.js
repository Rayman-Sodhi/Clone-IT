import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../utils/Requests";
import { useRecoilState } from "recoil";
import { searchState } from "../../atoms/search";
import { queryState } from "../../atoms/query";

export default function Row({ userDB }) {
  const [trending, setTrending] = useState();
  const [originals, setOriginals] = useState();
  const [topRated, setTopRated] = useState();
  const [action, setAction] = useState();
  const [comedy, setComedy] = useState();
  const [horror, setHorror] = useState();
  const [romance, setRomance] = useState();
  const [doc, setDoc] = useState();
  const [search, setSearch] = useRecoilState(searchState);
  const [query, setQuery] = useRecoilState(queryState);
  useEffect(() => {
    async function fetchData() {
      var rsp = await axios.get(requests.fetchTrending);
      setTrending({ title: "Trending", arr: rsp.data.results });
      rsp = await axios.get(requests.fetchNetflixOriginals);
      setOriginals({ title: "Netflix Originals", arr: rsp.data.results });
      rsp = await axios.get(requests.fetchTopRated);
      setTopRated({ title: "Top Rated", arr: rsp.data.results });
      rsp = await axios.get(requests.fetchActionMovies);
      setAction({ title: "Action", arr: rsp.data.results });
      rsp = await axios.get(requests.fetchComedyMovies);
      setComedy({ title: "Comedy", arr: rsp.data.results });
      rsp = await axios.get(requests.fetchHorrorMovies);
      setHorror({ title: "Horror", arr: rsp.data.results });
      rsp = await axios.get(requests.fetchRomanceMovies);
      setRomance({ title: "Romance", arr: rsp.data.results });
      rsp = await axios.get(requests.fetchDocumentaries);
      setDoc({ title: "Documentaries", arr: rsp.data.results });
    }
    fetchData();
  }, []);
  if (query && search) {
    return (
      <div className="bg-black text-white">
        <Card userDB={userDB} data={{ title: "Similar Matches", arr: search }} />
      </div>
    );
  } else {
    return (
      <div className="bg-black text-white">
        <Card userDB={userDB} data={trending} />
        <Card userDB={userDB} data={originals} />
        <Card userDB={userDB} data={topRated} />
        <Card userDB={userDB} data={action} />
        <Card userDB={userDB} data={comedy} />
        <Card userDB={userDB} data={horror} />
        <Card userDB={userDB} data={romance} />
        <Card userDB={userDB} data={doc} />
      </div>
    );
  }
}

const Card = (props) => {
  const { data, userDB } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <div className="p-5">
      <p className="text-2xl font-semibold">{data?.title}</p>
      <div className="carousel rounded-box mt-2">
        {data?.arr?.map((e, index) => {
          return (
            <div
              key={index}
              className="carousel-item w-[300px] h-[200px] hover:w-[400px] animation my-2 cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0)) ,url(https://image.tmdb.org/t/p/original/${e.poster_path})`,
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => (toggle ? setToggle(false) : setToggle(e))}
            >
              <div className="flex flex-col justify-end px-4">
                <p className="truncate text-xl font-semibold">{e?.title}</p>
                <p className="text-sm mt-1">{e?.overview?.slice(0, 60)}</p>
              </div>
            </div>
          );
        })}
      </div>
      {toggle && (
        <div className="md:h-[250px] grid grid-cols-1 md:grid-cols-2 px-3 mt-5">
          <div>
            <p className="text-2xl font-bold">{toggle?.title}</p>
            <p className="opacity-60 text-sm mt-5">
              {toggle?.overview?.slice(0, 250)}...
            </p>
            <div className="flex space-x-2 mt-3">
              <div className="h-6 w-6 rounded-full bg-front"></div>
              <p className="capitalize font-semibold">{toggle?.media_type}</p>
            </div>
            <button
              className="bg-front text-white px-8 py-2 font-semibold rounded-sm mt-5"
              onClick={() =>
                userDB?.subscribed ? alert("Play") : alert("Subscribe to Play")
              }
            >
              Play
            </button>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,212,255,0) 100%) ,url(https://image.tmdb.org/t/p/original/${toggle?.backdrop_path})`,
              backgroundPosition: "center top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="rounded-md hidden md:inline-flex"
          ></div>
          <div className="md:hidden">
            <img
              src={`https://image.tmdb.org/t/p/original/${toggle?.backdrop_path}`}
              alt=""
              className="transform scale-90"
            />
          </div>
        </div>
      )}
    </div>
  );
};
