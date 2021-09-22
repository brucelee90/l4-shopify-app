import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import React from "react";
import Settings from "./Settings";

function Routes() {
    return (
        <Switch>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/settings">
                <Settings />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default Routes;
