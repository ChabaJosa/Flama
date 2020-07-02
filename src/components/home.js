import React from "react";
import ProductList from "./productList";
// import SomePic1 from "../candles-heart.jpg";
// import SomePic2 from "../candle-dark.jpg";
// import SomePic3 from "../candles-red.jpg";
import LandingCarousel from "./carousel"
import SecondTitle from "./title"

export default function home() {
  return (
    <>
      <div className="minimalistFront">
        <h1 className="titleText titleAnimation">Welcome to </h1>
        <h1 className="titleText titleAnimation">
          <span id="FlamaTitle"> Flama</span>
        </h1>
      </div>   
      
      <SecondTitle name="Flama" title="Products" />

      <LandingCarousel />  

      <ProductList />
    </>
  );
}
