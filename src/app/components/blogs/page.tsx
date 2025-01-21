
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

import upper from "../about/img/upper.png";
import men from "../img/blog-side-1.png";
import Link from "next/link";

export default function Blogs() {
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
                        Blog List
                    </h2>
                    <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
                        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                        <span className="text-white"> &gt; </span>
                        <Link href="/blogs" className="text-orange-500 hover:text-orange-300">Blog</Link>
                    </div>
                </div>
            </div>

            {/* right side sections */}
            <div className="flex flex-col md:flex-row">
                {/* Left Side */}
                <div className="flex-1 p-4">
                    <h1>Main Content</h1>
                    <p>Yahan aapka main content hoga.</p>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/3 p-4 mt-2">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search Your Keyword"
                            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-gray-200"
                        />
                        <div className="text-center">
                            {/* Profile Image */}
                            <Image
                                src={men}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                            {/* Name */}
                            <h2 className="text-xl font-semibold mt-2">Prince Miyako</h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                Blogger | Photographer
                            </p>
                            {/* Rating Stars */}
                            <div className="flex justify-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-sm md:text-base">
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            {/* Description */}
                            <p className="text-gray-500 mt-2 text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Veritatis distinctio, odio eligendi suscipit reprehenderit atque.
                            </p>
                            {/* Social Media Icons */}
                            <div className="flex justify-center space-x-4 mt-4">
                                <a
                                    href="https://www.facebook.com/me/"
                                    className="text-gray-500 hover:text-gray-700 transition duration-200"
                                >
                                    <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                                <a
                                    href="https://www.twitter.com"
                                    className="text-gray-500 hover:text-gray-700 transition duration-200"
                                >
                                    <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/bugs____bunnyyyy__/?__pwa=1#"
                                    className="text-gray-500 hover:text-gray-700 transition duration-200"
                                >
                                    <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-gray-700 transition duration-200"
                                >
                                    <FaPinterest className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}