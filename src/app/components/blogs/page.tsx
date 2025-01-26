
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

import upper from "../about/img/upper.png";
import men from "../img/blog-side-1.png";
import blogSecSide01 from "../img/blog-sideSec-2 (1).png";
import blogSecSide02 from "../img/blog-sideSec-2 (2).png";
import blogSecSide03 from "../img/blog-sideSec-2 (3).png";
import blogSecSide04 from "../img/blog-sideSec-2 (4).png";
import bogeSecSide001 from "../img/blog-secSide-3 (1).png";
import bogeSecSide002 from "../img/blog-secSide-3 (2).png";
import bogeSecSide003 from "../img/blog-secSide-3 (3).png";
import bogeSecSide004 from "../img/blog-secSide-3 (4).png";
import bogeSecSide005 from "../img/blog-secSide-3 (5).png";

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
                <div className="w-full md:w-1/3 p-6 mt-2">
                    <div className="bg-white shadow-md p-2">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search Your Keyword"
                            className="w-full p-1 border border-gray-300 mb-1 focus:outline-none focus:ring focus:ring-gray-200"
                        />
                    </div>
                    <div className="text-center w-full p-4 mt-2 bg-white">
                        {/* Profile Image */}
                        <Image
                            src={men}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                        {/* Name */}
                        <h2 className="text-xl font-semibold mt-2 text-gray-800">Prince Miyako</h2>
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

                    <div className="p-4 bg-white rounded-lg shadow-md mt-2 md:p-6">
                        <h2 className="text-lg font-bold mb-4 text-gray-800 sm:text-xl">Recent Post</h2>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 sm:space-x-6">
                                <Image
                                    src={blogSecSide04}
                                    alt="Post 1"
                                    className="w-12 h-12 rounded-md object-cover sm:w-16 sm:h-16"
                                />
                                <div>
                                    <p className="text-xs text-gray-500 sm:text-sm">June 22, 2020</p>
                                    <p className="text-xs text-gray-700 mt-2 sm:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 sm:space-x-6">
                                <Image
                                    src={blogSecSide03}
                                    alt="Post 2"
                                    className="w-12 h-12 rounded-md object-cover sm:w-16 sm:h-16"
                                />
                                <div>
                                    <p className="text-xs text-gray-500 sm:text-sm">June 22, 2020</p>
                                    <p className="text-xs text-gray-700 mt-2 sm:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 sm:space-x-6">
                                <Image
                                    src={blogSecSide02}
                                    alt="Post 3"
                                    className="w-12 h-12 rounded-md object-cover sm:w-16 sm:h-16"
                                />
                                <div>
                                    <p className="text-xs text-gray-500 sm:text-sm">June 22, 2020</p>
                                    <p className="text-xs text-gray-700 mt-2 sm:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 sm:space-x-6">
                                <Image
                                    src={blogSecSide01}
                                    alt="Post 4"
                                    className="w-12 h-12 rounded-md object-cover sm:w-16 sm:h-16"
                                />
                                <div>
                                    <p className="text-xs text-gray-500 sm:text-sm">June 22, 2020</p>
                                    <p className="text-xs text-gray-700 mt-2 sm:text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg shadow-md bg-white mt-3">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 text-center md:text-left">
                            Filter By Menu
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex flex-col sm:flex-row items-center sm:justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={bogeSecSide001}
                                        alt="Chicken Fry"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
                                    />
                                    <span className="ml-4 text-base sm:text-lg text-gray-700 font-bold">Chicken Fry</span>
                                </div>
                                <span className="mt-2 sm:mt-0 text-base sm:text-lg font-bold text-gray-600">26</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={bogeSecSide002}
                                        alt="Burger Food"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
                                    />
                                    <span className="ml-4 text-base sm:text-lg text-gray-700 font-bold">Burger Food</span>
                                </div>
                                <span className="mt-2 sm:mt-0 text-base sm:text-lg font-bold text-gray-600">46</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={bogeSecSide003}
                                        alt="Pizza"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
                                    />
                                    <span className="ml-4 text-base sm:text-lg text-gray-700 font-bold">Pizza</span>
                                </div>
                                <span className="mt-2 sm:mt-0 text-base sm:text-lg font-bold text-gray-600">16</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={bogeSecSide004}
                                        alt="Fresh Fruits"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
                                    />
                                    <span className="ml-4 text-base sm:text-lg text-gray-700 font-bold">Fresh Fruits</span>
                                </div>
                                <span className="mt-2 sm:mt-0 text-base sm:text-lg font-bold text-gray-600">36</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={bogeSecSide005}
                                        alt="Vegetables"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md"
                                    />
                                    <span className="ml-4 text-base sm:text-lg text-gray-700 font-bold">Vegetables</span>
                                </div>
                                <span className="mt-2 sm:mt-0 text-base sm:text-lg font-bold text-gray-600">16</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 border border-gray-300 rounded-lg text-center mt-3 bg-white">
                        <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-800">Popular Tags</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Sandwich
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Tikka
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Bbq
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Restaurant
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Chicken Sharma
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Health
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Fastfood
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Food
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Pizza
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Burger
                            </div>
                            <div className="px-2 py-1 border border-gray-300 rounded text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800">
                                Chicken
                            </div>
                        </div>
                    </div>





                    <div>
                    </div>
                </div>

            </div>
        </div >
    );
}