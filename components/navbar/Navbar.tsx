import Link from "next/link";
import React, { SVGProps } from "react";
import { brand } from "../../utils/brand";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-2 w-52 bg-base-100 p-2 shadow"
            >
              <li className="menu-title mt-2">
                <span>Auth</span>
              </li>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li className="menu-title mt-2">
                <span>Pages</span>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li className="menu-title mt-2">
                <span>API</span>
              </li>
              <li>
                <Link href="/users">Users List</Link>
              </li>
              <li>
                <a href="/api/users">Users API</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <Link className="btn-ghost btn text-xl normal-case" href={"/"}>
            {brand.name}
          </Link>
        </div>

        <div className="navbar-end">
          <button className="btn-ghost btn-circle btn">
            <div className="indicator">
              <BellActiveIcon className="h-5 w-5" />
              <span className="badge-primary badge badge-xs indicator-item"></span>
            </div>
          </button>

          <button className="btn-ghost btn-circle btn">
            <SearchInactiveIcon className="h-5 w-5" />
          </button>

          <button className="btn-ghost btn-square btn hidden sm:flex">
            <MoreInactiveIcon className="inline-block h-5 w-5 stroke-current" />
          </button>
        </div>
      </div>
    </nav>
  );
}

// /* <EditInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" /> */
function BellActiveIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );
}

function SearchInactiveIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function MoreInactiveIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block h-5 w-5 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  );
}
