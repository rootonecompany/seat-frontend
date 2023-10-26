import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Wrap from "@/components/template/Wrap";

export default function Login() {
    return (
        <Wrap>
            <Header headerContent={<PrevHeader title="로그인" />} />
        </Wrap>
    );
}
