import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export function NavbarBottom() {
  /* https://github.com/vercel/next.js/issues/20743
     SyntaxError: Failed to execute 'measure' on 'Performance': The mark 'beforeRender' does not exist.
     FIXME: In my case, looks like using useCallback + useEffect hook inside a Context is what was causing that error, when I rewrote the code the error sttoped. Very strange.
     FIXME: I'm my case, i was getting the error when i use router.push() to the page i was currently on */
  // Error occurs when on the page for too long and is refreshed.
  // TODO: Remove router.push() gor links where the page is the same?
  const router = useRouter();

  return (
    <div className="shadow-xl">
      <div className="btm-nav btm-nav-sm bg-base-200">
        <button onClick={() => router.push("/")} className="active text-accent">
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </button>

        <button
          onClick={() => router.push("/login?redirect=/tasks")}
          className="text-secondary"
        >
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">Tasks</span>
        </button>

        <button
          onClick={() => router.push("/login?redirect=/analysis")}
          className="text-primary-focus"
        >
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Stats</span>
        </button>
      </div>
    </div>
  );
}
