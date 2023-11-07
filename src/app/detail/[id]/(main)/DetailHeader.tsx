import Wrap from "@/components/template/Wrap";
import DetailThumbnail from "./detail/DetailThumbnail";
import DetailInfo from "./detail/DetailInfo";

export default function DetailHeader() {
    return (
        <Wrap height="normal" fullWidth={true} as="section">
            <DetailThumbnail />
            <DetailInfo />
        </Wrap>
    );
}
