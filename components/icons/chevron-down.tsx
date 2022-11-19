/**
 * ChevronDownIcon.
 *
 * @param className
 * @returns {JSX.Element}
 */
export default function ChevronDownIcon({
    className,
}: {
    className?: string;
}): JSX.Element {
    return (
        <svg
            className={`${className} fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            shapeRendering={"geometricPrecision"}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
    );
}
