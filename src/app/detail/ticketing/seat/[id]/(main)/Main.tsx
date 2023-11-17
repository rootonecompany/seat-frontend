import Wrap from "@/components/template/Wrap";
import SeatMap from "./component/SeatMap";
import SeatBody from "./component/SeatBody";

export default function Main() {
    return (
        <Wrap fullWidth={true} fullHeight={true} as="main">
            <SeatMap />
            <SeatBody />
        </Wrap>
    );
}
