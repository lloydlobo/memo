import React from "react";

export default function TaskEditorFooter({
    onCancel,
}: {
    onCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
    return (
        <div className="task_editor__footer flex items-center">
            <div className="flex flex-1 items-center py-2">
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://doist.typeform.com/to/DdLvQgDl"
                    title="Editor feedback"
                    className="task_editor__feedback_link _6f59c771 c6a2474f _04f32a92 cc313af7 b7b3664a f64f71c8 flex gap-4"
                >
                    <div className="">
                        <svg width="24" height="24" aria-hidden="true">
                            <g fill="none" fillRule="evenodd">
                                <path
                                    fill="currentColor"
                                    d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
                                ></path>
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="7.5"
                                    stroke="currentColor"
                                ></circle>
                            </g>
                        </svg>
                    </div>
                    <div className="self-center">
                        <div className="task_editor__feedback_link__label ">
                            Editor feedback
                        </div>
                    </div>
                </a>
            </div>
            <div className="">
                <div
                    data-testid="task-editor-action-buttons"
                    className="grid grid-cols-2 items-center"
                >
                    <button
                        type="button"
                        aria-disabled="false"
                        className="btn btn-sm"
                        onClick={onCancel}
                    >
                        <span className="">Cancel</span>
                    </button>
                    <button
                        data-testid="task-editor-submit-button"
                        type="submit"
                        aria-disabled="false"
                        className="btn-primary btn btn-sm"
                    >
                        <span className="">Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
