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

// Settings?.auth = true
// Because of how _app is written, it won't unnecessarily contact the /api/auth/session endpoint for pages that do not require authentication.
Settings.auth = {
    role: "admin",
    loading: <Layout title={"loading | Settings"}>loading</Layout>,
    unauthorized: "/login-with-different-user", // redirect to  this url.
};
