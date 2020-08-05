import React from "react";
import { Switch, Route } from "react-router-dom";
import MetaTags from "react-meta-tags";

import Navbar from "./components/navbar";
import Details from "./components/details";
import Cart from "./components/cart";
import DefaultScreen from "./components/defaultScreen";
import Modal from "./components/modal";
import Home from "./components/home";

// import BootstrapFooter            from "./components/bootstrapFooter"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MetaTags>
        <title>
          flamma
        </title>
        <meta property="og:url" content="https://flammacandels.netlify.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="flamma - Enlighten your life"
        />
        <meta
          property="og:description"
          content="Enlighten your life"
        />
        <meta property="og:image" content="../src/images/header.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content="https://flammacandels.netlify.com"
        />
        <meta name="twitter:creator" content="Carlos Hernandez" />
        <meta
          name="twitter:title"
          content="flamma - Enlighten your life"
        />
        <meta
          name="twitter:description"
          content="Enlighten your life"
        />
        <meta name="twitter:image" content="../src/images/header.jpeg" />
      </MetaTags>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={DefaultScreen}></Route>
      </Switch>
      {/* <BootstrapFooter /> */}
      <Modal />
    </>
  );
}

export default App;
