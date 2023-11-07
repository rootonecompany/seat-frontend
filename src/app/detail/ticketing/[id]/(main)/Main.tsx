import Wrap from "@/components/template/Wrap";
import TicketingHeader from "./TicketingHeader";
import TicketingBody from "./TicketingBody";

export default function Main() {
    return (
        <Wrap fullWidth={true} fullHeight={true} as="main">
            <TicketingHeader />
            <TicketingBody />
        </Wrap>
    );
}
