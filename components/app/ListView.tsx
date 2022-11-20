import React from "react";

export default function ListView() {
    return (
        <div
            className="listbox pt-5 pl-4 pb-3 pr-0"
            /* aria-aria-multiselectable="true" */
            data-selection-empty
            tabIndex={-1}
        >
            <div className="listview" data-testid="project-list-view">
                <ul className="section_list px-12">
                    <li>
                        <section className="section">
                            <ul className="space-y-1 divide-y divide-base-content/10">
                                <li
                                    data-selection-id={"9876543210/1029384756"}
                                    aria-selected="false"
                                    id={"task-9876543210"}
                                    className="task_list_item task_list_item--with_subtasks task_list_item--project_hidden flex  "
                                    data-item-id={"9876543210"}
                                    data-item-indent={1}
                                    data-task-navigation-element={9876543210}
                                >
                                    <div
                                        role={"button"}
                                        tabIndex={0}
                                        data-action-hint="task-root"
                                        aria-labelledby={
                                            "task-1234567890-content"
                                        }
                                        className="flex "
                                    >
                                        <div className="task_list_item_overflow_actions btn-group-horizontal btn-group">
                                            <div className="drag-container"></div>
                                            <button
                                                type="button"
                                                aria-label="expand"
                                                aria-expanded="false"
                                                data-action-hint="task-toggle-collapse"
                                                className="arrow right btn-ghost btn btn-square"
                                            >
                                                <svg width="24" height="24">
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        d="M16 10l-4 4-4-4"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                role="checkbox"
                                                aria-hidden="false"
                                                aria-checked={false}
                                                aria-label="Mark task as complete"
                                                aria-describedby="task-9876543210-content"
                                                data-action-hint="task-complete"
                                                className="arrow right btn-ghost btn btn-square"
                                            >
                                                <div className="checkbox rounded-full">
                                                    <svg width="24" height="24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                        <button
                                            className="btn-ghost checkbox btn-square"
                                            type="button"
                                            role={"checkbox"}
                                            aria-hidden="false"
                                            aria-checked="false"
                                            aria-label="Mark task as completed"
                                            data-action-hint="task-complete"
                                        >
                                            <div className="task_checkbox__circle">
                                                <svg width="24" height="24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </button>

                                        {/* task_list_item_content */}
                                        <div className="hidden ">
                                            {/* task_list_item_content_wrapper */}
                                            <div className="flex flex-1">
                                                <div className="stat-title">
                                                    Lorem, ipsum dolor
                                                </div>
                                            </div>
                                            <div
                                                data-layout="list"
                                                className="btn-group-horizontal flex opacity-0 hover:opacity-100"
                                            >
                                                <button
                                                    type="button"
                                                    aria-label="Edit"
                                                    data-action-hint="task-edit"
                                                    className="btn-outline btn btn-square"
                                                    tabIndex={0}
                                                >
                                                    <svg width="24" height="24">
                                                        <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                                                            ></path>
                                                            <path
                                                                stroke="currentColor"
                                                                d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    data-action-hint="task-scheduler"
                                                    aria-label="Due date"
                                                    className="btn-outline btn btn-square"
                                                    tabIndex={0}
                                                >
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </button>
                                                <a
                                                    aria-label="Comment"
                                                    data-action-hint="task-comment"
                                                    href="/app/project/9876543210/task/1234567890?intent=reply"
                                                    tabIndex={0}
                                                    className="btn-ghost btn"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        data-svgs-path="sm1/comments.svg"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            fillRule="nonzero"
                                                            d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <button
                                                    type="button"
                                                    aria-expanded="false"
                                                    data-testid="more_menu"
                                                    data-action-hint="task-overflow-menu"
                                                    aria-label="More task actions"
                                                    className="btn-ghost btn btn-square"
                                                    tabIndex={0}
                                                >
                                                    <svg width="15" height="3">
                                                        <path
                                                            d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                                            fill="currentColor"
                                                            fillRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        defaultValue={"b"}
                                        className="input-ghost border-none bg-transparent"
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        defaultValue={"c"}
                                        className="input-ghost  border-none bg-transparent"
                                    />
                                </li>
                                <li className="controller actions card-actions ">
                                    <button
                                        type="button"
                                        data-add-task-navigation-element="true"
                                        className="btn mt-4"
                                    >
                                        <span className="icon_add">
                                            <svg width="13" height="13">
                                                <path
                                                    d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                        Add task
                                    </button>
                                </li>
                            </ul>
                        </section>
                        <button
                            className="btn-ghost btn opacity-5"
                            type="button"
                        >
                            ::before Add task ::after
                        </button>
                    </li>
                    <li>2. Unicode</li>
                    <li>3. Password</li>
                </ul>
            </div>
        </div>
    );
}
