import { IamportResponse } from "@/interface";

interface VerificationProps {
    name: string;
    phone: string;
    successCallback: () => void;
    failCallback: () => void;
}

export const verification = ({
    name,
    phone,
    successCallback,
    failCallback,
}: VerificationProps) => {
    if (!window.IMP) return;

    const IMP = window.IMP;
    IMP.init("imp54817857");

    IMP.certification(
        {
            pg: "danal",
            merchant_uid: "merchant_" + new Date().getTime(),
            name,
            phone,
            popup: false,
        },
        (response: IamportResponse) => {
            response.success ? successCallback() : failCallback();
        }
    );
};
