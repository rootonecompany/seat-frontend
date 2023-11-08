import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useGo = () => {
    const router = useRouter();

    const handleLoginPage = useCallback(() => {
        router.push("/login");
    }, [router]);

    const handleRegisterPage = useCallback(() => {
        router.push("/register/terms");
    }, [router]);

    return { handleLoginPage, handleRegisterPage };
};
