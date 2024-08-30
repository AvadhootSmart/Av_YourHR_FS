import { useEffect, useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from "react-router-dom";
//import gsap from "gsap";
//import { useGSAP } from "@gsap/react";

//gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [token, setToken] = useState(null);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);
  /*  useGSAP(() => {
            gsap.from(".leftLinks", {
              y: -50,
              opacity: 0,
              duration: 0.5,
              stagger: 0.2,
              ease: "power1",
            });
        
            gsap.from(".button", {
              y: -50,
              opacity: 0,
              duration: 0.5,
              delay: 0.5,
              stagger: 0.2,
              ease: "power1",
            });
        
            gsap.from(".nav", {
              height: 0,
              duration: 0.5,
              ease: "power1",
            });
          });
        */
  return (
    <>
      <div className="nav absolute  top-0 left-0 z-1000 h-[10vh] w-full text-black px-20 flex justify-between items-center bg-[#fcbf49] border-b-4 border-black ">
        <div className=" flex gap-20">
          <div className="flex gap-2 items-center">
            <h1 className="leftLinks font-bold font-cursive text-4xl ">
              YourHR
            </h1>
          </div>
        </div>
        <div className="flex gap-5 ">
          <ul className="flex gap-5 justify-center items-center">
            <Link to={"/"} className=" underline">
              Home
            </Link>
          </ul>
          {token ? (
            <div onClick={handleLogOut}>
              <PrimaryBtn>Logout</PrimaryBtn>
            </div>
          ) : (
            <div className="button">
              <Link to={"/SignUp"}>
                <PrimaryBtn>Sign Up</PrimaryBtn>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
