import { api } from "@/apis/instance.api";
import { RegisterReturnType, RegisterType } from "@/interface";

export const Register = async (data: RegisterType) => {
    const response = await api.post<RegisterReturnType>("/auth/register", data);

    return response.data;
};
