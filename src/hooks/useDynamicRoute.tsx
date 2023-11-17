import { useParams, useRouter } from "next/navigation";

export const useDynamicRouter = () => {
    const router = useRouter();
    const id = useParams().id;
    const seatId = useParams().seat;

    const handleDynamicRouter = (path: string) => {
        router.push(path);
    };

    return {
        id,
        seatId,
        handleDynamicRouter,
    };
};
