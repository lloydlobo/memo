import { HamburgerIcon } from "../icons";

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
                <ul className="menu w-auto p-4 text-base-content">
                    {/*       <!-- Sidebar content here --> */}
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
