import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Wrap from "@/components/template/Wrap";
import RegisterForm from "./RegisterForm";

export default function Regsiter() {
    return (
        <Wrap height="full">
            <Header headerContent={<PrevHeader title="회원가입" />} />
            <RegisterForm />
        </Wrap>
    );
}
