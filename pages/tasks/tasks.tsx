import React, { useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import { TaskData, UserData } from "../../interfaces";
import { getFakeTasks } from "../../lib/local/getFakeTasks";

const toastInfoCompleted = (task: TaskData) => {
    toast.info(`Selected ${task.name.toString()}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
    });
};

export default function AllTasks({
    tasks,
}: {
    tasks: TaskData[];
}): JSX.Element {
    const [tasksData, setTasksData] = useState(tasks);
    const [completed, setCompleted] = useState<null | UserData["uuid"]>(null);

    const handleChange = (uuid: TaskData["uuid"]) => {
        const selectedTask = tasksData.filter((task) => task.uuid === uuid)[0];
        setTasksData((prev) => {
            return tasksData.map((task) => {
                if (task.uuid === uuid) {
                    if (!task.completed) {
                        toastInfoCompleted(selectedTask);
                    }
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        });
    };

    return (
        <>
            <Layout title="All tasks">
                <div className="container my-6 grid place-content-center">
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
                                        } card-body rounded-lg bg-base-300 text-accent shadow-md`}
                                    >
                                        <div className="grid grid-flow-col items-center gap-2">
                                            <div className="card-actions">
                                                <input
                                                    type="checkbox"
                                                    placeholder="done"
                                                    className="checkbox-accent checkbox"
                                                    defaultChecked={
                                                        task.completed
                                                    }
                                                    onChange={() =>
                                                        handleChange(task.uuid)
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
