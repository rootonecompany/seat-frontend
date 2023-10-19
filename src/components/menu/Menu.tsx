"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { menuState } from "@/recoil/atom";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState);
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <AnimatePresence mode="wait">
            {isMenuOpen && (
                <Block
                    transition={{
                        duration: 0.3,
                    }}
                    initial={{ visibility: "hidden" }}
                    animate={{ visibility: "visible" }}
                    exit={{ visibility: "hidden", transition: { delay: 0.6 } }}
                >
                    <Overlay
                        transition={{
                            duration: 0.3,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.3 } }}
                        onClick={closeMenu}
                    />
                    <Content
                        transition={{
                            duration: 0.3,
                        }}
                        initial={{ x: "100%" }}
                        animate={{
                            x: 0,
                            transition: { x: { delay: 0.15, duration: 0.3 } },
                        }}
                        exit={{ x: "100%" }}
                    >
                        holla
                    </Content>
                </Block>
            )}
        </AnimatePresence>
    );
}

const Block = styled(motion.div)`
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    max-width: 768px;
    height: 100%;
    z-index: 9999;
    overflow-x: hidden;
`;

const Overlay = styled(motion.div)`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 50;
`;

const Content = styled(motion.div)`
    position: absolute;
    right: 0;
    top: 0;
    width: 90%;
    height: 100%;
    background-color: ${Colors.white};
    z-index: 100;
`;
