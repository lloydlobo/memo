/**
 * DirectoryIcon.
 *
 * @param className
 * @returns {JSX.Element}
 * @source https://github.dev/vercel/mongodb-starter/blob/main/components/icons/alert-circle.tsx
 */
export default function DirectoryIcon({
    className,
}: {
    className?: string;
}): JSX.Element {
    return (
        <div className="group relative flex items-center">
            <svg
                className={className}
                data-testid="geist-icon"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
            >
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
        </div>
    );
}