import { AppProvider, Navigation } from "@shopify/polaris";
import { HomeMajor, OrdersMajor, ProductsMajor } from "@shopify/polaris-icons";

import AppFrame from "./Routing/AppFrame";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import enTranslations from "@shopify/polaris/locales/en.json";

function Index() {
    return (
        <BrowserRouter>
            <AppProvider i18n={enTranslations}>
                <AppFrame />
            </AppProvider>
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
