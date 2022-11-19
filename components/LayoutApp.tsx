import React, { useState } from "react";
import { HamburgerIcon } from "./icons";

export default function LayoutApp({
    children,
}: {
    children: any;
}): JSX.Element {
    const [toggleDrawer, setToggleDrawer] = useState(true);

    return (
        <div className={`grid w-full grid-cols-5`}>
            {toggleDrawer ? (
                <div className="">
                    <button
                        onClick={() => setToggleDrawer(!toggleDrawer)}
                        className="absolute top-12 left-5 z-50 mt-4"
                    >
                        <HamburgerIcon className="h-auto w-5" />
                    </button>
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu min-h-screen w-auto bg-base-100 p-4 text-base-content">
                        {/*       <!-- Sidebar content here --> */}
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            ) : null}

            <div className={`${toggleDrawer ? "col-span-4" : "col-span-5"}`}>
                {/*     <!-- Page content here --> */}
                {children}

                <button
                    onClick={() => setToggleDrawer(!toggleDrawer)}
                    className="absolute top-12 left-5 z-50 mt-4"
                >
                    <HamburgerIcon className="h-auto w-5" />
                </button>
            </div>
        </div>
    );
}
