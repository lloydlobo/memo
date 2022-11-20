import Link from "next/link";
import { toast } from "react-toastify";
import useSWR from "swr";
import Layout from "../../components/Layout";
import { TaskData } from "../../interfaces";

type Props = {
    tasks: TaskData[];
};

async function fetcherFunc(...args: any[]) {
    console.log(...args); // /api/tasks secret tokenADAFE
    const [url, token] = args;
    const [name, value] = token.split(" ");
    // Making request to,
    // Request URL: https://localhost:300/api/tasks?secret=tokenADAFE
    // const res = await fetch(`${url}?${name}=${value}`);
    const res = await fetch(`${url}`);

    return res.json();
}

// https://levelup.gitconnected.com/data-fetching-in-react-and-next-js-with-useswr-to-impress-your-friends-at-parties-ec2db732ca6b
const WithStaticProps = () => {
    const key = "/api/tasks";
    const token = process.env.API_TOKEN || ""; //"secret tokenADAFE".
    // Stale-While-Revalidate is the concept to show stale, cached data, if we have it; then, proceed with rendering the page while requesting fresh data from the server in the background.
    //  First, it will be used as a key for useSWR to maintain its cache; secondly, it will be passed to a fetcher function.
    const { data, error } = useSWR([key, token], fetcherFunc);

    // Normally, there're 3 possible states of a request:
    // "loading", "ready", or "error".
    // You can use the value of data and error to
    // determine the current state of the request,
    // and return the corresponding UI.
    if (error)
        return <div className="toast-bottom text-error">failed to load</div>;
    if (!data) return <div className="toast-bottom text-info">loading...</div>;
    if (data.statusCode !== 200) toast.error(`${data.statusCode}!`);

    const tasks = data.data;

    return (
        <Layout title="Tasks List">
            <main>
                <section>
                    <div className="card">
                        {tasks.length ? (
                            <div className="card-body">
                                <h2 className="card-title">Tasks</h2>
                                {tasks.map((task: TaskData) => (
                                    <div key={task.id} className="card-text">
                                        <Link
                                            href="/tasks/[id]"
                                            as={`/tasks/${task.uuid}`}
                                        >
                                            <div>{task.name}</div>
                                            <br />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default WithStaticProps;
