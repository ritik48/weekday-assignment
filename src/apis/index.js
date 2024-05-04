export async function getJobs(page, limit) {
    try {
        const offset = limit * (page - 1);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            limit,
            offset,
        });

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
