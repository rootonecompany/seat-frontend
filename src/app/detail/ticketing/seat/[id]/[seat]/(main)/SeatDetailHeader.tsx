import Wrap from "@/components/template/Wrap";
import SeatDetailTitle from "./component/SeatDetailTitle";
import { RealTimeSeatType } from "@/interface";
import SeatDetail from "./component/SeatDetail";

const data: RealTimeSeatType[] = [
    {
        id: 1,
        name: "01구역 1열",
        seat: [
            {
                id: 1,
                state: 2,
            },
            {
                id: 2,
                state: 2,
            },
            {
                id: 3,
                state: 0,
            },
            {
                id: 4,
                state: 0,
            },
            {
                id: 5,
                state: 0,
            },
            {
                id: 6,
                state: 1,
            },
            {
                id: 7,
                state: 1,
            },
            {
                id: 8,
                state: 1,
            },
            {
                id: 9,
                state: 1,
            },
            {
                id: 10,
                state: 2,
            },
            {
                id: 11,
                state: 2,
            },
            {
                id: 12,
                state: 2,
            },
            {
                id: 13,
                state: 1,
            },
            {
                id: 14,
                state: 1,
            },
            {
                id: 15,
                state: 1,
            },
            {
                id: 16,
                state: 1,
            },
            {
                id: 17,
                state: 1,
            },
            {
                id: 18,
                state: 1,
            },
            {
                id: 19,
                state: 1,
            },
            {
                id: 20,
                state: 1,
            },
        ],
    },
    {
        id: 2,
        name: "02구역 1열",
        seat: [
            {
                id: 1,
                state: 2,
            },
            {
                id: 2,
                state: 2,
            },
            {
                id: 3,
                state: 1,
            },
            {
                id: 4,
                state: 1,
            },
            {
                id: 5,
                state: 0,
            },
            {
                id: 6,
                state: 0,
            },
            {
                id: 7,
                state: 0,
            },
            {
                id: 8,
                state: 0,
            },
            {
                id: 9,
                state: 1,
            },
            {
                id: 10,
                state: 2,
            },
            {
                id: 11,
                state: 2,
            },
            {
                id: 12,
                state: 2,
            },
            {
                id: 13,
                state: 1,
            },
            {
                id: 14,
                state: 1,
            },
            {
                id: 15,
                state: 1,
            },
            {
                id: 16,
                state: 1,
            },
            {
                id: 17,
                state: 1,
            },
            {
                id: 18,
                state: 1,
            },
            {
                id: 19,
                state: 1,
            },
            {
                id: 20,
                state: 1,
            },
        ],
    },
    {
        id: 3,
        name: "03구역 1열",
        seat: [
            {
                id: 1,
                state: 2,
            },
            {
                id: 2,
                state: 2,
            },
            {
                id: 3,
                state: 1,
            },
            {
                id: 4,
                state: 1,
            },
            {
                id: 5,
                state: 1,
            },
            {
                id: 6,
                state: 1,
            },
            {
                id: 7,
                state: 0,
            },
            {
                id: 8,
                state: 0,
            },
            {
                id: 9,
                state: 0,
            },
            {
                id: 10,
                state: 2,
            },
            {
                id: 11,
                state: 2,
            },
            {
                id: 12,
                state: 2,
            },
            {
                id: 13,
                state: 1,
            },
            {
                id: 14,
                state: 1,
            },
            {
                id: 15,
                state: 1,
            },
            {
                id: 16,
                state: 1,
            },
            {
                id: 17,
                state: 1,
            },
            {
                id: 18,
                state: 1,
            },
            {
                id: 19,
                state: 1,
            },
            {
                id: 20,
                state: 1,
            },
        ],
    },
    {
        id: 4,
        name: "04구역 1열",
        seat: [
            {
                id: 1,
                state: 2,
            },
            {
                id: 2,
                state: 2,
            },
            {
                id: 3,
                state: 0,
            },
            {
                id: 4,
                state: 0,
            },
            {
                id: 5,
                state: 0,
            },
            {
                id: 6,
                state: 1,
            },
            {
                id: 7,
                state: 1,
            },
            {
                id: 8,
                state: 1,
            },
            {
                id: 9,
                state: 1,
            },
            {
                id: 10,
                state: 2,
            },
            {
                id: 11,
                state: 2,
            },
            {
                id: 12,
                state: 2,
            },
            {
                id: 13,
                state: 1,
            },
            {
                id: 14,
                state: 1,
            },
            {
                id: 15,
                state: 1,
            },
            {
                id: 16,
                state: 1,
            },
            {
                id: 17,
                state: 1,
            },
            {
                id: 18,
                state: 1,
            },
            {
                id: 19,
                state: 1,
            },
            {
                id: 20,
                state: 1,
            },
        ],
    },
];

export default function SeatDetailHeader() {
    return (
        <Wrap fullWidth={true} as="section">
            <SeatDetailTitle />
            <SeatDetail seat={data} />
        </Wrap>
    );
}
