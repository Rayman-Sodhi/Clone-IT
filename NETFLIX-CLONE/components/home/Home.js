import React from "react";
import Divider from "../../helpers/Divider";
import Footer from "../footer/Footer";
import Children from "../home_components/Children";
import Download from "../home_components/Download";
import EnjoyTV from "../home_components/EnjoyTV";
import FAQ from "../home_components/FAQ";
import Watch from "../home_components/Watch";
import Content from "./Content";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="netflix-bg h-screen">
        <Navbar />
        <Content />
      </div>
      <Divider />
      <EnjoyTV />
      <Divider />
      <Download />
      <Divider />
      <Watch />
      <Divider />
      <Children />
      <Divider />
      <FAQ />
      <Divider />
      <Footer bgColor="black" logo={true} />
    </>
  );
}
