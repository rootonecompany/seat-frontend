import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/StyleRegistry";
import RecoilProvider from "@/lib/RecoilProvider";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import Modal from "@/components/modal/Modal";
import Menu from "@/components/menu/Menu";
import BasicLayout from "@/components/layout/BasicLayout";
import { GlobalStyle } from "@/styles/GlobalStyle";

const pretendard = localFont({
    src: "../../public/fonts/PretendardVariable.ttf",
});

export const metadata: Metadata = {
    title: "티켓팡 (TicketPang)",
    description: "티켓팡(TicketPang): 편리한 티켓 예매와 최신 이벤트 정보",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={pretendard.className}>
                <RecoilProvider>
                    <ReactQueryProvider>
                        <StyledComponentsRegistry>
                            <GlobalStyle />
                            <BasicLayout>{children}</BasicLayout>
                            <Modal />
                            <Menu />
                        </StyledComponentsRegistry>
                    </ReactQueryProvider>
                </RecoilProvider>
            </body>
            <Script src="https://cdn.iamport.kr/v1/iamport.js" />
        </html>
    );
}
