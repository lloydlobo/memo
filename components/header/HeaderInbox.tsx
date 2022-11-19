import {
    AdjustmentsHorizontalIcon,
    ChatBubbleIcon,
    ChevronDownIcon,
    EllipsisHorizontalIcon,
    InboxIcon,
} from "../icons";

export function HeaderInbox({ projectName = "Inbox" }) {
    return (
        <header
            aria-label="Project Header: includes Project Notes button, Sort Options button, and More Project Actions button"
            data-testid="view_header"
            className="navbar sticky top-[3.7rem] z-10 w-full bg-base-100 bg-opacity-90 pt-5 pl-4 pb-3 pr-0 backdrop-blur-md "
        >
            <div className="flex w-full pb-2">
                <div className="flex flex-1 items-center space-x-1">
                    <InboxIcon className="badge badge-ghost" />
                    <div
                        data-before=""
                        className="rounded-md text-2xl font-bold normal-case before:content-[attr(data-before)]"
                    >
                        {projectName}
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-compact menu-horizontal p-0">
                        <li>
                            <a
                                data-track="project|comments"
                                data-note-type="project_note"
                                aria-label="Comments"
                                type="button"
                                tabIndex={0}
                                className="modal-box"
                            >
                                <ChatBubbleIcon className="h-6 w-6" />
                            </a>
                        </li>
                        <li tabIndex={0}>
                            <button>
                                <AdjustmentsHorizontalIcon className="h-6 w-6" />
                                <ChevronDownIcon className="hidden" />
                            </button>
                            <ul className="bg-base-100 p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="">
                                <EllipsisHorizontalIcon className="h-6 w-6" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
