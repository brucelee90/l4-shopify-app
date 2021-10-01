import Home from "../Home/Home";
import React from "react";
import { Route } from "react-router";
import Settings from "../Settings/Settings";

export default function Routes() {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
        </div>
    );
}
