import React from "react";
import { TaskData } from "../../interfaces";
import TaskEditorArea from "./TaskEditorArea";
import TaskEditorFooter from "./TaskEditorFooter";

export function TaskEditor({
    task,
    onCancel,
    index,
    onTaskHover,
    className,
    editIndex,
}: {
    task: TaskData;
    onCancel: any;
    index: number;
    onTaskHover: boolean;
    className: string;
    editIndex: number | null;
}) {
    return (
        <>
            <form
                action=""
                // className="task-editor"
                id="taskEditor"
                className={className}
            >
                <TaskEditorArea
                    index={index}
                    task={task}
                    editIndex={editIndex}
                />
                <TaskEditorFooter onCancel={onCancel} />
                {/* <TaskEditorFooter onCancel={() => {}} onSave={() => {}} /> */}
            </form>
        </>
    );
}
