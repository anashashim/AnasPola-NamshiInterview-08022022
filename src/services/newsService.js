import config from "./config.json";
import error from "./errorService";
import http from "./httpService";

const { newsApiPoint, APIkey } = config;

function createQueryString(query, params) {;
    return `${query}=${params}`;
}

export function getNews(fields) {
    console.log(fields)
    const queryString = createQueryString("country", fields.toLowerCase());
    const queryString2 = createQueryString("apiKey", APIkey);
    return http.get(`${newsApiPoint}?${queryString}&${queryString2}`);
}