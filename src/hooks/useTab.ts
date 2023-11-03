import { useCallback, useState } from "react";

export function useTab() {
    const [tab, setTab] = useState(1);
    const changeTab = useCallback((tab: number) => {
        setTab(tab);
    }, []);
    return { tab, changeTab };
}
