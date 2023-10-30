import { useState } from "react";

export function useFormInput<T>(initialState: T) {
    const [formValue, setFormValue] = useState<T>(initialState);

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "userphone") {
            if (value.length > 13) return;
            return setFormValue({
                ...formValue,
                [name]: value.replace(/-/g, ""),
            });
        }

        setFormValue({ ...formValue, [name]: value });
    };

    return {
        formValue,
        handleInputValue,
    };
}
