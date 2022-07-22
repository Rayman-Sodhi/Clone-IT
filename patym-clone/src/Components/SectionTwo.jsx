import React from "react";
import leftImg from "../img/sectionTwoLeft.png"
import rightImg from "../img/sectionTwoRight.png"

const SectionTwo = () => {
    return(
        <>
        <div className="container-fluid" id="secTwo">
            <div className="row">

                {/* left section starts */}
                <div className="col-6" id="leftSec">
                    <figure className="secTwoFig">
                        <img src={leftImg} alt="img" id="secTwoleftImg"/>
                    </figure>
                    <h1>
                        India's Most-loved Payments App
                    </h1>
                    <h5>
                    Recharge  pay bills, book flights  movie tickets, open a savings account, invest in stocks 
                     mutual funds, and do a lot more.
                    </h5>

                    <button id="btn">Download Paytm App <i className="fa-brands fa-apple"  id="apple"></i>  <i className="fa-brands fa-google-play"></i></button>

                </div>
                {/* left section  ends */}

                {/* right section starts */}
                <div className="col-6" id="rightSec">
                    <figure className="secTwoFig">
                        <img src={rightImg} alt="img" id="secTwoRightImg"/>
                    </figure>
                </div>
                {/* right section ends */}

            </div>
        </div>
        </>
    );
}

export default SectionTwo