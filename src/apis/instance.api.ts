import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: "https://jsonplaceholder.typicode.com",
};

export const PostApi = axios.create(axiosConfig);
