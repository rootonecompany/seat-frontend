import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import FindForm from "../FindForm";

export default function FindId() {
    return (
        <Wrap>
            <Header headerContent={<PrevHeader title="아이디 찾기" />} />
            <FindForm mode="id" />
        </Wrap>
    );
}
