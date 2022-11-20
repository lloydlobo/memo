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
            <div className={`grid grid-cols-5`}>
                <AppSidebar
                    toggleDrawer={toggleDrawer}
                    setToggleDrawer={setToggleDrawer}
                    className="col-span-1 col-end-2"
                />
                <div
                    className={`${
                        toggleDrawer ? "col-span-4 col-start-2" : "col-span-5"
                    }`}
                >
                    {/*     <!-- Page content here --> */}
                    {children}
                </div>
            </div>
        </>
    );
}
