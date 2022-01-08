import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState } from '../atoms/songAtom'
import useSpotify from './useSpotify'

export default function useSongInfo() {
    const spotifyApi = useSpotify()
    const [currentTrackId,setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [songInfo,setSongInfo] = useState(null)
    useEffect(()=> {
        async function fetchData(){
            if(currentTrackId){
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentTrackId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                        }
                    }
                ).then(res=> res.json())
                setSongInfo(trackInfo)
            }
        }
        fetchData()
    },[currentTrackId,spotifyApi])
    return songInfo
}
