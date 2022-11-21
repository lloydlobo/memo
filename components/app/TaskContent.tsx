import React from "react";
import { TaskData } from "../../interfaces";
import { CheckCircleIcon } from "../icons";
import TaskContentActions from "./TaskContentActions";
import TaskListOverflowActions from "./TaskListOverflowActions";

export default function TaskContent({
    task,
    onEditClick,
    onTaskHover,
}: {
    task: TaskData;
    onEditClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onTaskHover: any;
}) {
    return (
        <>
            <div
                role={"button"}
                tabIndex={0}
                data-action-hint="task-root"
                aria-labelledby={"task-1234567890-content"}
                className="flex gap-2"
            >
                <TaskListOverflowActions onTaskHover={onTaskHover} />

                <button
                    type="button"
                    role="checkbox"
                    aria-hidden="false"
                    aria-checked={false}
                    aria-label="Mark task as complete"
                    aria-describedby="task-9876543210-content"
                    data-action-hint="task-complete"
                    className="arrow right btn-ghost btn btn-sm btn-square"
                >
                    <CheckCircleIcon className="checkbox h-6 w-6" />
                </button>

                {/* task_list_item_content */}
                <div
                    className="grid w-full content-between gap-4"
                    style={{ gridTemplateColumns: "1fr auto" }}
                >
                    {/* task_list_item_content_wrapper */}
                    <div className="mr-auto flex w-full flex-1">
                        <div className="flex items-center text-sm">
                            {task.name}
                        </div>
                    </div>

                    <TaskContentActions
                        onEditClick={onEditClick}
                        onTaskHover={onTaskHover}
                    />
                </div>
            </div>
        </>
    );
}
