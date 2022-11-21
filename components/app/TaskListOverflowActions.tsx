import React from "react";

export default function TaskListOverflowActions() {
    return (
        <div className="task_list_item_overflow_actions grid grid-cols-2 ">
            <div className="drag-container btn-ghost btn  btn-sm btn-square opacity-10 hover:opacity-100 ">
                <span
                    className="task_list_item__drag_handle item_dnd_handle "
                    data-testid="task_list_item__drag_handle"
                >
                    <svg width="24" height="24">
                        <path
                            fill="currentColor"
                            d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
                            data-darkreader-inline-fill=""
                        ></path>
                    </svg>
                </span>
            </div>

            <button
                type="button"
                aria-label="expand"
                aria-expanded="false"
                data-action-hint="task-toggle-collapse"
                className="arrow right btn-ghost btn btn-sm btn-square opacity-10 hover:opacity-100"
            >
                <svg width="24" height="24">
                    <path
                        fill="none"
                        stroke="currentColor"
                        d="M16 10l-4 4-4-4"
                    ></path>
                </svg>
            </button>
        </div>
    );
}
