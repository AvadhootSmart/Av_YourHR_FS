import PrimaryBtn from "../components/PrimaryBtn";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <div className="h-screen  w-full bg-gradient-to-t from-zinc-900 to-zinc-800 flex justify-center items-center text-white">
                <div className="w-[70%] text-center">
                    <h1 className="text-[3.5rem] font-bold capitalize ">
                        Find your dream job with YourHR
                    </h1>
                    <p className="text-xl mt-10">
                        YourHR is the ultimate job search service that connects job seekers
                        with their ideal job roles based on their qualifications and
                        preferences. With our user-friendly platform and extensive database,
                        finding the perfect job has never been easier.
                    </p>
                    <div className="mt-10">
                        <Link
                            to={"/SignUp"}
                            className="bg-white text-black px-4 py-2 text-xl"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
