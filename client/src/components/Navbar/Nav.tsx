import { useState } from "react";
import { Link } from "react-router-dom";

export default function HaderReact() {
  const NavbarList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Register",
      link: "/register",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
  ];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("Home");
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen);
    const closeAfterClick = document.querySelector("#nav-icon4");
    closeAfterClick?.classList?.toggle("open");
  };

  return (
    <>
      <div className="lg:px-14 xl:px-28 bg-sky-500 transition-all duration-700 fixed right-0 left-0 z-50 top-0">
        <div className="flex justify-between w-full max-w-screen-3xl mx-auto font-semibold h-20 px-5">
          <div className="flex items-center gap-3 md:gap-4 mr-5">
            <h2 className="text-3xl font-bold uppercase cursor-pointer">
              Lo<span className="text-white">go</span>
            </h2>
          </div>
          <div className="flex items-center sm:gap-3 md:gap-8">
            <div className="group" onClick={() => setSelected("Home")}>
              <span className="font-nunito text-lg text-center font-semibold text-white opacity-80 cursor-pointer md:flex md:items-center hidden">
                <Link to="/"> Home</Link>
              </span>
              <div
                className={`w-full h-0.5 ${
                  selected == "Home"
                    ? "bg-white opacity-80"
                    : "group-hover:bg-white group-hover:opacity-80"
                }`}
              ></div>
            </div>

            <div className="group" onClick={() => setSelected("Login")}>
              <span className="font-nunito text-lg text-center font-semibold text-white opacity-80 cursor-pointer md:flex md:items-center hidden">
                <Link to="/login"> Login</Link>
              </span>
              <div
                className={`w-full h-0.5 ${
                  selected == "Login"
                    ? "bg-white opacity-80"
                    : "group-hover:bg-white group-hover:opacity-80"
                }`}
              ></div>
            </div>
            <div className="group" onClick={() => setSelected("Register")}>
              <span className="font-nunito text-lg text-center font-semibold text-white opacity-80 cursor-pointer md:flex md:items-center hidden">
                <Link to="/register"> Register</Link>
              </span>
              <div
                className={`w-full h-0.5 ${
                  selected == "Register"
                    ? "bg-white opacity-80"
                    : "group-hover:bg-white group-hover:opacity-80"
                }`}
              ></div>
            </div>
            <button
              className="w-12 h-12 relative focus:outline-none md:hidden"
              onClick={() => {
                toggleClass();
                setToggle(!toggle);
              }}
            >
              <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                    toggle ? "rotate-45" : "-translate-y-1.5"
                  }  
                  `}
                ></span>
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                    toggle && "opacity-0"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                    toggle ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
          <div
            className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center fixed left-0 top-11 ${
              toggle ? "visible z-20" : "invisible -z-10"
            }`}
          >
            <div
              className={`w-full h-full bg-[#365CCE] absolute left-0 transition-all duration-300 ease-in-out top-8 ${
                toggle ? "ssm:w-3/5 opacity-60" : "ssm:w-0 -z-10"
              }`}
            ></div>
            <div
              data-tilt
              data-tilt-perspective="2000"
              className="relative z-20 text-center pt-24 w-full ssm:w-3/5"
            >
              <div
                className={`block min-h-[130px] w-fit mx-auto transform transition ${
                  toggle
                    ? "opacity-100 -translate-y-1/3 delay-[0.45s]"
                    : "opacity-0 -translate-y-0  delay-[0s]"
                }`}
              >
                <ul
                  className={`transition w-fit flex flex-col gap-5 my-5 ${
                    toggle ? "delay-[0.45s]" : "delay-[0s]"
                  }`}
                >
                  {NavbarList.map((data, index) => (
                    <>
                      <span
                        className="font-semibold text-white text-opacity-100 text-center cursor-pointer px-2 md:hidden"
                        key={index}
                      >
                        <Link to={data.link}> {data.name} </Link>
                      </span>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
