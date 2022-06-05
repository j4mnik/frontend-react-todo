import {Link} from "react-router-dom";
import render1 from "./assets/add.png";
import render2 from "./assets/prioritize.png";
import render3 from "./assets/done.png";
import {useState} from "react";

function Login() {
    const [indentify, setIdentify] = useState("");

    return (
        <div className="flex flex-col">
            <div className="md:flex">
                <div className="w-full md:w-2/5 h-screen bg-white">
                    <h1 className="font-semibold text-indigo-700 text-2xl p-10">Todo App</h1>
                    <div className="p-10 flex flex-col justify-center">
                        <div className="py-2">
                            <h1 className="text-xl font-semibold text-black">Log in</h1>
                        </div>
                        <div className="py-2">
                            <h1 className="text-md text-black">Enter your credentials</h1>
                        </div>
                        <div className="py-2">
                            <h1 className="text-md text-red-600">{indentify}</h1>
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full md:w-2/3 px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full md:w-2/3 px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex ">
                            <div className="my-4 mr-2">
                                <button
                                    onClick={() => setIdentify("Incorrect Email or Password")}
                                    type="button"
                                    className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                                >Login
                                </button>
                            </div>
                            <div className="my-4">
                                <Link to="/home">
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-3.5 text-gray-600 font-semibold text-sm rounded-lg underline hover:text-gray-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >Continue as a guest
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full md:w-3/5 h-screen grid items-center text-center bg-gradient-to-r from-indigo-500 to-indigo-700">
                    <div className="md:p-10 p-4 py-8">
                        <span
                            className="animate-ping absolute flex flex-col md:w-8 md:h-8 w-5 h-5 rounded-full bg-indigo-800 opacity-75"/>
                        <h1 className="font-semibold text-white text-2xl text-left">What does this app offer?</h1>
                        <h1 className="font-normal text-white text-xl text-left mt-4">It's simple Todo app. You can
                            add and remove your work&life tasks.</h1>
                        <h1 className="font-normal text-white text-xl text-left mt-4">Just start use it and see how
                            easy it is.</h1>
                    </div>
                    <div className="grid grid-cols-3 text-center justify-end">
                        <div className="flex flex-col items-center p-2">
                            <img src={render1} className="md:w-2/3  rounded-xl"/>
                            <h1 className="text-white font-normal text-lg py-4">Add tasks with one click</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img src={render2} className="md:w-2/3 rounded-xl"/>
                            <h1 className="text-white font-normal text-lg py-4">Set importance your tasks</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img src={render3} className="md:w-2/3 rounded-xl"/>
                            <h1 className="text-white font-normal text-lg py-4">Make all your tasks done</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-800">
                <div className="p-10 pt-12">
                    <h1 className="font-semibold text-white text-2xl">About project</h1>
                    <div className="flex flex-wrap py-10 items-center justify-self-center">
                        <div className="bg-indigo-500 p-10 mr-4 my-4 rounded-xl hover:animate-pulse">
                            <h1 className="font-normal text-white text-lg">App created in React.js and Django
                                framework.</h1>
                        </div>
                        <div className="bg-indigo-500 p-10 mr-4 my-4 rounded-xl hover:animate-pulse">
                            <h1 className="font-normal text-white text-lg">Examples of the other libraries used in the
                                app: TailwindCSS, React-Router, Axios, Modal</h1>
                        </div>
                        <div className="bg-indigo-500 p-10 mr-4 my-4 rounded-xl hover:animate-pulse">
                            <a className="font-normal text-white text-lg underline"
                               href="https://github.com/j4mnik">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
