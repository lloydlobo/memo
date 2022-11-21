import {
    EditIcon,
    CalendarIcon,
    ChatBubbleIcon,
    EllipsisHorizontalIcon,
} from "../icons";

export default function TaskContentActions({
    onEditClick,
    onTaskHover,
}: {
    onEditClick: any;
    onTaskHover: any;
}): JSX.Element {
    return (
        <div
            data-layout="list"
            className={`btn-group-horizontal flex gap-2 ${
                onTaskHover ? "opacity-100" : "opacity-5"
            }`}
        >
            <button
                type="button"
                aria-label="Edit"
                data-action-hint="task-edit"
                className="btn-ghost btn btn-xs btn-square hover:btn-outline "
                onClick={onEditClick}
                tabIndex={0}
            >
                <EditIcon className="h-5 w-5" />
            </button>

            <button
                type="button"
                aria-expanded="false"
                data-action-hint="task-scheduler"
                aria-label="Due date"
                className="btn-ghost btn btn-xs btn-square hover:btn-outline"
                tabIndex={0}
            >
                <CalendarIcon className="h-5 w-5" />
            </button>

            <a
                aria-label="Comment"
                data-action-hint="task-comment"
                href="/app/project/9876543210/task/1234567890?intent=reply"
                tabIndex={0}
                className="btn-ghost btn btn-xs btn-square hover:btn-outline"
            >
                <ChatBubbleIcon className="h-5 w-5" />
            </a>

            <button
                type="button"
                aria-expanded="false"
                data-testid="more_menu"
                data-action-hint="task-overflow-menu"
                aria-label="More task actions"
                className="btn-ghost btn btn-xs btn-square hover:btn-outline"
                tabIndex={0}
            >
                <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
        </div>
    );
}
