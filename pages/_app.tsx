import { Inter } from "@next/font/google";
import { SessionProvider, useSession } from "next-auth/react";
import "../styles/global.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactNode } from "react";

// https://github.com/vercel/mongodb-starter/blob/main/pages/_app.tsx
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

/**
 * This is a multi-line Google style docstring.
 */
function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps | any): JSX.Element {
    return (
        // Use session from loginform.tsx.
        <SessionProvider session={session}>
            <div className={`${inter.variable} font-sans`}>
                {Component.auth ? (
                    <Auth>
                        <Component {...pageProps} />
                    </Auth>
                ) : (
                    <Component {...pageProps} />
                )}
            </div>
        </SessionProvider>
    );
}

/**
 * Auth component helps to avoid visit to restricted pages.
 * Redirect user to login page if unauthenticated.
 *
 * Usage: Set a page's functional JSX.Element: component.auth = true.
 * Example: SettingsPage.auth = true;
 *
 * @param children
 */
function Auth({ children }: any): any {
    const router = useRouter();

    const { status, data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/unauthorized?message=login required");
        }, // interface UseSessionOptions<R extends boolean>
    });

    if (status === "loading") {
        return (
            <>
                <div className="text-error">Loading...</div>
            </>
        );
    }
    return <>{children}</>;
}

export default App;
