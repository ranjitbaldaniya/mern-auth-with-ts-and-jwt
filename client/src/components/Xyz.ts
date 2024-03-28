
  // const fetchUser = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/users");
  //     console.log("res" , response)
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  //  const res = fetchUser()
  // console.log("data ==>", res);

  // function factorial(n: number): number {
  //   if (n <= 1) return 1;

  //   return n * factorial(n - 1);
  // }

  // let res: number = factorial(8);

  // console.log("res", res);

  // let name: string = "raNjit baldaNiya is a Mern stack developer";

  export function getFirtsLatterCamelCase(name: string) {
    let splitName = name.split(" ");
    console.log("splitname", splitName);
    let camelCaseString = "";

    for (let i = 0; i < splitName.length; i++) {
      console.log("i", splitName[i]);
      const word = splitName[i];

      let camelWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

      camelCaseString = camelCaseString + camelWord + " ";
    }
    return camelCaseString;
  }
  // let updated = getFirtsLatterCamelCase(name);
  // console.log("123", updated);

  //   function getMaxLenghthWord(name: string) {
  //     let splitedName = name.split(" ");
  //     console.log("splitname", splitedName);

  //     let maxLength = "";

  //     let eachName = splitedName.forEach((word) => {
  //       console.log("word", word);

  //       if (word.length >= maxLength.length) {
  //         maxLength = word;
  //       }
  //     });
  //     return maxLength;
  //   }

  //  console.log("123" ,  getMaxLenghthWord(name))