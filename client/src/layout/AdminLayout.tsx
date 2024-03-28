// AdminLayout.tsx
import React, { ReactNode } from "react";
import HaderReact from "../components/Navbar/Nav";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <HaderReact />
      <div className="admin-layout">
        {children}
      </div>
    </>
  );
};

export default AdminLayout;