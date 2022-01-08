import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useSpotify from "../../hooks/useSpotify";
import Playlists from "./Playlists";
import Tracks from "./Tracks";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

export default function Search() {
  const { data: session } = useSession();
  const [search, setSearch] = useState("");
  const [color, setColor] = useState(null);
  const [results, setResults] = useState(null);
  const spotifyApi = useSpotify();
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  useEffect(() => {
    if (search === "") return;
    if (spotifyApi?.getAccessToken()) {
      spotifyApi
        .search(search, ["track", "playlist"], { limit: 5, offset: 1 })
        .then((data) => {
          setResults(data?.body);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search]);

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-6 sm:top-5 right-2 sm:right-8">
        <div
          className="w-32 sm:w-auto flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
          onClick={signOut}
        >
          <img
            className="rounded-full w-5 h-5 sm:w-10 sm:h-10"
            src={session?.user.image}
            alt=""
          />
          <h2 className="truncate">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      {/* search bar */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search"
        className={`${search ? "bg-white text-black" : "bg-black text-white"} px-6 py-1 sm:py-3 outline-none mx-2 sm:mx-7 my-6 w-32 sm:w-72 rounded-3xl absolute`}
      />
      {search==='' && (
        <section
          className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
        ></section>
      )}
      {search === "" && (
        <p className="text-white flex justify-center text-4xl font-bold">
          Nothing to Show
        </p>
      )}
      {search!=='' && results?.tracks && <Tracks tracks={results?.tracks} />}
      {search!=='' && results?.playlists && <Playlists playlists={results?.playlists} />}

    </div>
  );
}
