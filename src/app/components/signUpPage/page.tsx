'use client';

import Image from "next/image";

import upper from "./img/upper.png";
import { FaApple, FaGoogle } from "react-icons/fa";

export default function signUp() {
    return (
        <div>
            {/* First Section: Image and Breadcrumb */}
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <Image
                    src={upper}
                    alt="Banner Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        SignUp Page
                    </h2>
                    <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                        <span className="text-white"> &gt; </span>
                        <a href="/about" className="text-orange-500 hover:text-orange-300">signUpPage</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
                {/* Sign Up Form */}
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md mt-3 mb-3">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Sign Up
                    </h2>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    {/* Remember Me */}
                    <div className="flex items-center mb-6">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm text-gray-600">
                            Remember me
                        </label>
                    </div>
                    {/* Submit Button */}
                    <button className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition">
                        Sign Up
                    </button>
                    {/* Forgot Password */}
                    <p className="text-sm text-gray-500 text-center mt-4">
                        <a href="#" className="text-orange-400 hover:underline">
                            Forgot password?
                        </a>
                    </p>
                    {/* Divider */}
                    <div className="flex items-center justify-center my-6">
                        <div className="h-px w-full bg-gray-300" />
                        <span className="mx-3 text-sm text-gray-500">OR</span>
                        <div className="h-px w-full bg-gray-300" />
                    </div>
                    {/* Google Button */}
                    <button className="flex items-center justify-center w-full py-2 mb-3 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                        <FaGoogle className="w-5 h-5 mr-3 ml-5 text-black" />
                        <span className="text-sm font-medium text-gray-700">
                            Sign up with Google
                        </span>
                    </button>
                    {/* Apple Button */}
                    <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                        <FaApple className="w-5 h-5 mr-3 text-black" />
                        <span className="text-sm font-medium text-gray-700">
                            Sign up with Apple
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}