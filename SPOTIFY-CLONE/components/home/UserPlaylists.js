import React from 'react'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../../atoms/playlistAtom'

export default function UserPlaylists({playlists}) {
    const [playlistId,setPlaylistId] = useRecoilState(playlistIdState)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 text-white">
            {
                playlists.map((playlist,i) => {
                    if(i<6 && playlist?.images?.[0]?.url){
                        return (
                            <div className="bg-[#2a2a2a] flex m-2 lg:m-4 rounded-md items-center cursor-pointer hover:opacity-80" key={i} onClick={()=> setPlaylistId(playlist?.id)}>
                                <img src={playlist?.images[0]?.url} alt="" className="w-16 h-16 lg:w-24 lg:h-24" />
                                <p className="capitalize ml-2 font-semibold md:text-lg truncate">{playlist?.name}</p>
                            </div>
                        )
                    }else return null
                })
            }
        </div>
    )
}
