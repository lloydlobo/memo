import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { TaskData } from "../../interfaces";
import data from "../../lib/local/data";

type Props = {
    tasks: TaskData[];
};

const WithStaticProps = ({ tasks }: Props) => (
    <Layout title="Tasks List">
        <main>
            <section>
                <div className="container grid place-content-center gap-4 py-12">
                    <h1 className="text-center">Tasks List</h1>
                    <div className="card bg-base-300">
                        <ul className="divide-y p-4">
                            {tasks.map((task) => (
                                <li className="card-body" key={task.id}>
                                    <Link href={`/tasks/${task.uuid}`}>
                                        <div className="card-title">
                                            {task.name}
                                        </div>
                                        <p>{task.description}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
);

// Don't forget to include the respective types for any props passed into
// the component.
export const getStaticProps: GetStaticProps = async () => {
    const tasks: TaskData[] = data.tasks;
    return { props: { tasks } };
};

export default WithStaticProps;
