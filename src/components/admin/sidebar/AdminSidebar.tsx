import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <div
      style={{
        left: "0",
        maxHeight: "100%",
        minHeight: "100%",
        minWidth: "200px",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link href={"/admin"}>
        <h1 style={{ fontSize: "30px", padding: "37px 25px" }}>TicketPang</h1>
      </Link>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <Link href={"/admin/register"}>등록</Link>
        </div>
        <div>AdminSidebar</div>
        <div>AdminSidebar</div>
        <div>AdminSidebar</div>
      </div>
    </div>
  );
};

export default AdminSidebar;
