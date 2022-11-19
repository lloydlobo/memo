/**
 * HamburgerIcon for navbar menu.
 *
 * @param className
 * @returns {JSX.Element}
 */
export default function HamburgerIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // className="h-5 w-5"
            className={className}
            height={24}
            width={24}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="geometricPrecision"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
            />
        </svg>
    );
}
