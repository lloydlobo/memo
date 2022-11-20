import React from "react";
import { ButtonKbdTooltip } from "../buttons/ButtonKbdTooltip";

// "btn-ghost tooltip tooltip-bottom btn-circle btn hidden items-center normal-case before:inline-flex before:py-2 before:pr-[3.9ch] before:pl-[1ch] before:text-xs before:leading-none before:content-['Open_Productivity'] after:ml-[6ch] after:mt-[1.1ch] after:flex after:kbd after:text-xs after:leading-none after:content-['O'] after:kbd-sm xl:grid"
export const AddTaskModal: React.FC<{}> = () => {
    return (
        <>
            {/* The button to open modal */}
            <ButtonKbdTooltip dataTip="Add Task" dataTipKbd="Q">
                <label
                    htmlFor="my-modal-4"
                    className="w-full cursor-pointer rounded-md p-3 "
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

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label
                htmlFor="my-modal-4"
                className="modal cursor-pointer flex-col"
            >
                {/* PERF: remove modal-box to bypass overflow-y */}
                <label
                    className="4xl:modal-box card absolute top-[12vh] mx-2 bg-base-300 sm:mx-0"
                    htmlFor=""
                >
                    <div className="card-body grid px-4 shadow-none sm:px-8">
                        <form
                            action="submit"
                            className="form-control w-full gap-4 "
                        >
                            <div className="grid">
                                <div className="input-group-vertical">
                                    <input
                                        placeholder="Task name"
                                        type="text"
                                        className="input-ghost input-sm w-full appearance-none border-none bg-transparent font-bold"
                                    />
                                    <input
                                        placeholder="Description"
                                        type="text"
                                        className="input-ghost input-sm w-full appearance-none border-none bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="actions flex w-full items-center">
                                <div className="primary-actions mr-auto flex-1">
                                    <div title="due-date" className="dropdown">
                                        <label
                                            tabIndex={0}
                                            className="btn-outline btn btn-sm m-1 gap-2 text-xs"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                                ></path>
                                            </svg>
                                            Due Date
                                        </label>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                                        >
                                            <li>
                                                <a>Item 1</a>
                                            </li>
                                            <li>
                                                <a>Item 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div title="projects" className="dropdown">
                                        <label
                                            tabIndex={0}
                                            className="btn-outline btn btn-sm m-1 gap-2 text-xs"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="inline-block h-6 w-6 stroke-current text-primary"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                                ></path>
                                            </svg>
                                            Inbox
                                        </label>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                                        >
                                            <li>
                                                <a>Item 1</a>
                                            </li>
                                            <li>
                                                <a>Item 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="secondary-actions ml-auto">
                                    <div className="flex gap-6">
                                        <a>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                className="fill-current"
                                            >
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                            </svg>
                                        </a>
                                        <a>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                className="fill-current"
                                            >
                                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                            </svg>
                                        </a>
                                        <a>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                className="fill-current"
                                            >
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div
                                    title="editor-feedback"
                                    className="link-hover flex flex-1 cursor-pointer items-center"
                                >
                                    <div className="stat-figure text-secondary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-6 w-8 stroke-current"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Editor feedback
                                </div>

                                <div className="btn-group-horizontal z-50 flex space-x-2">
                                    <button
                                        type="button"
                                        className=" btn-ghost btn bg-base-100 text-sm brightness-110"
                                    >
                                        Cancel
                                    </button>
                                    <div
                                        title="before-wrapper"
                                        className="relative"
                                    >
                                        <span
                                            title="before-cursor-disabled"
                                            className="absolute -inset-1  cursor-not-allowed"
                                        ></span>
                                        <input
                                            className="btn-primary btn-disabled btn"
                                            type="submit"
                                            value={"Add task"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <progress className="progress relative h-0.5 w-[94%] place-self-center bg-gradient-to-tr from-primary via-secondary to-accent mix-blend-darken blur-sm"></progress>
                </label>
            </label>
        </>
    );
};
