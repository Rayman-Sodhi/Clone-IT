import React from "react";

const SectionFive = () => {
    return(
        <>
        <div className="secFive">
            <div className="content">
                <div className="secFiveLeft">
                <div className="leftText">
                Download Paytm App to Pay from anywhere
                </div>

                <a href="/">
                    <div className="icon"><i className="fa-brands fa-apple"  id="apple"></i></div>
                    <div className="aText"> <div className="small">Download on the</div> <span className="bold">App Store</span></div>
                </a>

                <a href="/">
                    <div className="icon"><i className="fa-brands fa-google-play"></i></div>
                    <div className="aText"> <div className="small">GET IN ON</div> <span className="bold">Google Store</span></div>
                </a>

                </div>

                <div className="secFiveRight">
                    <span> <i class="fa-brands fa-twitter"></i> </span>
                    <span> <i class="fa-brands fa-instagram"></i> </span>
                    <span> <i class="fa-brands fa-facebook-f"></i> </span>
                </div>
            </div>
        </div>
        <div className="hr">
        <hr />
        </div>
        </>
    );
};

export default SectionFive