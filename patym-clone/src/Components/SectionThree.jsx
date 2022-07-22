import React from 'react';
import Reone from "../img/reone.png";
import Retwo from "../img/retwo.png";
import Rethree from "../img/rethree.png";
import Refour from "../img/refour.png";
import Refive from "../img/refive.png";
import Resix from "../img/resix.png";
import Reseven from "../img/reseven.png";

const SectionThree = () => {
    return(
        <>
        <div className="secThree">
            <h1>Recharge and Pay Bills on Paytm.</h1>

            <div id="cards">

            <div className="card style">
            <img src={Reone} className="card-img-top" alt="img" />
            <p>Recharge Prepaid Mobile</p>
            </div>

            <div className="card style">
            <img src={Retwo} className="card-img-top" alt="img" />
            <p>Pay Rent Payment</p>
            </div>

            <div className="card style">
            <img src={Rethree} className="card-img-top" alt="img" />
            <p>Pay Electricity Bill</p>
            </div>

            <div className="card style">
            <img src={Refour} className="card-img-top" alt="img" />
            <p>Recharge D2H Connection</p>
            </div>

            <div className="card style">
            <img src={Refive} className="card-img-top" alt="img" />
            <p>Book Gas Cylinder</p>
            </div>

            <div className="card style">
            <img src={Resix} className="card-img-top" alt="img" />
            <p>Pay Creditcard Bills</p>
            </div>

            <div className="card style">
            <img src={Reseven} className="card-img-top" alt="img" />
            <p>All Payments Service</p>
            </div>

            </div>
        </div>
        </>
    );
}

export default SectionThree