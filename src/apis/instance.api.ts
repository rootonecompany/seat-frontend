import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: "http://pjy4952.cafe24.com:8000",
    headers: {
        "Content-Type": "application/json",
    },
};

export const api = axios.create(axiosConfig);
// api.defaults.withCredentials = true;

export const authorizationApi = axios.create(axiosConfig);
