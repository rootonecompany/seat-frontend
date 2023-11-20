import Wrap from "@/components/template/Wrap";
import SeatDetailHeader from "./SeatDetailHeader";
import SeatDetailBody from "./SeatDetailBody";

export default function Main() {
    return (
        <Wrap fullWidth={true} fullHeight={true} as="main">
            <SeatDetailHeader />
            <SeatDetailBody />
        </Wrap>
    );
}
