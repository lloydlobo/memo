import React from "react";
import { ButtonKbdTooltip } from "../buttons/ButtonKbdTooltip";

// "btn-ghost tooltip tooltip-bottom btn-circle btn hidden items-center normal-case before:inline-flex before:py-2 before:pr-[3.9ch] before:pl-[1ch] before:text-xs before:leading-none before:content-['Open_Productivity'] after:ml-[6ch] after:mt-[1.1ch] after:flex after:kbd after:text-xs after:leading-none after:content-['O'] after:kbd-sm xl:grid"
export const AddTaskModal: React.FC<{}> = () => {
    const style = {
        primary: "btn-ghost btn-circle btn",
        tooltip:
            "btn-ghost text-center grid tooltip tooltip-bottom btn-circle btn normal-case before:inline-flex before:py-2 before:pr-[4.3ch] before:pl-[1ch] before:text-xs before:leading-none before:content-['Add_Task'] after:ml-[3.3ch] after:mt-[1.1ch] after:flex after:kbd after:text-xs after:leading-none after:content-['Q'] after:kbd-sm xl:grid",
    };
    return (
        <>
            {/* The button to open modal */}
            <div className="min-h-3 h-12 cursor-pointer leading-4">
                <ButtonKbdTooltip dataTip="Add Task" dataTipKbd="Q">
                    <label
                        htmlFor="my-modal-4"
                        className="cursor-pointer"
                        /* className={`${style.tooltip}`} */
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </label>
                </ButtonKbdTooltip>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                </label>
            </label>
        </>
    );
};
