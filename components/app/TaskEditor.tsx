import React from "react";
import { TaskData } from "../../interfaces";
import TaskEditorArea from "./TaskEditorArea";
import TaskEditorFooter from "./TaskEditorFooter";

export function TaskEditor({
    task,
    onCancel,
    onTaskHover,
}: {
    task: TaskData;
    onCancel: any;
    onTaskHover: boolean;
}) {
    return (
        <>
            <form action="" className="task-editor">
                <TaskEditorArea task={task} />
                <TaskEditorFooter onCancel={onCancel} />
                {/* <TaskEditorFooter onCancel={() => {}} onSave={() => {}} /> */}
            </form>
        </>
    );
}
