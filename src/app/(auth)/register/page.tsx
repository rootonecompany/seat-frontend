import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Wrap from "@/components/template/Wrap";
import Sns from "../Sns";

export default function Regsiter() {
    return (
        <Wrap>
            <Header headerContent={<PrevHeader title="회원가입" />} />
            <Sns state="회원가입" />
        </Wrap>
    );
}
