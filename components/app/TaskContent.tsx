import React from "react";
import { TaskData } from "../../interfaces";
import { CheckCircleIcon, ListBulletIcon } from "../icons";
import TaskContentActions from "./TaskContentActions";
import TaskListOverflowActions from "./TaskListOverflowActions";

export default function TaskContent({
    task,
    onEditClick,
    onTaskHover,
    className,
    index,
    editIndex,
}: {
    task: TaskData;
    onEditClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onTaskHover: any;
    className: string;
    index: number;
    editIndex: number | null;
}) {
    return (
        <>
            <div
                role={"button"}
                tabIndex={0}
                data-action-hint="task-root"
                aria-labelledby={"task-1234567890-content"}
                className={`flex gap-2 ${className}`}
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
                    className="grid w-full content-between gap-4 pb-2"
                    style={{ gridTemplateColumns: "1fr auto" }}
                >
                    {/* task_list_item_content_wrapper */}
                    <div className="mr-auto flex  w-full flex-1 flex-col">
                        <div className="flex items-center">{task.name}</div>
                        <div
                            className="task-list-item info-tags translate-y relative flex items-center text-xs opacity-60"
                            data-layout="list"
                        >
                            <a
                                href="/app/project/5876543210/task/9876543210"
                                className="subtasks btn-ghost btn btn-xs my-0 ml-0 flex items-center gap-0.5 py-0 pl-0 hover:btn-outline"
                            >
                                <ListBulletIcon className=" h-4 w-4 " />
                                <span className="subtasks-quantity text-xs ">
                                    <span>1</span>
                                    <span>/</span>
                                    <span>2</span>
                                </span>
                            </a>
                            <div className="due-date">{task.dueDate}</div>
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
