import axios from "axios";

const apiKey: string =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTgxODc0NGMyYmUwMmYxYzZhYzQzMGFlOWRmOWMwNCIsIm5iZiI6MTczNjU1MjA3MC42ODEsInN1YiI6IjY3ODFhZTg2MDY5MGFjMDZlNzdiMTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Kex1d-knxvgf2kFLv0_7o4xkDBB6visxW5Wi85o48Y";

const fetch = async (
    url: string,
    params: Record<string, string | number> = {}
) => {
    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3${url}`,
        params: {
            include_adult: "false",
            language: "pt-br",
            page: "1",
            ...params,
        },
        headers: {
            accept: "application/json",
            Authorization: apiKey,
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (err) {
        console.log(`Error fetching data from ${url}:`, err);
        throw err;
    }
};

export const fetchAll = async (type: string) => {
    return await fetch(`/trending/${type}/day`);
};

export const fetchTrailers = async (type: string, id: number) => {
    const data = await fetch(`/${type}/${id}/videos`);
    return data.results;
};

export const fetchSearch = async (name: string) => {
    return await fetch(`/search/multi`, { query: name });
};
