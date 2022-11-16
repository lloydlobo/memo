import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import { NavbarBottom } from "./navbar/NavbarBottom";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="wrapper ">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="bg-base-300 shadow-md">
      <Navbar />
    </header>

    {children}
    <div className="sm:hidden">
      <NavbarBottom />
    </div>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
