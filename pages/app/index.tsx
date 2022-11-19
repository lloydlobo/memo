import React from "react";
import { HeaderInbox } from "../../components/header/HeaderInbox";
import Layout from "../../components/Layout";

export default function AppIndex() {
    return (
        <Layout title="Inbox">
            <main>
                <section id="hero-section" className="w-full">
                    {/*                     <div className="pt-[6px] pl-[15px] pb-[12px] pr-0 ">
                        <div className="mx-8"> */}
                    <HeaderInbox />
                    {/*                         </div>
                    </div> */}
                </section>
            </main>
        </Layout>
    );
}

AppIndex.auth = true;
