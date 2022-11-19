import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { HamburgerIcon, InboxIcon } from "../icons";

export default function AppSidebar({
    toggleDrawer,
    setToggleDrawer,
    className,
}: {
    toggleDrawer: boolean;
    setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}) {
    return (
        <>
            <div className={`${className}`}>
                <button
                    onClick={() => setToggleDrawer(!toggleDrawer)}
                    className="btn-ghost btn absolute top-2 left-1 z-50 backdrop-blur-sm "
                >
                    <HamburgerIcon className="h-auto w-5" />
                </button>
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu menu-compact w-auto pt-5 text-base-content">
                    {/*       <!-- Sidebar content here --> */}
                    <li>
                        <Link href="/app">
                            <InboxIcon className="h-5" />
                            <span>Inbox</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/app">
                            <InboxIcon className="h-5" />
                            <span>Today</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/app">
                            <InboxIcon className="h-5" />
                            <span>Upcoming</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/app">
                            <InboxIcon className="h-5" />
                            <span>Filters & Labels</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/app">
                            <InboxIcon className="h-5" />
                            <span>Completed</span>
                        </Link>
                    </li>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <li className="mt-5">
                                    <Disclosure.Button className="flex w-full py-2 font-semibold text-base-content/70">
                                        <span className="mr-auto">
                                            Favorites
                                        </span>
                                        <ChevronUpIcon
                                            className={` ${
                                                open
                                                    ? "-rotate-180 transform"
                                                    : "-rotate-90 transform"
                                            } h-5 w-5`}
                                        />
                                    </Disclosure.Button>
                                </li>
                                <Disclosure.Panel className="">
                                    <li>
                                        <Link href="">
                                            <InboxIcon className="h-5" />
                                            <span>This Week</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <InboxIcon className="h-5" />
                                            <span>View all</span>
                                        </Link>
                                    </li>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <li className="mt-5">
                                    <Disclosure.Button className="flex w-full py-2 font-semibold text-base-content/70">
                                        <span className="mr-auto">
                                            Projects
                                        </span>
                                        <ChevronUpIcon
                                            className={` ${
                                                open
                                                    ? "-rotate-180 transform"
                                                    : "-rotate-90 transform"
                                            } h-5 w-5`}
                                        />
                                    </Disclosure.Button>
                                </li>
                                <Disclosure.Panel className="">
                                    <li>
                                        <Link href="">
                                            <InboxIcon className="h-5" />
                                            <span>Project 1</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <InboxIcon className="h-5" />
                                            <span>Project 2</span>
                                        </Link>
                                    </li>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </ul>
            </div>
        </>
    );
}
