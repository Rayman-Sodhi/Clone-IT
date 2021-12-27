import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentTrackIdState, isPlayingState } from "../../atoms/songAtom";
import { songOverviewState } from "../../atoms/songOverview";
import useSpotify from "../../hooks/useSpotify";
import { changeTime } from "../../lib/lib";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

export default function SongOverview() {
  const songOverview = useRecoilValue(songOverviewState);
  const [color, setColor] = useState(null);
  const { data: session } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const spotifyApi = useSpotify();
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [songOverview]);
  console.log(songOverview);
  const time = changeTime(songOverview?.duration_ms);
  const [minutes, seconds] = time.split(":");
  const playSong = async () => {
    setCurrentTrackId(songOverview?.id);
    setIsPlaying(true);
    spotifyApi
      .play({ uris: [songOverview?.uri] })
      .then(() => {})
      .catch(() => {
        alert("Premium required");
      });
  }
  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
          onClick={signOut}
        >
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          src={songOverview?.album?.images?.[0]?.url}
          alt=""
          className="h-44 w-44 shadow-2xl"
        />
        <div>
          <p className="text-5xl font-bold truncate">{songOverview?.album?.name}</p>
          <div className="flex items-center space-x-2 mt-2">
            <img
              className="rounded-full h-8 w-8"
              alt=""
              src={songOverview?.album?.images?.[2]?.url}
            />
            <p className="font-semibold truncate">{songOverview?.artists?.[0]?.name}</p>
            <div className="w-1 h-1 mt-1 rounded-full bg-white opacity-70"></div>
            <p className="opacity-70">
              {minutes} min {seconds} sec
            </p>
          </div>
        </div>
      </section>
      <div
        className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer mx-8"
        onClick={playSong}
      >
        <div className="flex items-center space-x-4">
          <p>1</p>
          <img
            src={songOverview?.album?.images?.[0]?.url}
            alt=""
            className="h-10 w-10"
          />
          <div>
            <p className="w-36 lg:w-64 truncate text-white">
              {songOverview?.album?.name}
            </p>
            <p className="w-40">{songOverview?.artists?.[0]?.name}</p>
          </div>
        </div>
        <div className="flex items-center justify-between ml-auto md:ml-0">
          <p className="hidden md:inline w-40">{songOverview?.album?.name}</p>
          <p>{changeTime(songOverview?.duration_ms)}</p>
        </div>
      </div>
    </div>
  );
}
