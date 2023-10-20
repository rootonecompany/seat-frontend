import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  // baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
};

export const api = axios.create(axiosConfig);
