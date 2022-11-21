import React, { useState } from "react";
import TaskContent from "./TaskContent";
import { TaskEditor } from "./TaskEditor";
import { TaskData } from "../../interfaces";

export default function ListTaskItem({
    task,
    onTaskHover,
}: {
    task: TaskData;
    onTaskHover: boolean;
}) {
    const [editTask, setEditTask] = useState(true);

    return (
        <>
            <div
                data-selection-id={"9876543210/1029384756"}
                aria-selected="false"
                id={"task-9876543210"}
                data-item-id={"9876543210"}
                data-item-indent={1}
                data-task-navigation-element={9876543210}
                className="task_list_item task_list_item--with_subtasks task_list_item--project_hiddenw-full"
            >
                {editTask ? (
                    <TaskContent
                        task={task}
                        onEditClick={() => setEditTask(!editTask)}
                        onTaskHover={onTaskHover}
                    />
                ) : (
                    <TaskEditor
                        task={task}
                        onTaskHover={onTaskHover}
                        onCancel={() => setEditTask(!editTask)}
                    />
                )}
            </div>
        </>
    );
}
