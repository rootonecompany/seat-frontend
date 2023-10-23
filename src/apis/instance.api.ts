import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
};

export const api = axios.create(axiosConfig);
