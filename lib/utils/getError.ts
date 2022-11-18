/**
 * toastError.
 */
export type toastError =
    | { response: { data: { message: any } }; message: any }
    | any
    | unknown;

/**
 *  getError().
 *
 *  Optional chaining:
 *  (err.response && err.response.data && err.response.data.message)
 */
// https://youtu.be/fBew9hQhvLU?t=551
export function getError({ err }: { err: toastError }): toastError["message"] {
    if (err.response?.data?.message) {
        return err.response.data.message;
    }

    return err.message;
}
