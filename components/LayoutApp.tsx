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
            <div className={`flex sm:grid sm:grid-cols-7`}>
                <AppSidebar
                    toggleDrawer={toggleDrawer}
                    setToggleDrawer={setToggleDrawer}
                    className="absolute z-10 bg-base-200 drop-shadow-sm sm:col-span-1 sm:col-end-2 sm:shadow-none "
                />
                <div
                    className={`-z-10 ${
                        toggleDrawer
                            ? "sm:col-span-full sm:col-start-2"
                            : "sm:col-span-full"
                    }`}
                >
                    {/*     <!-- Page content here --> */}
                    {children}
                </div>
            </div>
        </>
    );
}
