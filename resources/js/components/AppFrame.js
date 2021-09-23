import { Frame, Navigation, TopBar } from "@shopify/polaris";

import React from "react";
import Routes from "./Routes";
import { useLocation } from "react-router-dom";

function AppFrame() {
    const location = useLocation();

    // Track the open state of the mobile navigation
    const [mobileNavigationActive, setMobileNavigationActive] =
        React.useState(false);
    const toggleMobileNavigationActive = React.useCallback(
        () =>
            setMobileNavigationActive(
                (mobileNavigationActive) => !mobileNavigationActive
            ),
        []
    );

    return (
        <Frame
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}
            topBar={
                <TopBar
                    showNavigationToggle
                    onNavigationToggle={toggleMobileNavigationActive}
                />
            }
            navigation={
                <Navigation location={location.pathname}>
                    <Navigation.Section
                        items={[
                            {
                                url: "/dashboard",
                                label: "Dashboard",
                            },
                            {
                                url: "/products",
                                label: "Products",
                            },
                            {
                                url: "/settings",
                                label: "Settings",
                            },
                        ]}
                    />
                    {location.pathname}
                </Navigation>
            }
        >
            <Routes />
        </Frame>
    );
}

export default AppFrame;
