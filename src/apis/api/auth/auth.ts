import { api, setAccessTookenCookie } from "@/apis/instance.api";
import {
    RegisterReturnType,
    RegisterType,
    UserIdDuplicateCheckReturnType,
} from "@/interface";

export const getUserIdDuplicateCheck = async (userId: string) => {
    const response = await api.get<UserIdDuplicateCheckReturnType>(
        `/user/duplication/${userId}`
    );

    return response.data;
};

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
