import config from "./config.json";
import error from "./errorService";
import http from "./httpService";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const { apiEndpoint } = config;

function createQueryString(query, params) {
    const joinedParams = params.join(",");
    return `?${query}=${joinedParams}`;
}

export function getCountries(fields) {
    const apiAllEndpoint = `${apiEndpoint}/all`;

    if (!fields) return http.get(apiAllEndpoint);

    const queryString = createQueryString("fields", fields);
    return http.get(apiAllEndpoint + queryString);
}

export function getRegions() {
    return regions;
}

export async function loadCountries(fields) {
    try {
        const { data } = await getCountries(fields);
        return data;
    } catch (ex) {
        error.handle(ex);
    }
}