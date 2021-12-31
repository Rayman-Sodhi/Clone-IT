import React from 'react';
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="margin-top-xl">
            <div className="footer__area">
                <div className="footer__content">
                    <div className="footer__top">
                        <div className="row">
                            <div className="col-1-of-5 footer__logo">
                                <h2 className="logo__text"><NavLink to="/">terribbble</NavLink></h2>
                                <p>terribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                            </div>
                            {/* <div className="nav__area">
                                <div className="col-1-of-5">
                                    <ul className="footer__nav">
                                        <li className="footer__nav-item">For designers</li>
                                        <li className="footer__nav-item">Go Pro!</li>
                                        <li className="footer__nav-item">Explore design work</li>
                                        <li className="footer__nav-item">Design blog</li>
                                        <li className="footer__nav-item">Overtime podcast</li>
                                        <li className="footer__nav-item">Terribble meetups</li>
                                        <li className="footer__nav-item">Playoffs</li>
                                        <li className="footer__nav-item">Code of conducts</li>
                                    </ul>
                                </div>

                                <div className="col-1-of-5">
                                    <ul className="footer__nav">
                                        <li className="footer__nav-item">Hire Designers</li>
                                        <li className="footer__nav-item">Post a job opening</li>
                                        <li className="footer__nav-item">Search a freelance project</li>
                                        <li className="footer__nav-item">Search designers</li>
                                        <li className="footer__nav-item">Brand</li>
                                        <li className="footer__nav-item">Advertise with us</li>
                                    </ul>
                                </div>

                                <div className="col-1-of-5">
                                    <ul className="footer__nav">
                                        <li className="footer__nav-item">Company</li>
                                        <li className="footer__nav-item">About</li>
                                        <li className="footer__nav-item">Careers</li>
                                        <li className="footer__nav-item">Support</li>
                                        <li className="footer__nav-item">API</li>
                                        <li className="footer__nav-item">Testimonials</li>
                                        <li className="footer__nav-item">Privacy policy</li>
                                        <li className="footer__nav-item">Terms of service</li>
                                    </ul>
                                </div>

                                <div className="col-1-of-5">
                                    <ul className="footer__nav">
                                        <li className="footer__nav-item">Directories</li>
                                        <li className="footer__nav-item">Design jobs</li>
                                        <li className="footer__nav-item">Tags</li>
                                        <li className="footer__nav-item">Places</li>
                                        <li className="footer__nav-item">Designers for hire</li>
                                        <li className="footer__nav-item">Shop</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="">
                        <div className="row bottom__footer">
                            <div className="col-1-of-3">© 2020 Terribbble. All rights reserved.</div>
                            <div className="col-1-of-3">Made with ♥ remotely from India</div>
                            <div className="col-1-of-3"><a href="https://github.com/tnmsnhr/dribble-clone" target="_blank"><i className="fa fa-github"></i></a>  github repo</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;