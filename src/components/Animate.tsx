"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
    children: React.ReactNode;
}

export default function Animate({ children }: Props) {
    const path = usePathname();
    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={path}
                transition={{
                    duration: 0.35,
                }}
                initial={{
                    x: "100%",
                }}
                animate={{
                    x: 0,
                }}
                exit={{
                    x: "-100%",
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
