import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchUser } from "../../utils/Api";
//TData
type User = {
  firstname: string
  lastname: string
  dateOfBirth: number
  mobileNo: number
  gender: number
}
const UserListing = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  console.log("data ==>", data, isLoading);


  return (
    <div>
      <h2 className="text-center font-bold text-sky-500">UserListing</h2>
    </div>
  );
};

export default UserListing;
