import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SelectSort } from "../../components/app/tasks/SelectSort";
import Layout from "../../components/Layout";
import { TaskData, UserData } from "../../interfaces";
import { getFakeTasks } from "../../lib/local/getFakeTasks";

export type Funcs = {
    handleSortCategoryAscendingClick: () => void;
    handleSortIdAscendingClick: () => void;
    handleSortCompletedClickAscending: () => void;
    handleSortCompletedClickDescending: () => void;
};
// Array-mutating methods should not be used misleadingly (typescript:S4043)
// https://bobbyhadz.com/blog/react-sort-array-of-objects
export default function AllTasks({
    tasks,
}: {
    tasks: TaskData[];
}): JSX.Element {
    const [tasksData, setTasksData] = useState(tasks);
    const [completed, setCompleted] = useState<null | UserData["uuid"]>(null);
    let sortedTasks: TaskData[] = [];

    const handleSortCompletedClickAscending = (): void => {
        const tasksCopy = [...tasksData];
        sortedTasks = sortTasksAscending(tasksCopy);
        setTasksData(tasksCopy);
    };

    const handleSortCompletedClickDescending = (): void => {
        const tasksCopy = [...tasksData];
        sortedTasks = sortTasksDescending(tasksCopy);
        setTasksData(tasksCopy);
    };

    const handleSortIdAscendingClick = (): void => {
        const tasksCopy = [...tasksData];
        tasksCopy.sort((a, b) => a.id - b.id);
        setTasksData(tasksCopy);
    };

    // 👇️ sort by task category property ASCENDING (A - Z)
    // Array-mutating methods should not be used misleadingly (typescript:S4043
    const handleSortCategoryAscendingClick = () => {
        const tasksCopy = [...tasksData];
        tasksCopy.sort((a, b) =>
            a.category.toLowerCase() > b.category ? 1 : -1
        );
        setTasksData(tasksCopy);
    };

    const funcs = {
        handleSortCategoryAscendingClick,
        handleSortIdAscendingClick,
        handleSortCompletedClickAscending,
        handleSortCompletedClickDescending,
    };

    const handleChange = (uuid: TaskData["uuid"]) => {
        const selectedTask = tasksData.filter((task) => task.uuid === uuid)[0];

        setTasksData((prev) =>
            tasksData.map((task) => {
                if (task.uuid === uuid) {
                    if (!task.completed) toastInfoCompleted(selectedTask);
                    return { ...task, completed: !task.completed };
                } else return task;
            })
        );
    };

    return (
        <>
            <Layout title="All tasks">
                <div className="container my-6 grid place-content-center">
                    <div className="z-30">
                        <SelectSort funcs={funcs} />
                    </div>
                    <div className="grid">
                        {tasksData.length ? (
                            <ul className="card grid gap-2">
                                {tasksData.map((task, index) => {
                                    // TODO: Sort tasks by priority and completed order.
                                    return (
                                        <li
                                            key={`${index}-${task.uuid}`}
                                            className={`${
                                                task.completed
                                                    ? "opacity-50"
                                                    : "opacity-100"
                                            } rounded-lg bg-base-300 px-6 pt-4 text-accent shadow-md`}
                                        >
                                            <div className="grid grid-flow-col items-center">
                                                <div className="card-actions">
                                                    <input
                                                        type="checkbox"
                                                        placeholder="done"
                                                        className="checkbox-accent checkbox"
                                                        defaultChecked={
                                                            task.completed
                                                        }
                                                        onChange={() =>
                                                            handleChange(
                                                                task.uuid
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="prose">
                                                    <h3 className="text-lg">
                                                        {task.name}
                                                    </h3>
                                                    <div className="grid grid-flow-col items-center">
                                                        <div className="badge">
                                                            {task.category}
                                                        </div>
                                                        <div className="hidden hover:flex">
                                                            <p className="badge-ghost text-xs">
                                                                {task.uuid}
                                                            </p>
                                                            <p className="badge-ghost">
                                                                {task.id}
                                                            </p>
                                                        </div>
                                                        <div className="">
                                                            {task.completed ? (
                                                                <span className="badge-success badge uppercase">
                                                                    done
                                                                </span>
                                                            ) : (
                                                                <span className="badge-info badge uppercase">
                                                                    todo
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="badge-ghost badge w-[12ch] text-clip">
                                                            <span className="text-center">
                                                                {task.dueDate
                                                                    .substring(
                                                                        0,
                                                                        10
                                                                    )
                                                                    .trim()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <p className="">
                                                            {task.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p className="text-warning">No users found</p>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}

// getStaticProps is used to fetch data from the server.
//
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    const tasks: TaskData[] = await getFakeTasks(100);
    console.log(tasks);

    return {
        props: {
            tasks,
        },
    };
}

/**
 * toastInfoCompleted is used to show toast when user completes a task.
 * @param {TaskData} task
 * @returns {void}
 */
function toastInfoCompleted(task: TaskData) {
    toast.info(`Selected ${task.name.toString()}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
    });
}

function taskIsCompleted(a: TaskData): number {
    return a.completed ? 1 : -1;
}

function sortTasksAscending(tasksData: TaskData[]): TaskData[] {
    return tasksData.sort((a, b) =>
        a.completed === b.completed ? 0 : taskIsCompleted(a)
    );
}

function sortTasksDescending(tasksData: TaskData[]): TaskData[] {
    return tasksData.sort((a, b) =>
        a.completed === b.completed ? 0 : -1 * taskIsCompleted(a)
    );
}
