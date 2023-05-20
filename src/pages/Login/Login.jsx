import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
import img from '../../assets/login/login.png';


const Login = () => {
    const { user, handleLogin, handleGoogleSignin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email, password)
            .then((result) => {
                const loggedUser = result?.user;
                if (loggedUser) {
                    navigate(from, { replace: true });
                    event.target.reset();
                    setSuccess("User Login successfully");
                    toast.success("User Login successfully");
                } else {
                    setError("Failed to login. Please check your credentials.");
                }
            })
            .catch((error) => setError(error.message));
    };

    const handleGoogleLogin = () => {
        handleGoogleSignin()
            .then((result) => {
                const user = result?.user;
                if (user) {
                    navigate(from, { replace: true });
                    setSuccess("User Login successfully");
                    toast.success("User Login successfully");
                } else {
                    setError("Failed to login with Google. Please try again.");
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };



    return (
        <div className="flex justify-center items-center">
            <div className="w-1/2">
                <img src={img} alt="" class="w-full" />
            </div>

            <div className="w-1/2">
            <div className="mt-5 flex flex-col justify-center  min-h-screen overflow-hidden w-full">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                required
                                className="block w-full px-4 py-2 mt-2 text-info bg-white border rounded-md focus:border-info"
                            />
                        </div>
                        <Link to="#" className="text-xs text-info hover:underline">
                            Forget Password?
                        </Link>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                        <div className="absolute px-5 bg-white">Or</div>
                    </div>
                    <div className="flex mt-4 gap-x-2">
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="flex text-info items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1"
                        >
                            <FaGoogle></FaGoogle>
                        </button>

                    </div>

                    <p className="mt-8  font-light text-center text-gray-700">
                        Don't have an account?
                        <Link
                            to="/signup"
                            className="font-medium ml-2 text-info hover:underline"
                        >
                            Please Sign Up
                        </Link>
                    </p>
                    <div className="text-center mt-5">
                        <p className="text-red-700">{error}</p>
                        <p className="text-green-700">{success}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;