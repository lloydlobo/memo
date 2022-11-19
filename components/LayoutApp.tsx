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
            <div className={`grid w-full grid-cols-5`}>
                <AppSidebar
                    toggleDrawer={toggleDrawer}
                    setToggleDrawer={setToggleDrawer}
                    className={`bg-base-300/70 ${
                        toggleDrawer ? "left-0 " : "absolute -left-48 "
                    }`}
                />
                <div className="absolute top-1 left-1 h-full ">
                    <div className="sticky top-1 z-50">
                        <button
                            onClick={() => setToggleDrawer(!toggleDrawer)}
                            className="btn-ghost btn backdrop-blur-sm "
                        >
                            <HamburgerIcon className="h-5 w-5 opacity-80" />
                        </button>
                    </div>
                </div>

                <div
                    className={`${
                        toggleDrawer ? "col-span-4" : "col-span-full"
                    }`}
                >
                    {/*     <!-- Page content here --> */}
                    {children}
                </div>
            </div>
        </>
    );
}
