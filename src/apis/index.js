export async function fetchJobs(offset) {
    try {
        const myHeaders = new Headers();
        const body = JSON.stringify({
            limit: 10,
            offset,
        });
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body,
        };
        const res = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions
        );

        if (!res.ok) {
            throw new Error("Something went wrong while fetching jthe jobs.");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(
            error.message ?? "Something went wrong while fetching jthe jobs."
        );
    }
}
