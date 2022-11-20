import React, { useState } from "react";
import AppSidebar from "./app/AppSidebar";
import { HamburgerIcon } from "./icons";

export default function LayoutApp({
    children,
}: {
    children: any;
}): JSX.Element {
    const [toggleDrawer, setToggleDrawer] = useState(true);

    return (
        <>
            <div className={`flex`}>
                <AppSidebar
                    toggleDrawer={toggleDrawer}
                    setToggleDrawer={setToggleDrawer}
                    className="hidden"
                />
                <div
                    className={`w-full ${
                        toggleDrawer ? "col-span-4" : "col-span-5"
                    }`}
                >
                    {/*     <!-- Page content here --> */}
                    {children}
                </div>
            </div>
        </>
    );
}
