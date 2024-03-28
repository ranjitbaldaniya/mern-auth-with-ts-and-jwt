


export const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      // console.log("data", data);
      return data; // Return the fetched data
    } catch (error) {
      console.log("error", error);
      throw error; // Rethrow the error so React Query can catch it
    }
  };
  