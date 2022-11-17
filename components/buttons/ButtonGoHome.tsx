import Link from "next/link";
import React from "react";

export function ButtonGoHome() {
    return (
        <div>
            <Link className="btn-outline btn-accent btn" href="/">
                Go back home
            </Link>
        </div>
    );
}
