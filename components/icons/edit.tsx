/**
 * EditIcon.
 *
 *
 * @param className
 * @returns {JSX.Element}
 * @source https://github.com/vercel/mongodb-starter/blob/main/components/icons/edit.tsx
 */
export default function EditIcon({
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
            fill="none"
            shapeRendering="geometricPrecision"
        >
            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
    );
}
