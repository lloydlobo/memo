import React, { useState } from "react";
import TaskContent from "./TaskContent";
import { TaskEditor } from "./TaskEditor";
import { TaskData } from "../../interfaces";
import { toast } from "react-toastify";

export default function ListTaskItem({
    task,
    index,
    onTaskHover,
}: {
    task: TaskData;
    index: any;
    onTaskHover: boolean;
}) {
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const clickHandler = (index: null | any) => {
        console.log({ index });
        setEditIndex((prev) => (prev === index ? null : index));
        console.log(`Task ${task.name} is being edited of index ${index}`);
    };

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
                <>
                    <TaskContent
                        key={`${task.id}-${task.uuid}-task-content-${index}`}
                        index={index}
                        task={task}
                        onEditClick={() => clickHandler(index)}
                        editIndex={editIndex}
                        onTaskHover={onTaskHover}
                        className={editIndex === index ? "hidden" : ""}
                    />
                    <TaskEditor
                        key={`${task.id}-${task.uuid}-task-editor-${index}`}
                        task={task}
                        index={index}
                        editIndex={editIndex}
                        onTaskHover={onTaskHover}
                        onCancel={() => clickHandler(index)}
                        className={editIndex === index ? "" : "hidden"}
                    />
                </>
            </div>
        </>
    );
}
