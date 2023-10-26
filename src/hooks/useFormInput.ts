import { useState } from "react";
import { Form } from "@/interface";

export function useFormInput(initialState = {}) {
    const [formValue, setFormValue] = useState<Form>(initialState);

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return {
        formValue,
        handleInputValue,
    };
}
