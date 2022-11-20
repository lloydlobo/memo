/**
 * CheckInCircleIcon.
 *
 * @param className
 * @returns {JSX.Element}
 * @source https://github.com/vercel/mongodb-starter/blob/main/components/icons/check-in-circle.tsx
 */
export default function CheckInCircleIcon({
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
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            shapeRendering="geometricPrecision"
        >
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
            />
        </svg>
    );
}
