import React, { useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import usersObj from "../../lib/local/getFakeUsers";

export default function AllTasks() {
    const [users, setUsers] = useState(usersObj);
    const handleChange = ({
        e,
    }: {
        e: React.ChangeEvent<HTMLInputElement>;
    }): void => {
        toast.info("You have successfully changed your name");
    };

    return (
        <>
            <Layout title="All tasks">
                <div className="container my-6 grid place-content-center">
                    {users.length ? (
                        <ul className="card grid gap-2">
                            {users.map((user, index) => {
                                return (
                                    <li
                                        key={`${index}-${user.uuid}`}
                                        className="card-body rounded-lg bg-base-300 text-sm text-primary shadow-md"
                                    >
                                        <div className="grid grid-flow-col items-center gap-2">
                                            <div className="card-actions">
                                                <input
                                                    type="checkbox"
                                                    placeholder="done"
                                                    className="checkbox-accent checkbox"
                                                    onChange={(e) =>
                                                        handleChange({ e })
                                                    }
                                                />
                                            </div>
                                            <div className="">
                                                <h3>{user.name}</h3>
                                                <p>{user.email}</p>
                                                <p>{user.uuid}</p>
                                                <p>{user.id}</p>
                                                <p>{user.password}</p>
                                                <p>{user.isAdmin}</p>
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
