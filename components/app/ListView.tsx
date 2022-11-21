import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ListTaskItem from "./ListTaskItem";

export default function ListView() {
    const taskRef = useRef(null);
    const [hoverTask, setHoverTask] = useState(true);

    useEffect(() => {
        const task = taskRef.current as unknown as HTMLDivElement;

        if (task && typeof task != null) {
            task.addEventListener("mouseenter", () => {
                setHoverTask(!hoverTask);
            });
            task.addEventListener("mouseout", () => {
                setHoverTask(hoverTask ? !hoverTask : hoverTask);
            });
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
                    <li className="rounded-md bg-black/30 p-2 shadow-sm">
                        <section className="section">
                            <ul className="items space-y-1 divide-y divide-base-content/10">
                                <li className="" ref={taskRef}>
                                    <ListTaskItem onTaskHover={hoverTask} />
                                </li>
                            </ul>
                        </section>

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
