import Wrap from "@/components/template/Wrap";
import DetailHeader from "./DetailHeader";
import DetailBody from "./DetailBody";

export default function Main() {
    return (
        <Wrap fullWidth={true} fullHeight={true} as="main">
            <DetailHeader />
            <DetailBody />
        </Wrap>
    );
}
