import React, { useEffect, useRef, useState } from "react";

// Pseudo-elements: Before and after.
// Use without :before and :after with inset and absolute.
// https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after
// It's worth noting that you don't really need ::before and ::after pseudo-elements for most things in Tailwind projects — it's usually simpler to just use a real HTML element.
// Save before and after for situations where it's important that the content of the pseudo-element is not actually in the DOM and can't be selected by the user.

/**
 * ButtonKbdTooltip component has a tooltip bottom,
 * and shows the description and keyboard (kbd) shortcut for it.
 *
 * @returns {JSX.Element}
 */
// PERF: Can use {Component, props:{....}}
export const ButtonKbdTooltip: React.FC<{}> = ({
    children,
    dataTip,
    dataTipKbd,
}: any): JSX.Element => {
    const refButton = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);

    // Update the needed DOM events.
    const showTooltipOnHover = () => {
        setShowTooltip(!showTooltip);
    };
    const hideTooltipOnHover = () => {
        setShowTooltip(showTooltip ? !showTooltip : showTooltip);
    };
    useEffect(() => {
        // Attach event listener to DOM ref.
        if (refButton && refButton.current) {
            const btn = refButton.current as HTMLButtonElement;
            btn.addEventListener("mouseover", showTooltipOnHover);
            btn.addEventListener("mouseout", hideTooltipOnHover);
        }
    }, []);

    return (
        <div className="grid">
            <div className="place-self-center pt-4 pb-16">
                <span className="relative mb-4 grid bg-base-300">
                    <button
                        ref={refButton}
                        className="btn-ghost btn z-10 grid w-fit"
                    >
                        {children}
                    </button>
                    {showTooltip ? (
                        <span
                            aria-hidden="true"
                            className="absolute -inset-1 -z-10 w-full origin-center -translate-x-1/2 pt-16"
                        >
                            <span className=" btn-ghost btn grid w-max grid-flow-col items-center gap-3 place-self-center rounded-md bg-base-300 py-1 px-3 text-center normal-case">
                                {dataTip}
                                <span className="kbd btn-square btn-sm">
                                    {dataTipKbd}
                                </span>
                            </span>
                        </span>
                    ) : (
                        ""
                    )}
                </span>
            </div>
        </div>
    );
};
