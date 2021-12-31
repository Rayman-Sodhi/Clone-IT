import React from 'react';
import AdImage from "../components/homeContent/adImage";

import Recommendations from "../components/homeContent/recommendations/recommendations";
import FillerDiv from "../components/homeContent/fillerDiv";
import TopCategories from "../components/homeContent/topCategories/topCategories";
import BecomeInstructor from "../components/homeContent/becomeInstructor";
import TrustedCompanies from "../components/homeContent/trustedCompanies";
import UdemyForBusiness from "../components/homeContent/udemyForBusiness";


function HomeContent() {
    return (
        <div>
            <AdImage />
            
            <Recommendations />
            
            <FillerDiv />
            <TopCategories />
            <BecomeInstructor />
            <TrustedCompanies />
            <UdemyForBusiness />
            
        </div>
    );
}

export default HomeContent;