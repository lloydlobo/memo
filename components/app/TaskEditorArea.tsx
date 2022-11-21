import React from "react";
import { TaskData } from "../../interfaces";

export default function TaskEditorArea({ task }: { task: TaskData }) {
    return (
        <div>
            <div className="editing-area rounded-lg border border-base-content border-opacity-20 px-4 py-4">
                <div className="input-fields">
                    <div className="content-fields no-focus-marker">
                        <div className="">
                            <div className="markdown-content no-focus-marker">
                                <div
                                    contentEditable="true"
                                    translate="no"
                                    data-typist-editor="true"
                                    data-rich-text="true"
                                    role={"textbox"}
                                    aria-readonly="false"
                                    aria-multiline="true"
                                    aria-label="Task name"
                                    className="ProseMirror "
                                    tabIndex={0}
                                >
                                    <p className="flex flex-wrap items-center gap-1">
                                        <span
                                            data-math-id=""
                                            className="badge"
                                            data-testid="natural-language-match"
                                        >
                                            @Evening
                                        </span>
                                        <span
                                            data-math-id=""
                                            className="badge"
                                            data-testid="natural-language-match"
                                        >
                                            @Important
                                        </span>
                                        {task.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="markdown-content description-field no-focus-marker m-0 p-0">
                                <div
                                    contentEditable="true"
                                    translate="no"
                                    data-typist-editor="true"
                                    data-rich-text="true"
                                    role={"textbox"}
                                    aria-readonly="false"
                                    aria-multiline="true"
                                    aria-label="Description"
                                    className="ProseMirror"
                                    tabIndex={0}
                                >
                                    <p
                                        data-placeholder="Description"
                                        className="is-empty is-editor-empty px-0.5 py-2 text-sm opacity-60"
                                    >
                                        {/* ::before */}
                                        <br className="ProseMirror-trailingBreak hidden break-inside-auto text-xs " />
                                        {task.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-editor extra-fields flex w-full items-center">
                    <div className="pills flex flex-1 items-center gap-2">
                        <button
                            className="item-due-selector icon-pill btn-outline btn btn-xs flex items-center  gap-1"
                            type="button"
                            aria-expanded="false"
                        >
                            <div className="calendar-icon date-overdue flex items-center gap-1">
                                <svg
                                    data-svgs-path="sm1/calendar_small.svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    className="flex gap-1"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="nonzero"
                                        d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
                                    ></path>
                                </svg>
                            </div>
                            <span className="date date-overdue flex items-center">
                                8 Feb
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="recurring-icon"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M2.784 4.589l.07.057 1.5 1.5a.5.5 0 01-.638.765l-.07-.057L3 6.207V7a2 2 0 001.85 1.995L5 9h2.5a.5.5 0 01.09.992L7.5 10H5a3 3 0 01-2.995-2.824L2 7v-.793l-.646.647a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 1.5-1.5a.5.5 0 01.638-.057zM7 2a3 3 0 013 3v.792l.646-.646a.5.5 0 01.765.638l-.057.07-1.5 1.5a.5.5 0 01-.638.057l-.07-.057-1.5-1.5a.5.5 0 01.638-.765l.07.057.646.646V5a2 2 0 00-1.85-1.995L7 3H4.5a.5.5 0 010-1z"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                        <button
                            type="button"
                            aria-label="Select a project"
                            aria-owns="dropdown-select-105-popup"
                            aria-controls="dropdown-select-105-pop"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            className="icon-pill project projectSectionPill--container btn-outline btn btn-xs flex"
                            tabIndex={0}
                        >
                            <div className="projectSectionPill flex items-center">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    className="project_icon projectSectionPill--icon flex items-center"
                                    style={{ color: "rgb(184, 37, 111)" }}
                                >
                                    <circle
                                        cx="8"
                                        cy="8"
                                        r="3.5"
                                        fill="currentColor"
                                    ></circle>
                                </svg>
                                <div className="text flex items-center text-[8px]">
                                    <span className="sectionSeperator">/</span>
                                    <div className="text">
                                        <div className="simple-content ">
                                            COURSES
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div
                        className="item-actions flex "
                        data-item-actions-root
                        data-item-content="45 minutes sprint of project A"
                        data-item-project-id="983423423423"
                    >
                        <button
                            type="button"
                            aria-label="Add label(s)"
                            data-action-hint="task-actions-add-labels"
                            aria-owns="dropdown-select-106-popup"
                            aria-controls="dropdown-select-106-popup"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            className="item_action"
                            tabIndex={0}
                        >
                            <span>
                                <svg
                                    data-svgs-path="sm1/label_outline.svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="nonzero"
                                        d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                        <button
                            type="button"
                            aria-label="Set the priority"
                            data-priority="4"
                            aria-owns="dropdown-select-108-popup"
                            aria-controls="dropdown-select-108-popup"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            className="item_action item_actions_priority"
                            tabIndex={0}
                        >
                            <span data-action-hint="task-actions-priority-picker">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="Gw1i-E3"
                                    data-icon-name="priority-icon"
                                    data-priority="1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                        <button
                            type="button"
                            aria-label="Add reminder(s)"
                            data-action-hint="task-actions-reminders"
                            className="item_action item_action__reminders"
                            tabIndex={0}
                        >
                            <span>
                                <svg
                                    data-svgs-path="sm1/reminder.svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="nonzero"
                                        d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
