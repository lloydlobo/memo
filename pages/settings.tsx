import React from "react";
import Layout from "../components/Layout";

export default function Settings() {
    return (
        <Layout title="About">
            <main>
                <section id="hero-section">
                    <div className="min-h-screen">
                        <div className="hero">Settings</div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

Settings.auth = true;
