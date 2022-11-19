/**
 * EllipsisHorizontalIcon.
 *
 * @param className
 * @returns {JSX.Element}
 * Source - heroicons.com | ellipsis-horizontal.
 */
export default function EllipsisHorizontalIcon({
    className,
}: {
    className?: string;
}): JSX.Element {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            shapeRendering={"geometricPrecision"}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
        </svg>
    );
}
