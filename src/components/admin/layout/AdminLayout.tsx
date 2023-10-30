import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
      }}
    >
      {children}
    </div>
  );
};

export default AdminLayout;
