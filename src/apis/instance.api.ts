import axios, { AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const axiosConfig: AxiosRequestConfig = {
    baseURL: "http://pjy4952.cafe24.com:8000",
    headers: {
        "Content-Type": "application/json",
    },
};

export const api = axios.create(axiosConfig);
export const authorizationApi = axios.create(axiosConfig);

export const setAccessTookenCookie = (accessToken: string) => {
    cookie.set("accessToken", accessToken, { path: "/" });
};
export const getAccessTokenCookie = () => {
    return cookie.get("accessToken");
};
