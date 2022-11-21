import { EditIcon } from "../icons";

export default function TaskContentActions({
    onEdit,
}: {
    onEdit: any;
}): JSX.Element {
    return (
        <div
            data-layout="list"
            className="btn-group-horizontal flex gap-2 opacity-5 hover:opacity-100"
        >
            <button
                type="button"
                aria-label="Edit"
                data-action-hint="task-edit"
                className="btn btn-xs btn-square hover:btn-outline "
                onClick={onEdit}
                tabIndex={0}
            >
                <EditIcon className="h-5 w-5" />
            </button>
            <button
                type="button"
                aria-expanded="false"
                data-action-hint="task-scheduler"
                aria-label="Due date"
                className="btn-outline btn btn-xs btn-square h-8 w-8"
                tabIndex={0}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>
            <a
                aria-label="Comment"
                data-action-hint="task-comment"
                href="/app/project/9876543210/task/1234567890?intent=reply"
                tabIndex={0}
                className="btn-ghost btn-outline btn btn-xs btn-square h-8 w-8"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    data-svgs-path="sm1/comments.svg"
                >
                    <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
                    ></path>
                </svg>
            </a>
            <button
                type="button"
                aria-expanded="false"
                data-testid="more_menu"
                data-action-hint="task-overflow-menu"
                aria-label="More task actions"
                className="btn-outline btn btn-xs btn-square h-8 w-8"
                tabIndex={0}
            >
                <svg width="15" height="3">
                    <path
                        d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        fill="currentColor"
                        fillRule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    );
}
