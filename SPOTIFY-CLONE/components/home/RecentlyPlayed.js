import React from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../../atoms/playlistAtom";
import { songOverviewState } from "../../atoms/songOverview";

export default function RecentlyPlayed({recent}) {
    const [playlistId,setPlaylistId] = useRecoilState(playlistIdState)
    const [songOverview,setSongOverview] = useRecoilState(songOverviewState)
  if (recent.length) {
    return (
        <div className="text-white mt-4">
            <h1 className="text-2xl font-bold mb-4 px-4">Recently Played</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {
                recent?.map((item,i)=> {
                    if(i<8)
                    return (
                        <div className="bg-[#2a2a2a] m-2 p-1 sm:p-2 xl:p-3 rounded-md hover:opacity-80 cursor-pointer" key={i} onClick={function(){
                            setPlaylistId("songOverview")
                            setSongOverview(item?.track)
                        }} >
                            <img src={item?.track?.album?.images?.[0]?.url} className="rounded-md" />
                            <p className="truncate font-semibold">{item?.track?.album?.name}</p>
                        </div>
                    )
                    else return null
                })
            }
        </div>
        </div>
    )
  } else return null;
}
