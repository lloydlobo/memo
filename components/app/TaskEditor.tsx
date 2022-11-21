import React from "react";
import TaskEditorArea from "./TaskEditorArea";
import TaskEditorFooter from "./TaskEditorFooter";

export function TaskEditor({
    onCancel,
    onTaskHover,
}: {
    onCancel: any;
    onTaskHover: boolean;
}) {
    return (
        <>
            <form action="" className="task-editor">
                <TaskEditorArea />
                <TaskEditorFooter onCancel={onCancel} />
                {/* <TaskEditorFooter onCancel={() => {}} onSave={() => {}} /> */}
            </form>
        </>
    );
}
