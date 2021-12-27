import React from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../../atoms/playlistAtom";

export default function FeaturedPlaylists({ featuredPlaylists }) {
    const [playlistId,setPlaylistId] = useRecoilState(playlistIdState)
  if (featuredPlaylists.length > 0) {
    return(
        <div className="text-white mt-4">
            <h1 className="text-2xl font-bold mb-4 px-4">Featured Playlists</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {
                    featuredPlaylists.map((item,i) =>{
                       return (
                        <div className="bg-[#2a2a2a] m-2 p-1 sm:p-2 xl:p-3 rounded-md hover:opacity-80 cursor-pointer" key={i} onClick={()=> setPlaylistId(item?.id)}>
                        <img src={item?.images?.[0]?.url} className="rounded-md" />
                        <p className="truncate font-semibold">{item?.name}</p>
                    </div>
                       ) 
                    })
                }
            </div>
        </div>
    )
  } else return null;
}
