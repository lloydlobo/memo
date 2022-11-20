import fetcher from "../../fetcher";
import useSWR from "swr";

/**
 * useUser function.
 * 3 possible states of a request: "loading", "ready", or "error". You can use the value of data and error to determine the current state of the request, and return the corresponding UI.
 *
 * @param {any} id
 * @returns {object}
 */
export default function useUser(id: any) {
    const { data, error } = useSWR(`/api/users/${id}`, fetcher);

    return {
        users: data,
        isLoading: !error && !data,
        isError: error,
    };
}
