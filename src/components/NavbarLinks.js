import React from "react";


import React from 'react'
import { Route } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  )
}

export default Navbar-links;
