import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import FindForm from "../FindForm";

export default function FindPassword() {
    return (
        <Wrap>
            <Header headerContent={<PrevHeader title="비밀번호 찾기" />} />
            <FindForm mode="password" />
        </Wrap>
    );
}
