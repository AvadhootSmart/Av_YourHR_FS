import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";



export default function Login() {
    const navigate = useNavigate();

    const [LoginUsername, setLoginUsername] = useState("");
    const [RegisterUsername, setRegisterUsername] = useState("");

    const [LoginPassword, setLoginPassword] = useState("");
    const [RegisterPassword, setRegisterPassword] = useState("");

    const [email, setEmail] = useState("");



    async function handleLogin(e) {
        e.preventDefault();

        try {

            const response = await axios.post(`https://av-yourhr-be.vercel.app/login`, {
                username: LoginUsername,
                password: LoginPassword,
            })


            if (response.status === 200) {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                    navigate('/')
                }
                else if (response.data === "Invalid Password") {
                    toast.error('Password Incorrect')
                } else if (response.data === "Invalid Username") {
                    toast.error('Username does not exist')
                }
                else {
                    toast.error('Login failed, please try again')
                }
            }

        } catch (error) {
            console.error('Login Error', error)
            throw error;
        }
    }

    async function handleRegisterSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://av-yourhr-be.vercel.app/register', {
                username: RegisterUsername,
                email: email,
                password: RegisterPassword,
            })

            console.log(response.data)

            if (response.status === 200) {

                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                    navigate('/')
                } else {
                    toast.error('Registration failed, please try again')
                }
            }
        } catch (error) {
            console.error("Error occured while registration", error)
        }
    }
    return (
        <>
            <div className="bg-zinc-900 h-screen w-full flex">
                <Link to={"/"} className="absolute top-10 left-10 text-white border-2 border-white">Go back</Link>
                <div className="login bg-black h-screen w-[50%] text-white font-bold flex justify-center items-center ">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <h1 className="text-4xl font-bold uppercase">Login</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            value={LoginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            className="rounded-md p-2 text-black"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={LoginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="rounded-md p-2 text-black"
                        />
                        <button
                            type="submit"
                            className="border-2 border-white p-2 rounded-md"
                            onClick={handleLogin}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="register h-screen w-[50%] text-white font-bold flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-4xl font-bold uppercase">Register</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            value={RegisterUsername}
                            onChange={(e) => setRegisterUsername(e.target.value)}
                            className="rounded-md p-2 text-black"
                        />
                        <input type="text" placeholder="Email" className="rounded-md p-2 text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={RegisterPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            className="rounded-md p-2 text-black"
                        />
                        <button
                            type="submit"
                            className="border-2 border-white p-2 rounded-md"
                            onClick={handleRegisterSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
}
