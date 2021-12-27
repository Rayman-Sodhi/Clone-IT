import React from 'react'
import CreatePlaylist from './CreatePlaylist'
import Home from './home/Home'
import Library from './Library'
import LikedSongs from './LikedSongs'
import Search from './search/Search'
import Center from './Center'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atoms/playlistAtom'
import SongOverview from './home/SongOverview'

export default function Main() {
    const [playlistId,setPlaylistId] = useRecoilState(playlistIdState)
    if(playlistId==="home"){
        return <Home/>
    }else if(playlistId==="search"){
        return <Search/>
    }else if(playlistId==="songOverview"){
        return <SongOverview/>
    }
    else{
        return <Center/>
    }
}
