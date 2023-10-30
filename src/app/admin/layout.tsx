import AdminLayout from "@/components/admin/layout/AdminLayout";
import AdminNavigation from "@/components/admin/navigation/AdminNavigation";
import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.ttf",
});

export const metadata: Metadata = {
  title: "티켓팡 관리자(TicketPang)",
  description: "티켓팡(TicketPang): 편리한 티켓 예매와 최신 이벤트 정보",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayout>
      <AdminNavigation />
      <AdminSidebar />
      {children}
    </AdminLayout>
  );
}
