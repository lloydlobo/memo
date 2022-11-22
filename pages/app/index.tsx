import React from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import ListView from "../../components/app/ListView";
import { HeaderInbox } from "../../components/header/HeaderInbox";
import Layout from "../../components/Layout";
import LayoutApp from "../../components/LayoutApp";
import useTasks from "../../lib/api/utils/useTasks";
import fetcher from "../../lib/fetcher";

export default function AppIndex() {
    const { tasks, isLoading, isError } = useTasks();

    if (isError) {
        return <div className="text-error">${isError}</div>;
    }

    return (
        <Layout title="Inbox" footerStyle={"hidden"}>
            <LayoutApp>
                <main>
                    {isLoading ? (
                        <>
                            <div className="place-self-center p-12 text-info">
                                Loading...
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Add drawer here? or new layout LayoutApp? */}
                            <section id="hero-section" className="grid">
                                <HeaderInbox />
                                <ListView tasks={tasks} />
                            </section>
                        </>
                    )}
                </main>
            </LayoutApp>
        </Layout>
    );
}

AppIndex.auth = false;
