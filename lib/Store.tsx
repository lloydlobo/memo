// TODO: Add projects?
// https://github.com/basir/next-tailwind-amazona/blob/main/utils/Store.js
import { createContext, ReactNode, useReducer } from "react";
import Cookies from "js-cookie";

let defaultContextValue: unknown;

// Source: https://stackoverflow.com/a/71445095 .
// export const Context = createContext<UserContextType | undefined>(undefined);
export const Store = createContext<unknown | undefined>(defaultContextValue);

export type storeState = {
    store: {
        storeTasks: { completed?: boolean; name: string; slug: string }[];
    };
};

const initialState: storeState = {
    store: { storeTasks: [] },
};

// https://youtu.be/_IBlyR5mRzA?t=4642
function reducer(state: storeState, action: any): storeState {
    switch (action.type) {
        // If task in store, just increment the quantity.
        case "STORE_ADD_TASK": {
            const newTask = action.payload;
            const existTask = state.store.storeTasks.find(
                (task: { slug: string }) => task.slug === newTask.slug
            );
            // Constructing array operator to deconstruct storeTasks of store,
            // Push the newTask to the end of the array.
            const storeTasks = existTask
                ? state.store.storeTasks.map((task): any => {
                      return task.name === existTask.name ? newTask : task;
                  })
                : [...state.store.storeTasks, newTask];
            // Return new state.
            return { ...state, store: { ...state.store, storeTasks } };
        }
        case "STORE_REMOVE_TASK": {
            const slug = action.payload;
            return { ...state };
        }
        case "STORE_UPDATE_TASK": {
            return { ...state };
        }
        default: {
            return state;
        }
    }
}

/** `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks. */
// React component. Create wrapper for children,
// Make Store.Provider for children with useReducer hook.
export function StoreProvider({ children }: { children: any }): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState as never);
    const value = { state, dispatch };

    return <Store.Provider value={value}>{children}</Store.Provider>;
}
