import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { TaskData } from "../../interfaces";
import ListTaskItem from "./ListTaskItem";

/**
 * How to toggle in a map function in React?
 * https://stackoverflow.com/a/71926750
 */
export default function ListView({ tasks }: { tasks: TaskData[] }) {
    const taskRef = useRef(null);

    const [hoverTask, setHoverTask] = useState(true);
    useEffect(() => {
        const taskDiv = taskRef.current as unknown as HTMLDivElement;
        if (taskDiv && typeof taskDiv != null) {
            console.log(taskDiv);
        } else {
            toast.error("RefErr: Could not find task");
        }
    }, [taskRef]);

    return (
        <div
            className="listbox pt-5 pl-4 pb-3 pr-0"
            /* aria-aria-multiselectable="true" */
            data-selection-empty
            tabIndex={-1}
        >
            <div className="listview" data-testid="project-list-view">
                <ul className="section_list px-12">
                    <li className="rounded-md p-2 shadow-sm">
                        {tasks.length ? (
                            <section className="section">
                                <ul className="items space-y-1 divide-y divide-base-content/10">
                                    {tasks.map((task, index) => (
                                        <li className="" key={index}>
                                            <div className=" " ref={taskRef}>
                                                <ListTaskItem
                                                    task={task}
                                                    index={index}
                                                    onTaskHover={hoverTask}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ) : (
                            <>
                                <div className="empty-state">
                                    <div className="empty-state-icon">
                                        {/* prettier-ignore */}
                                        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 01-2 2H5 2 a2 2 0 01-2-2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line x1="12" y1="15" x2="12" y2="3" />
                                            </svg>
                                    </div>
                                    <div className="empty-state-title">
                                        No Tasks
                                    </div>
                                </div>
                            </>
                        )}

                        <button
                            className="btn-ghost btn opacity-5"
                            type="button"
                        >
                            {/* ::before */}
                            Add task
                            {/* ::after */}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
