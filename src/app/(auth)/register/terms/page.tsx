import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import TermsForm from "./TermsForm";

export default function Terms() {
    return (
        <Wrap>
            <Header headerContent={<PrevHeader title="이용약관" />} />
            <TermsForm />
        </Wrap>
    );
}
