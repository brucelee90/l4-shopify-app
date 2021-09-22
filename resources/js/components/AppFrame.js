import { Frame, Navigation, TopBar } from "@shopify/polaris";

import React from "react";
import Routes from "./app_components/Routes";
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
                                url: "/",
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
                </Navigation>
            }
        >
            <Routes />
        </Frame>
    );
}

export default AppFrame;
