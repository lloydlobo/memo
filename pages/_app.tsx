import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import "../styles/global.css";
// import { StoreProvider } from '../utils/Store';
// import { ThemeProvider } from '../utils/theme-provider';

// import { SessionProvider } from 'next-auth/react';
// import { type AppProps } from 'next/app';

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({
  Component,
  pageProps: { session, ...pageProps },
}: any): JSX.Element {
  return (
    // Use session in loginform.tsx.
    <SessionProvider session={session}>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default App;
