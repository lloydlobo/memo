import React, { useState } from "react";
import TaskContent from "./TaskContent";
import { TaskEditor } from "./TaskEditor";

export default function ListView() {
    const [editTask, setEditTask] = useState(true);
    return (
        <div
            className="listbox pt-5 pl-4 pb-3 pr-0"
            /* aria-aria-multiselectable="true" */
            data-selection-empty
            tabIndex={-1}
        >
            <div className="listview" data-testid="project-list-view">
                <ul className="section_list px-12">
                    <li>
                        <section className="section">
                            <ul className="items space-y-1 divide-y divide-base-content/10">
                                <li
                                    data-selection-id={"9876543210/1029384756"}
                                    aria-selected="false"
                                    id={"task-9876543210"}
                                    className="task_list_item task_list_item--with_subtasks task_list_item--project_hidden flex w-full"
                                    data-item-id={"9876543210"}
                                    data-item-indent={1}
                                    data-task-navigation-element={9876543210}
                                >
                                    {editTask ? (
                                        <TaskContent
                                            onEdit={() =>
                                                setEditTask(!editTask)
                                            }
                                        />
                                    ) : (
                                        <TaskEditor
                                            onCancel={() =>
                                                setEditTask(!editTask)
                                            }
                                        />
                                    )}
                                </li>
                            </ul>
                        </section>

                        <button
                            className="btn-ghost btn opacity-5"
                            type="button"
                        >
                            ::before Add task ::after
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
