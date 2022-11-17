import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import "../styles/global.css";
import { AppProps } from 'next/app';
import Layout from "../components/Layout";

// https://github.com/vercel/mongodb-starter/blob/main/pages/_app.tsx
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
    return (
        // Use session from loginform.tsx.
        <SessionProvider session={session}>
            <div className={`${inter.variable} font-sans`}>
                <Component {...pageProps} />
            </div>
        </SessionProvider>
    );
}

export default App;
