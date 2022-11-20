import React from "react";
import ListView from "../../components/app/ListView";
import { HeaderInbox } from "../../components/header/HeaderInbox";
import Layout from "../../components/Layout";
import LayoutApp from "../../components/LayoutApp";

export default function AppIndex() {
    return (
        <Layout title="Inbox" footer={"hidden"}>
            <LayoutApp>
                <main>
                    {/* Add drawer here? or new layout LayoutApp? */}
                    <section id="hero-section" className="grid">
                        <div className=" place-self-center">
                            <HeaderInbox />
                            <ListView />
                        </div>
                    </section>
                </main>
            </LayoutApp>
        </Layout>
    );
}

AppIndex.auth = true;
