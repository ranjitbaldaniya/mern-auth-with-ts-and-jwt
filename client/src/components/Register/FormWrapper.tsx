import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-center font-bold text-sky-500">{title}</h2>
      <div className="flex flex-col flex-wrap justify-center w-80  m-auto">
        {children}
      </div>
    </>
  );
}
