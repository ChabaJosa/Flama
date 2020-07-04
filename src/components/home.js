import React from "react";
import ProductList from "./productList";
import LandingCarousel from "./carousel"
import SecondTitle from "./title"
import BootstrapFooter from "./bootstrapFooter"

export default function home() {
  return (
    <>
      <div className="minimalistFront">
        <h1 className="titleText titleAnimation">Welcome to </h1>
        <h1 className="titleText titleAnimation">
          <span id="FlamaTitle"> Flama</span>
        </h1>
      </div>   
      
      <SecondTitle name="About" title="Flama" />
      <LandingCarousel />  
      <ProductList />
      <BootstrapFooter />

    </>
  );
}
