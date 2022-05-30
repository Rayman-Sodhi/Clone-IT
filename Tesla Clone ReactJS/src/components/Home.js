import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Header from "./Header";

function Home() {
  return (
    <Container>
      <Header />
      <Section title="Model S" backgroundImg="model-s.jpg" des="Order Online for Touchless Delivery" leftButton="custom order" rightButton="existing inventory" isFirst/>

      <Section title="Model Y" backgroundImg="model-y.jpg" des="Order Online for Touchless Delivery" leftButton="custom order" rightButton="existing inventory" />

      <Section title="Model 3" backgroundImg="model-3.jpg" des="Order Online for Touchless Delivery" leftButton="custom order" rightButton="existing inventory" />

      <Section title="Model X" backgroundImg="model-x.jpg" des="Order Online for Touchless Delivery" leftButton="custom order" rightButton="existing inventory" />

      <Section title="Solar Panels" backgroundImg="solar-panel.jpg" des="Lowest Cost Solar Panels in America" leftButton="order now" rightButton="learn more" />

      
      <Section title="Solar Roof" backgroundImg="solar-roof.jpg" des="Produce Clean Energy From Your Roof" leftButton="order now" rightButton="learn more" />
    
      <Section title="Accessories" backgroundImg="accessories.jpg" leftButton="shop now"/>
    
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
