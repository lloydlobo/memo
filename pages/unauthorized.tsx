import { useRouter } from "next/router";
import React from "react";
import { ButtonGoHome } from "../components/buttons/ButtonGoHome";
import Layout from "../components/Layout";

export default function Unauthorized() {
    const router = useRouter();
    const { message } = router.query;
    return (
        <Layout title="Unauthorized page">
            <main>
                <section id="hero-section">
                    <div className="grid min-h-[60vh] place-content-center place-items-center items-center">
                        <div className="mb-8 grid place-items-center space-y-1 text-center">
                            <h1 className="text-4xl">Access Denied</h1>
                            {message && (
                                <div className="mb4 text-error">{message}</div>
                            )}
                        </div>
                        <ButtonGoHome />
                    </div>
                </section>
            </main>
        </Layout>
    );
}
