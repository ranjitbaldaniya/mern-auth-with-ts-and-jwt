
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


  const getGoodOrBadString = (n: string) => {
    let vowelsArray = ["a", "e", "i", "o", "u"];

    let Consonants = 0;
    let Vowels = 0;

    for (let i = 0; i < n.length; i++) {
      // console.log(n[i]);

      let charOfString = n[i];

      if (vowelsArray.includes(charOfString)) {
        // console.log("it has vowels")
        Vowels++;
        Consonants = 0;
      } else if (charOfString === "?") {
        Vowels++;
        Consonants++;
      } else {
        Vowels = 0;
        Consonants++;
      }

      if (Consonants > 3 || Vowels > 5) {
        return 1;
      }
    }
    return 0;
  };

  // let result = getGoodOrBadString("bcdaeiou??");

  // console.log("results===>", result);

  // function sieveOfEratosthenes(n: number) {
  //   const primes = [];
  //   const isPrime = new Array(n + 1).fill(true);

  //   // console.log("is prime", isPrime);

  //   isPrime[0] = isPrime[1] = false;

  //   for (let i = 2; i <= n; i++) {
  //     if (isPrime[i]) {
  //       for (let j = i * i; j <= n; j += i) {
  //         isPrime[j] = false;
  //       }
  //     }
  //   }

  //   for (let i = 2; i <= n; i++) {
  //     if (isPrime[i]) {
  //       primes.push(i);
  //     }
  //   }

  //   return primes;
  // }

  // function primePairs(n: number) {
  //   const primes = sieveOfEratosthenes(n);

  //   console.log("prime ===>" , primes)
  //   const pairs = [];

  //   for (let i = 0; i < primes.length; i++) {
  //     for (let j = i; j < primes.length; j++) {
  //       const product = primes[i] * primes[j];
  //       if (product <= n) {
  //         pairs.push([primes[i], primes[j]]);
  //       } else {
  //         break;
  //       }
  //     }
  //   }

  //   return pairs;
  // }

  // // Example usage:
  // const n = 30;
  // console.log(primePairs(n));

  // const getPrimeNumber = (n: number) => {
  //   const primes = [];
  //   const isPrime = new Array(n + 1).fill(true);

  //   console.log("isPrime ===>" , isPrime)
  //   isPrime[0] = isPrime[1] = false;
  //   console.log("isPrime ===>1412" , isPrime)

  //   for (let i = 2; i * i <= n; i++) {
  //     console.log("isPrime ===>141234" , isPrime[i] , [i])

  //       if (isPrime[i]) {
  //           for (let j = i * i; j <= n; j += i) {
  //               isPrime[j] = false;
  //           }
  //       }
  //   }

  //   for (let i = 2; i <= n; i++) {

  //     console.log("isPrime ===>1412345" , isPrime[i] , [i])

  //       if (isPrime[i]) {
  //           for (let j = i; i * j <= n; j++) {
  //               primes.push([i, j]);
  //           }
  //       }
  //   }

  //   return primes;
  // }

  // console.log(getPrimeNumber(30));

  // function isPrime(num: number) {
  //   if (num <= 1) {
  //     return false;
  //   }
  //   if (num <= 3) {
  //     return true;
  //   }
  //   if (num % 2 === 0 || num % 3 === 0) {
  //     return false;
  //   }
  //   for (let i = 5; i * i <= num; i += 6) {
  //     if (num % i === 0 || num % (i + 2) === 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

//   function isPrime(num : number) {
//     if (num <= 1) {
//         return false;
//     }
//     if (num <= 3) {
//         return true;
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//         return false;
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function primeNumbersUpToN(n : number) {
//     const primes = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }
//     return primes;
// }

// Example usage:
// console.log(primeNumbersUpToN(10)); // Output: [2, 3, 5, 7]

  // Example usage:
  // console.log(primeNumbersUpToN(7)); // Output: [2, 3, 5, 7]


   // Define your product data
   const data = [
    {
      title: "HAVIT HV-G92 Gamepad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product1.png",
      categories: ["Computers"],
      color: "black",
      price: 160,
      comparePrice: 180,
      review: 4,
      reviewCount: 88,
      bestSelling: false,
    },
    {
      title: "AK-900 Wired Keyboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product2.png",
      categories: ["Computers"],
      color: "black",
      price: 960,
      comparePrice: 1160,
      review: 5,
      reviewCount: 75,
      bestSelling: false,
    },
    {
      title: "IPS LCD Gaming Monitor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product3.png",
      categories: ["Computers"],
      color: "black",
      price: 370,
      comparePrice: 400,
      review: 3.5,
      reviewCount: 90,
      bestSelling: false,
    },
    {
      title: "S-Series Comfort Chair",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product4.png",
      categories: ["Furniture"],
      color: "black",
      price: 375,
      comparePrice: 400,
      review: 3,
      reviewCount: 95,
      bestSelling: false,
    },
    {
      title: "Breed Dry Dog Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/dog-food.png",
      categories: ["Food"],
      color: "black",
      price: 100,
      comparePrice: 125,
      review: 5,
      reviewCount: 45,
      bestSelling: false,
    },

    {
      title: "The north coat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/jacket.png",
      categories: ["Clothes"],
      color: "black",
      price: 260,
      comparePrice: 360,
      review: 3.5,
      reviewCount: 65,
      bestSelling: true,
    },

    {
      title: "Gucci duffle bag",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/bag.png",
      categories: ["Clothes"],
      color: "black",
      price: 960,
      comparePrice: 1160,
      review: 4.5,
      reviewCount: 55,
      bestSelling: true,
    },
    {
      title: "RGB liquid CPU Cooler",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/music.png",
      categories: ["Furniture"],
      color: "black",
      price: 960,
      comparePrice: 1160,
      review: 4.5,
      reviewCount: 65,
      bestSelling: true,
    },
    {
      title: "Small BookSelf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/table.png",
      categories: ["Furniture"],
      color: "black",
      price: 360,
      comparePrice: 450,
      review: 4,
      reviewCount: 85,
      bestSelling: true,
    },
    {
      title: "Breed Dry Dog Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/dog-food.png",
      categories: ["Food"],
      color: "black",
      price: 100,
      comparePrice: 120,
      review: 4.5,
      reviewCount: 115,
      bestSelling: false,
    },

    {
      title: "CANON EOS DSLR Camera",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/dslr.png",
      categories: ["Computers"],
      color: "black",
      price: 360,
      comparePrice: 400,
      review: 3.5,
      reviewCount: 95,
      bestSelling: false,
    },

    {
      title: "ASUS FHD Gaming Laptop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/laptop.png",
      categories: ["Computers"],
      color: "black",
      price: 700,
      comparePrice: 950,
      review: 3.5,
      reviewCount: 117,
      bestSelling: false,
    },

    {
      title: "Curology Product Set",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/cream.png",
      categories: ["Computers"],
      color: "black",
      price: 500,
      comparePrice: 550,
      review: 4.5,
      reviewCount: 145,
      bestSelling: false,
    },

    {
      title: "Kids Electric Car",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/toy-car.png",
      categories: ["Computers"],
      color: "black",
      price: 960,
      comparePrice: 1100,
      review: 4,
      reviewCount: 65,
      bestSelling: false,
    },
    {
      title: "Jr. Zoom Soccer Cleats",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/sport-shoes.png",
      categories: ["Computers"],
      color: "black",
      price: 1160,
      comparePrice: 1200,
      review: 4.5,
      reviewCount: 65,
      bestSelling: false,
    },
    {
      title: "GP11 Shooter USB Gamepad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/gamepad.png",
      categories: ["Computers"],
      color: "black",
      price: 660,
      comparePrice: 700,
      review: 4.5,
      reviewCount: 55,
      bestSelling: false,
    },
    {
      title: "Quilted Satin Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/jacket_new.png",
      categories: ["Computers"],
      color: "black",
      price: 460,
      comparePrice: 500,
      review: 4.5,
      reviewCount: 95,
      bestSelling: false,
    },
  ];

  // Define your post function
  const postProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/create-multiple", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonResponse = await response.json();
      console.log("Products created:", jsonResponse);
    } catch (error) {
      console.error("Error creating products:", error);
    }
  };
