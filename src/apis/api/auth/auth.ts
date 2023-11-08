import { api } from "@/apis/instance.api";
import { RegisterReturnType, RegisterType } from "@/interface";

export const Register = async (data: RegisterType) => {
    await api
        .post<RegisterReturnType>("/authentication/register", data)
        .then((res) => {
            console.log(res.headers);
        });
};
