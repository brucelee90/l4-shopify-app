import { Frame, Navigation } from "@shopify/polaris";

import React from "react";
import Routes from "./Routes";

export default function AppFrame() {
    const navigationMarkup = (
        <Navigation location={location.pathname}>
            <Navigation.Section
                items={[
                    {
                        url: "/",
                        label: "Home",
                        exactMatch: true,
                    },
                    {
                        url: "/settings",
                        label: "Settings",
                        exactMatch: true,
                    },
                ]}
            />
        </Navigation>
    );

    return (
        <Frame navigation={navigationMarkup}>
            <Routes />
        </Frame>
    );
}
