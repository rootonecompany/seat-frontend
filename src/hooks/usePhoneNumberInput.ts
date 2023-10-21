import { useState } from "react";

export const usePhoneNumberInput = () => {
    const [phoneValue, setPhoneValue] = useState<string>("");

    const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const phone = value
            .replace(/[^0-9]/g, "")
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
            .replace(/(\-{1,2})$/, "");

        setPhoneValue(phone);
    };

    return { phoneValue, formatPhoneNumber };
};
