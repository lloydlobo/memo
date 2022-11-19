/**
 * AdjustmentsHorizontalIcon
 *
 * @param className
 * @returns {JSX.Element}
 * Source - heroicons.com | adjustments-horizontal.
 */
export default function AdjustmentsHorizontalIcon({
    className,
}: {
    className?: string;
}): JSX.Element {
    return (
        <svg
            className={className}
            fill="none"
            height="24"
            shapeRendering={"geometricPrecision"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
        </svg>
    );
}
