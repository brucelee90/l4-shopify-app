import { AppProvider, Navigation } from "@shopify/polaris";
import { HomeMajor, OrdersMajor, ProductsMajor } from "@shopify/polaris-icons";

import React from "react";
import ReactDOM from "react-dom";

function Example() {
    return (
        <AppProvider>
            <Navigation location="/">
                <Navigation.Section
                    items={[
                        {
                            url: "/path/to/place",
                            label: "Home",
                            icon: HomeMajor,
                        },
                        {
                            url: "/path/to/place",
                            label: "Orders",
                            icon: OrdersMajor,
                            badge: "15",
                        },
                        {
                            url: "/path/to/place",
                            label: "Products",
                            icon: ProductsMajor,
                        },
                    ]}
                />
            </Navigation>
        </AppProvider>
    );
}

export default Example;

if (document.getElementById("root")) {
    ReactDOM.render(<Example />, document.getElementById("root"));
}
