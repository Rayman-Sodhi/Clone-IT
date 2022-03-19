import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <span className="name">
                Inshorts clone made by -{" "}
                <a href="https://dipayan-portfolio-8cbf36.netlify.app/" target="__blank">
                   Dipayan Bose
                </a>
            </span>
            <hr style={{ width: "90%" }} />
        </div>
    )
};

export default Footer;