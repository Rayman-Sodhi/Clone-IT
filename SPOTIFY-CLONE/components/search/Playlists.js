import React from 'react'
import FeaturedPlaylists from '../home/FeaturedPlaylists'

export default function Playlists({playlists}) {
    return (
        <FeaturedPlaylists featuredPlaylists={playlists?.items} />
    )
}
