/**
 * CircleIcon.
 *
 * @param className
 * @returns JSX.Element
 // * @source https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
 */
export default function CircleIcon({
    className,
}: {
    className?: string;
}): JSX.Element {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
            fill="currentColor"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <circle cx="12" cy="12" r="8" /> */}
            <path
                d="M12 7a5 5 0 110 10 5 5 0 010-10z"
                fill="currentColor"
            ></path>
        </svg>
    );
}
