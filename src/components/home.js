import React from "react";
import ProductList from "./productList";
import LandingCarousel from "./carousel"
import BootstrapFooter from "./bootstrapFooter"
// import SecondaryTitle from "./title"

export default function home() {
  return (
    <>
      <div className="minimalistFront">
        <h1 className="titleText titleAnimation">Welcome to </h1>
        <h1 className="titleText titleAnimation">
          <span id="FlamaTitle"> Flama</span>
        </h1>
      </div>   
      {/* <SecondaryTitle text={"About Flama"}/> */}
      <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold balloon-background">
                    About Flama
                </h1>
            </div>
        </div>
      <LandingCarousel />  
      <ProductList />
      <BootstrapFooter />

    </>
  );
}
