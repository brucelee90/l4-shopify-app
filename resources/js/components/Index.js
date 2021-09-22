import AppFrame from "./AppFrame";
import { AppProvider } from "@shopify/polaris";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import translations from "@shopify/polaris/locales/en.json";

function Index() {
    return (
        <BrowserRouter>
            <AppProvider i18n={translations}>
                {/* App content including routes */}
                <AppFrame />
            </AppProvider>
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
