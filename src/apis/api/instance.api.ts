import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: "https://jsonplaceholder.typicode.com",
};

export const api = axios.create(axiosConfig);
