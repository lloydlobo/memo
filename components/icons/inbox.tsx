/**
 * InboxIcon.
 *
 * @param className - Optional class name
 * @returns {JSX.Element}
 * Source - heroicons.com | inbox.
 */
export default function InboxIcon({
    className,
}: {
    className?: string;
}): JSX.Element {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            fill="none"
            shapeRendering={"geometricPrecision"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
            />
        </svg>
    );
}
