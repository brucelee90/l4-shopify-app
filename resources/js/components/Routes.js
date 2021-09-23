import { Route, Switch } from "react-router-dom";

import Home from "./app_components/Home";
import Products from "./app_components/Products";
import React from "react";
import Settings from "./app_components/Settings";

function Routes() {
    return (
        <Switch>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/settings">
                <Settings />
            </Route>
            <Route path="/dashboard">
                <Home />
            </Route>
        </Switch>
    );
}

export default Routes;
