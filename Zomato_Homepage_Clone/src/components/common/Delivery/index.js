import React from 'react'
import "./Delivery.css"
import "../filters"
import Filter from '../filters';
import DeliveryCollection from './deliveryCollections';
import TopBrands from './Top-Brands';
import { restaurant } from '../../../Data/restaurant.js';
import ExploreSection from '../ExploreSection';

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  {
    id:4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>
  },
  {
    id:6,
    title:"Great Offers", 
  }

]

const restaurantlist = restaurant;
const Delivery = () => {
  return (
<div>
  <div className='max-width'>
  <Filter filterList={deliveryFilters}/>
  </div>
<DeliveryCollection></DeliveryCollection>
<TopBrands></TopBrands>
<ExploreSection list={restaurantlist} collectionName='Delivery Restaurant in City'></ExploreSection>
</div>  
  );
};

export default Delivery