import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
            </div>
            
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Tanya is back!","Top news- 20M readers")}
            {newsArticle("Tesla hits new highs!","Cars & Auto- 60M readers")}
            {newsArticle("Is Redux too good?","Code- 2M readers")}
            {newsArticle("Bitcoin Breaks $222k","Crypto- 10M readers")}

        </div>
    )
}

export default Widgets;
