import { useState } from "react";

export function useInput<T>(initialState: T) {
    const [formValue, setFormValue] = useState<T>(initialState);
    const [phoneValue, setPhoneValue] = useState<string>("");

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "userphone" || name === "user_phone") {
            if (value.length > 13) return;

            const phone = value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
                .replace(/(\-{1,2})$/, "");

            setPhoneValue(phone);

            return setFormValue({
                ...formValue,
                [name]: value.replace(/-/g, ""),
            });
        }

        setFormValue({ ...formValue, [name]: value });
    };

    return { formValue, handleInputValue, phoneValue };
}
