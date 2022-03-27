import React, { useState, useEffect } from "react";
import Navbar from "../Navigationbar/Navbar";
import Banner from "../../Layout/Banner";
import {
    GamesWallSection,
    GameWrapper,
    GameCard
} from "./GamesStyles";
import axios from 'axios';

const GamesTab = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchGames = () => {
            axios.get("/RockstarGamesInfo.json")
            .then((response) => {
                if(response.status === 200) {
                    setGames(response.data);
                    setIsLoading(true);
                    console.log('Games Info: ', response.data);
                }
            })
        }
        return fetchGames();
    }, [])

    if(!isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return(
            <div>
                <Navbar />
                <Banner />
                <div className="col-md-12" style={{ position: 'relative', bottom: '40px' }}>
                    <GameWrapper>
                        <GamesWallSection>
                            <div>
                                <h3 style={{ margin: '0 10px' }}>Your Games</h3>
                            </div>
                            <div className="game-wrapper">
                                {games?.games?.map((game) => (
                                    <GameCard>
                                        <a href="#" key={game.id}>
                                            <img src={game.gameImage} className="game-img" alt="GTA IV" width="600" height="400"/>
                                        </a>
                                        <div className="play-time">
                                            <a href="#"><i className="far fa-check-circle" /></a>
                                            <p>Last Played:{' '}<em>{game.date}</em></p>
                                        </div>
                                    </GameCard>
                                ))}
                            </div>
                        </GamesWallSection>
                    </GameWrapper>
                </div>
            </div>
        )
    }
}

export default GamesTab;
