import useSWR from "swr";
import { ServerTasks } from "../../../interfaces";
import fetcher from "../../fetcher";

/**
 * useTasks function single entrypoint SWR store.
 *
 * @returns {ServerTasks}
 */
export default function useTasks(): ServerTasks {
    const { data, error } = useSWR(`/api/tasks`, fetcher);

    return {
        tasks: data,
        isLoading: !error && !data,
        isError: error,
    };
}

// const {data,error} =
// useSWR(`/api/tasks/${args.join('/')}`,{initialData:[]})}`
