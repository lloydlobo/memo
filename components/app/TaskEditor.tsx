import React from "react";
import TaskEditorArea from "./TaskEditorArea";
import TaskEditorFooter from "./TaskEditorFooter";

export function TaskEditor({ onCancel }: { onCancel: any }) {
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
