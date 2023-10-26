import { Form } from "@/interface";
import { useState } from "react";

export function useValueError(form: Form) {
    const [valueError, setValueError] = useState<boolean>(false);

    const checkValue = () => {
        for (const key in form) {
            if (form[key] === "" || form[key] === null) {
                setValueError(true);
                return;
            }
        }
        setValueError(false);
    };

    return {
        valueError,
        checkValue,
    };
}
