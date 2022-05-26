import React from "react";
import "../../components/homeContent/trustedCompanies.css";

function TrustedCompanies() {
  return (
    <div className="trustedCompanies">
      <h2 className="heading">Trusted by companies of all sizes</h2>
      <div className="companiesLogos">
        <img
          alt="Nasdaq"
          className="Nasdaq companyLogo"
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
        ></img>
        <img
          alt="Volkswagen"
          className="Volkswagen companyLogo"
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
        ></img>
        <img
          alt="Box"
          className="Box companyLogo"
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
        ></img>
        <img
          alt="Netapp"
          className="Netapp companyLogo"
          src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
        ></img>
        <img
          alt="Eventbrite"
          className="Eventbrite companyLogo"
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
        ></img>
      </div>
    </div>
  );
}

export default TrustedCompanies;
