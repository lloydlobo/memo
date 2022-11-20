/**
 * CalendarTodayIcon
 *
 * @param {number} date - The date to display in the icon.
 * @param {string} className - The class name to apply to the icon.
 * @returns {JSX.Element} - The icon.
 * Source: heroicons.com | Calendar.
 */
export default function CalendarTodayIcon({
    date = 11,
    className,
}: { date?: number; className?: string } = {}): JSX.Element {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
        >
            <g fill="currentColor" fillRule="evenodd">
                <path
                    fillRule="nonzero"
                    d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                    opacity=".09"
                />
                <path
                    fillRule="nonzero"
                    d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                    opacity=".7"
                />
                <text
                    fontSize="0.68rem"
                    transform="translate(4 2)"
                    fontWeight="300"
                    fontFamily="inherit"
                    letterSpacing="0.1em"
                >
                    <tspan x="8" y="15" textAnchor="middle">
                        {date}
                    </tspan>
                </text>
            </g>
        </svg>
    );
}
