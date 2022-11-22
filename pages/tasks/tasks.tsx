import React, { useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import { UserData } from "../../interfaces";
import { getFakeUsers } from "../../lib/local/getFakeUsers";

export default function AllTasks({
    users,
}: {
    users: UserData[];
}): JSX.Element {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                                                        handleChange(e)
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

// getStaticProps is used to fetch data from the server.
//
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    const users: UserData[] = await getFakeUsers(100);

    return {
        props: {
            users,
        },
    };
}
