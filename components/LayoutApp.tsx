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
            <div className={`sm:grid sm:grid-cols-7`}>
                <div
                    className={`${
                        toggleDrawer ? "col-span-2" : "absolute"
                    } bg-base-300`}
                >
                    <AppSidebar
                        toggleDrawer={toggleDrawer}
                        setToggleDrawer={setToggleDrawer}
                        className="fixed z-10 w-[50vw] bg-base-300 drop-shadow-sm sm:w-fit"
                    />
                </div>
                <div
                    className={` ${
                        toggleDrawer
                            ? "col-start-1 sm:col-span-full sm:col-start-3"
                            : "sm:col-span-full sm:px-32"
                    }`}
                >
                    {children} {/*     <!-- Page content here --> */}
                </div>
            </div>
        </>
    );
}
