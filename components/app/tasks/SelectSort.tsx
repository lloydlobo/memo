import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import { Funcs } from "../../../pages/tasks/tasks";

const sortOptions = [
    { name: "By Category A-Z" },
    { name: "By Category Z-A" },
    { name: "By Id 0-9" },
    { name: "By Id 9-0" },
    { name: "By Completed done" },
    { name: "By Completed todo" },
];

export function SelectSort({ funcs }: { funcs: Funcs }) {
    const [selected, setSelected] = useState(sortOptions[0]);

    const handleChange = (option: { name: any }) => {
        switch (option.name) {
            case "By Category A-Z":
                setSelected(sortOptions[0]);
                funcs.handleSortCategoryAscendingClick();
                break;
            case "By Category Z-A":
                setSelected(sortOptions[1]);
                funcs.handleSortCategoryAscendingClick();
                break;
            case "By Id 0-9":
                setSelected(sortOptions[2]);
                funcs.handleSortIdAscendingClick();
                break;
            case "By Id 9-0":
                setSelected(sortOptions[3]);
                funcs.handleSortIdAscendingClick();
                break;
            case "By Completed done":
                setSelected(sortOptions[4]);
                funcs.handleSortCompletedClickAscending();
                break;
            case "By Completed todo":
                setSelected(sortOptions[5]);
                funcs.handleSortCompletedClickDescending();
                break;
            default:
                break;
        }
    };

    return (
        <div className="w-72">
            <Listbox
                value={selected}
                // onChange={setSelected}
                onChange={(selected: { name: any }) => handleChange(selected)}
            >
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-base-300 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {sortOptions.map((option, optionIdx) => (
                                <Listbox.Option
                                    key={optionIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? "bg-primary" : ""
                                        }`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <button
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {option.name}
                                            </button>

                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
