import { IamportResponse } from "@/interface";

interface VerificationProps {
    value: {
        name: string;
        phone: string;
    };
    successCallback: () => void;
    failCallback: () => void;
}

export const verification = ({
    value,
    successCallback,
    failCallback,
}: VerificationProps) => {
    const { name, phone } = value;
    if (!window.IMP) return;
    const IMP = window.IMP;
    IMP.init("imp54817857");
    IMP.certification(
        {
            pg: "danal",
            merchant_uid: "merchant_" + new Date().getTime(),
            name: name,
            phone: phone,
            popup: false,
        },
        (response: IamportResponse) => {
            if (response.success) {
                successCallback();
            } else {
                failCallback();
            }
        }
    );
};
