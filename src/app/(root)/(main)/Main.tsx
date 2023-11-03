import Wrap from "@/components/template/Wrap";
import BoundaryWrap from "@/components/template/BoundaryWrap";
import Banner from "./Banner";
import MyTicket from "./MyTicket";
import PopularTickets from "./PopularTickets";
import TicketRank from "./TicketRank";
import GiftCard from "./GiftCard";
import Review from "./Review";

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
            <BoundaryWrap padding="1.5rem">
                <TicketRank />
            </BoundaryWrap>
            <BoundaryWrap padding="1.1rem">
                <GiftCard />
            </BoundaryWrap>
            <BoundaryWrap padding="2.8rem" borderNone={true}>
                <Review />
            </BoundaryWrap>
        </Wrap>
    );
}
