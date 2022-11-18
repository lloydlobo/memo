// Source: https://github.com/vercel/mongodb-starter/blob/main/lib/fetcher.ts
/**
 * fetcher Fetches JSON from the given URL.
 * Return a promise JSON.
 *
 * @param input The URL to fetch from.
 * @param init The options to pass to the fetch function.
 * @returns The JSON response.
 */
export default async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init);

    if (!res.ok && res.status === 401) {
        throw new Error("Unauthorized");
    }

    return res.json();
}
