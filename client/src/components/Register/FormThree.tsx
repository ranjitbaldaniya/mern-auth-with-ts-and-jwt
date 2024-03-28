import React from "react";
import { FormWrapper } from "./FormWrapper";

type UserData = {
  email: string;
  password: string;
  gender: string;
  mobileNo: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const FormThree = ({
  email,
  mobileNo,
  password,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="Contact Details">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        className=" border p-2 rounded mb-3 w-full"
      />

      <label>Mobile Number</label>
      <input
        required
        type="number"
        value={mobileNo}
        onChange={(e) => updateFields({ mobileNo: e.target.value })}
        className=" border p-2 rounded mb-3 w-full"
      />

      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        className=" border p-2 rounded mb-3 w-full"
      />
    </FormWrapper>
  );
};

export default FormThree;
