import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../../atoms/playlistAtom";
import useSpotify from "../../hooks/useSpotify";
import FeaturedPlaylists from "./FeaturedPlaylists";
import RecentlyPlayed from "./RecentlyPlayed";
import UserPlaylists from "./UserPlaylists";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

export default function Home() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [playlists,setPlaylists] = useState([])
  const [recent,setRecent] = useState([])
  const [featuredPlaylists,setFeaturedPlaylists] = useState([])
  const spotifyApi = useSpotify();
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    if(spotifyApi.getAccessToken()){
        spotifyApi.getUserPlaylists().then(data=> {
            setPlaylists(data.body.items)
        }).catch(err => {
          console.log(err)
        }) 
        spotifyApi.getMyRecentlyPlayedTracks().then(data=> {
            setRecent(data.body.items)
        }).catch(err => {
          console.log(err)
        }) 
        spotifyApi.getFeaturedPlaylists().then(data=> {
          setFeaturedPlaylists(data?.body?.playlists?.items)
        }).catch(err => {
          console.log(err)
        }) 
    }
  },[spotifyApi,playlistId,session]);
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
        <p className="text-3xl md:text-4xl xl:text-5xl font-bold">
          Hi, {session?.user.name}
        </p>
      </section>
      <div className="p-4">
      {playlists?.length > 0 && <UserPlaylists playlists={playlists} />}
      {recent?.length > 0 && <RecentlyPlayed recent={recent} />}
      {featuredPlaylists?.length > 0 && <FeaturedPlaylists featuredPlaylists={featuredPlaylists}/>}
      </div>
    </div>
  );
}
