import { FormWrapper } from "./FormWrapper";

type AddressData = {
  address1: string;
  address2: string;
  state: string;
  country: string;
};

type FormTwoProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function FromTwo({
  address1,
  address2,
  state,
  country,
  updateFields,
}: FormTwoProps) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={address1}
        onChange={(e) => updateFields({ address1: e.target.value })}
        className=" border p-2 rounded mb-3 w-full"
      />
      <label>Address</label>
      <textarea
        required
        value={address2}
        onChange={(e) => updateFields({ address2: e.target.value })}
        className="border rounded p-2 mb-3 w-full"
      />

      <div className="flex space-x-4 w-full">
        <div className="w-1/2">
          <label>State</label>
          <input
            required
            type="text"
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
            className="border rounded p-2 mb-3 w-full"
          />
        </div>
        <div className="w-1/2">
          {" "}
          <label>Country</label>
          <input
            required
            type="text"
            value={country}
            onChange={(e) => updateFields({ country: e.target.value })}
            className="border rounded p-2 mb-3 w-full"
          />
        </div>
      </div>
    </FormWrapper>
  );
}
