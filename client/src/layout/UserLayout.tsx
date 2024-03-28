// UserLayout.tsx
import React, { ReactNode } from "react";
import HaderReact from "../components/Navbar/Nav";

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <HaderReact />
      <div className="user-layout">
        {children}
      </div>
    </>
  );
};

export default UserLayout;
