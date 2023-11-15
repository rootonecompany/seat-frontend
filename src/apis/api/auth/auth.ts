import { api, setAccessTookenCookie } from "@/apis/instance.api";
import {
    RegisterReturnType,
    RegisterType,
    UserIdDuplicateCheckReturnType,
    UserFindIdType,
    UserFindIdReturnType,
    UserFindPasswordType,
    UserFindPasswordReturnType,
    UserPasswordUpdateType,
    UserPasswordUpdateReturnType,
} from "@/interface/data.type";

export const Register = async (data: RegisterType) => {
    !data && false;
    try {
        const response = await api.post<RegisterReturnType>(
            "/authentication/register",
            data
        );
        setAccessTookenCookie(response.headers["authorization"]);
    } catch (error) {
        console.error(error);
    }
};

export const getUserIdDuplicateCheck = async (userId: string) => {
    const response = await api.get<UserIdDuplicateCheckReturnType>(
        `/user/duplication/${userId}`
    );

    return response.data;
};

export const getFindId = async (info: UserFindIdType) => {
    const response = await api.post<UserFindIdReturnType>(
        "/user/find/id",
        info
    );

    return response.data;
};
export const getFindPassword = async (info: UserFindPasswordType) => {
    const response = await api.post<UserFindPasswordReturnType>(
        "/user/find/password",
        info
    );

    return response.data;
};
export const userPasswordUpdate = async (info: UserPasswordUpdateType) => {
    const response = await api.patch<UserPasswordUpdateReturnType>(
        "/user/update/password",
        info
    );

    return response.data;
};
