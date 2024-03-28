import React from "react";
import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  gender: string;
  mobileNo: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const FormOne = ({
  firstname,
  lastname,
  gender,
  dateOfBirth,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <div className="w-full">
        <label className="block mb-2 w-full" htmlFor="firstname">
          First Name:
        </label>
        <input
          className="w-full border p-2 rounded"
          autoFocus
          required
          type="text"
          value={firstname}
          onChange={(e) => updateFields({ firstname: e.target.value })}
        />
      </div>
      <div className="w-full">
        <label className="block mb-2 w-full" htmlFor="firstname">
          Last Name:
        </label>
        <input
          className="w-full border p-2 rounded mb-3"
          required
          type="text"
          value={lastname}
          onChange={(e) => updateFields({ lastname: e.target.value })}
        />
      </div>

      <div className="flex w-full space-x-4 ">
        <div className="w-1/2">
          <label className="block mb-2" htmlFor="gender">
            Gender:
          </label>
          <select
            className="w-full border p-2 rounded mb-3"
            id="gender"
            value={gender}
            onChange={(e) => updateFields({ gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-1/2">
          <label className="block mb-2" htmlFor="dateOfBirth">
            Date of Birth:
          </label>
          <input
            className="w-full border p-2 rounded mb-3"
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => updateFields({ dateOfBirth: e.target.value })}
          />
        </div>
      </div>


    </FormWrapper>
  );
};

export default FormOne;
