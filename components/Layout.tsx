import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { LoginForm } from "./auth/LoginForm";
import Navbar from "./navbar/Navbar";
import { NavbarBottom } from "./navbar/NavbarBottom";
import { ToastTopStart } from "./toast/ToastTopStart";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./footer/Footer";

type Props = {
    children?: ReactNode;
    title?: string;
};

function Layout({
    children,
    title = "This is the default title",
}: {
    children: ReactNode;
    title: string;
}): JSX.Element {
    // After setting up  SessionProvided in _app.tsx...
    // status flag shows loading of session.
    const { status, data: session } = useSession();

    // const [loading, setLoading] = useState(true);
    //
    // // Preloader mock.
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(!loading);
    //     }, 1000);
    // }, []);
    //
    // JSX.Element.
    return (
        <div className="wrapper">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <header className="bg-black/25 shadow-md">
                <Navbar status={status} session={session} />
                {/* FIX: Mover toast container after Head without messing layout grid of main */}
                <ToastContainer position="bottom-center" limit={1} />
            </header>

            {false ? (
                <>
                    <ToastTopStart alert1={"Loading..."} alert2={""} />
                    <LoginForm />
                    <ToastContainer position="bottom-center" limit={1} />
                </>
            ) : (
                <>{children}</>
            )}

            <footer>
                <div className="sm:hidden">
                    <NavbarBottom />
                </div>
                {/* <hr /> */}
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
