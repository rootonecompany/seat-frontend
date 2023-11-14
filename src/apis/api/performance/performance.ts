import { api } from "../../instance.api";
import { TicketRankType } from "@/interface/data.type";

export const getTicketRank = async () => {
    const response = await api.get<TicketRankType[]>(
        "/performances/ranks?genre=콘서트"
    );
    return response.data;
};
