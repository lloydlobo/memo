import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    CalendarDaysIcon,
    CalendarTodayIcon,
    CheckCircleIcon,
    CircleIcon,
    FunnelIcon,
    HamburgerIcon,
    InboxIcon,
    Squares2x2Icon,
} from "../icons";

export default function AppSidebar({
    toggleDrawer,
    setToggleDrawer,
    className,
}: {
    toggleDrawer: boolean;
    setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}) {
    const [today, setToday] = useState<number>(new Date().getDate());

    /**
     * Update date every 1 minute.
     */
    useEffect(() => {
        setInterval(() => {
            const dateToday = new Date().getDate();
            setToday(dateToday);
        }, 60000);
    }, [today, setToday]);

    return (
        <>
            <div className="fixed top-2 left-1 z-50">
                <button
                    onClick={() => setToggleDrawer(!toggleDrawer)}
                    className="btn-ghost btn backdrop-blur-sm "
                >
                    <HamburgerIcon className="h-5 w-5 opacity-80" />
                </button>
            </div>

            <aside
                className={`w-fit bg-base-300 ${className} ${
                    toggleDrawer ? "left-0 " : "absolute -left-48 "
                }
            
            `}
            >
                <div className={`fixed top-0 left-0`}>
                    <div className="">
                        <div
                            className={`sticky top-16 z-20 -mb-16 h-full  w-fit bg-base-300 sm:relative 
                            ${toggleDrawer ? "left-0 " : "absolute -left-48 "}`}
                        >
                            <div className="sticky top-16 z-20 -mb-16 h-full  w-fit bg-base-300 sm:relative">
                                <div className="h-fill absolute top-0 w-fit ">
                                    <div className="absolute">
                                        <ul className="menu menu-compact relative w-full overflow-y-auto pt-5">
                                            {/*       <!-- Sidebar content here --> */}
                                            <li>
                                                <Link href="/app">
                                                    <InboxIcon className="h-5" />
                                                    <span>Inbox</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/app">
                                                    <CalendarTodayIcon
                                                        date={today}
                                                        className="h-6"
                                                    />
                                                    <span>Today</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/app">
                                                    <CalendarDaysIcon className="h-5" />
                                                    <span>Upcoming</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/app">
                                                    <Squares2x2Icon className="h-5" />
                                                    <span>
                                                        Filters & Labels
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/app">
                                                    <CheckCircleIcon className="h-5 w-8" />
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
                                                                    <FunnelIcon className="h-5" />
                                                                    <span>
                                                                        This
                                                                        Week
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="">
                                                                    <FunnelIcon className="h-5" />
                                                                    <span>
                                                                        View all
                                                                    </span>
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
                                                                    <CircleIcon className="project_icon h-5" />
                                                                    <span>
                                                                        Project
                                                                        1
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="">
                                                                    <CircleIcon className="project_icon h-5" />
                                                                    <span>
                                                                        Project
                                                                        2
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
