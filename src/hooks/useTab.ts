import { useCallback, useState } from "react";

export function useTab(initialState: number) {
    const [tab, setTab] = useState(initialState);
    const changeTab = useCallback((tab: number) => {
        setTab(tab);
    }, []);
    return { tab, changeTab };
}
