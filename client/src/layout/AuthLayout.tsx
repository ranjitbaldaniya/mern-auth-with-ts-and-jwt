// AuthLayout.tsx
import React, { ReactNode } from "react";
import HaderReact from "../components/Navbar/Nav";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <HaderReact />
      <div className="auth-layout">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
