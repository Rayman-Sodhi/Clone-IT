import React ,  { useState } from "react";
import Header from './../../components/common/Header/index';
import Footer from "../../components/common/Footer";
import TabOption from "../../components/common/TabOptions";
import Delivery from "../../components/common/Delivery";
import DiningOut from './../../components/common/DiningOut/index';
import Nightlife from "../../components/common/NightLife";
 

const Homepage = () => {
     // eslint-disable-next-line no-unused-vars
     const [activeTab, setActiveTab] = useState("Delivery");
       return (
           <div>
                 <Header></Header>
                    <TabOption activeTab={activeTab} setActiveTab={setActiveTab}></TabOption>
                         {getCorrectScreen(activeTab)}
                                <Footer></Footer>
                                           </div>
                                                   );
                                                      };

const getCorrectScreen = (tabs) =>{
    switch(tabs){
        case "Delivery":
            return <Delivery/>
            case "Dining Out":
                return <DiningOut/>
                case "NightLife":
                    return <Delivery></Delivery>
                    default:
                        return <Delivery/>
                                      }
                                           };

export default Homepage;
