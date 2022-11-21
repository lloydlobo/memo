import React from "react";

export default function TaskListOverflowActions({
    onTaskHover,
}: {
    onTaskHover: boolean;
}) {
    return (
        <div
            className={`task_list_item_overflow_actions flex ${
                onTaskHover ? "opacity-100" : "opacity-5"
            }`}
        >
            <div className="drag-container btn-ghost btn btn-xs btn-square hover:btn-outline">
                <span
                    className="task_list_item__drag_handle item_dnd_handle h-5 w-5 "
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
                className="arrow right btn-ghost btn btn-xs btn-square hover:btn-outline"
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
