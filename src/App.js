import React                      from 'react';
import {Switch, Route }           from 'react-router-dom';
import Navbar                     from "./components/navbar"
import Details                    from "./components/details"
import Cart                       from "./components/cart"
import DefaultScreen              from "./components/defaultScreen"
import Modal                      from "./components/modal"
import Home                       from "./components/home"
// import BootstrapFooter            from "./components/bootstrapFooter"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" 


function App() {
  return (
    <>
        <Navbar/>

        <Switch>
            <Route exact path="/"   component={Home}   ></Route>
            <Route path="/details"  component={Details}       ></Route>
            <Route path="/cart"     component={Cart}          ></Route>
            <Route                  component={DefaultScreen} ></Route>
        </Switch>
        {/* <BootstrapFooter /> */}
        <Modal />
    </>
  );
}

export default App;
