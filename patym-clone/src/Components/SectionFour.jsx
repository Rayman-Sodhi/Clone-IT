import React from 'react';
import Buone from "../img/buone.png";
import Butwo from "../img/butwo.png";
import Buthree from "../img/buthree.png";
import Bufour from "../img/bufour.png";
import Bufive from "../img/bufive.png";
import Busix from "../img/busix.png";
import Buseven from "../img/buseven.webp";

const SectionFour = () => {
    return(
        <>
        <div className="secFour">
            <h1>Book and Buy on Paytm.</h1>

            <div id="cards">

            <div className="card style">
            <img src={Buone} className="card-img-top" alt="img" />
            <p>Movie Tickets</p>
            </div>

            <div className="card style">
            <img src={Butwo} className="card-img-top" alt="img" />
            <p>Flight Tickets</p>
            </div>

            <div className="card style">
            <img src={Buthree} className="card-img-top" alt="img" />
            <p>Bus Tickets</p>
            </div>

            <div className="card style">
            <img src={Bufour} className="card-img-top" alt="img" />
            <p>Train Tickets</p>
            </div>

            <div className="card style">
            <img src={Bufive} className="card-img-top" alt="img" />
            <p>Cars and Bikes</p>
            </div>

            <div className="card style">
            <img src={Busix} className="card-img-top" alt="img" />
            <p>International Flights</p>
            </div>

            <div className="card style">
            <img src={Buseven} className="card-img-top" alt="img" />
            <p>Invest In stocks</p>
            </div>

            </div>
        </div>
        </>
    );
    }   


export default SectionFour