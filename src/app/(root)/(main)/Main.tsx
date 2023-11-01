import Wrap from "@/components/template/Wrap";
import BoundaryWrap from "@/components/template/BoundaryWrap";
import Banner from "./Banner";
import MyTicket from "./MyTicket";
import PopularTickets from "./PopularTickets";

export default function Main() {
    return (
        <Wrap as="main" fullWidth={true}>
            <BoundaryWrap padding="1.1rem">
                <Banner />
                <MyTicket />
            </BoundaryWrap>
            <BoundaryWrap padding="1.1rem">
                <PopularTickets />
            </BoundaryWrap>
        </Wrap>
    );
}
