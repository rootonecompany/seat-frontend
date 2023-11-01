import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import LoginForm from "./LoginForm";

export default function Login() {
    return (
        <Wrap height="full">
            <Header headerContent={<PrevHeader title="로그인" />} />
            <LoginForm />
        </Wrap>
    );
}
