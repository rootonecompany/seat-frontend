import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Wrap from "@/components/template/Wrap";
import AuthorizationForm from "./AuthorizationForm";

export default function Authorization() {
    return (
        <Wrap>
            <Header headerContent={<PrevHeader title="본인인증" />} />
            <AuthorizationForm />
        </Wrap>
    );
}
