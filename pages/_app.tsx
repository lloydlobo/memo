import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import "../styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({
  Component,
  pageProps: { session, ...pageProps },
}: any): JSX.Element {
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
