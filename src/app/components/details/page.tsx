import Image from "next/image";
import Link from "next/link";

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
import bloggs01 from "../img/blog-secside04 (1).png";
import bloggs02 from "../img/blog-secside04 (2).png";
import bloggs03 from "../img/blog-secside04 (3).png";
import bloggs04 from "../img/blog-secside04 (4).png";
import bloggs05 from "../img/blog-secside04 (5).png";
import blogsecLeft01 from "../img/blogSec-left (1).png";

import { FaFacebook, FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

export default function details() {
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
                        Blog Details
                    </h2>
                    <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
                        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                        <span className="text-white"> &gt; </span>
                        <Link href="../components/details" className="text-orange-500 hover:text-orange-300">Blog Details</Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 p-2">
                {/* Left Section */}
                <div className="w-full md:max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4">
                    {/* Image Section */}
                    <div className="relative">
                        <Image
                            src={blogsecLeft01}
                            alt="Tacos"
                            width={800}
                            height={400}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-2 py-1 rounded">
                            14
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 md:p-6">
                        <div className="flex flex-wrap items-center text-gray-500 text-sm gap-2">
                            <span>📅 Feb 14, 2022</span>
                            <span>💬 12 Comments</span>
                            <span>📖 5 min read</span>
                        </div>

                        <h2 className="mt-2 text-lg md:text-xl font-semibold text-gray-800">
                            10 Reasons To Do A Digital Detox Challenge
                        </h2>

                        <p className="mt-2 text-gray-600 text-sm md:text-base">
                            Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.
                        </p>
                        <p className="mt-6 text-gray-600 text-sm md:text-base">
                            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
                            Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat
                            himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
                        </p>
                    </div>
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
                            <Link
                                href="https://www.facebook.com/me/"
                                className="text-gray-500 hover:text-gray-700 transition duration-200"
                            >
                                <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                            <Link
                                href="https://www.twitter.com"
                                className="text-gray-500 hover:text-gray-700 transition duration-200"
                            >
                                <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/bugs____bunnyyyy__/?__pwa=1#"
                                className="text-gray-500 hover:text-gray-700 transition duration-200"
                            >
                                <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-700 transition duration-200"
                            >
                                <FaPinterest className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
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

                    <div className="mt-3 rounded-lg max-w-4xl mx-auto p-4 bg-white">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Photo Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <Image
                                src={bloggs05}
                                alt="Pizza"
                                className="w-full h-auto shadow-lg object-cover"
                            />
                            <Image
                                src={bloggs02}
                                alt="Placeholder"
                                className="w-full h-auto shadow-lg object-cover"
                            />
                            <Image
                                src={bloggs03}
                                alt="Dish"
                                className="w-full h-auto shadow-lg object-cover"
                            />
                            <Image
                                src={bloggs04}
                                alt="Pizza"
                                className="w-full h-auto shadow-lg object-cover"
                            />
                            <Image
                                src={bloggs04}
                                alt="Dish"
                                className="w-full h-auto shadow-lg object-cover"
                            />
                            <Image
                                src={bloggs01}
                                alt="Pancakes"
                                className="w-full h-auto shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center py-6 bg-white mt-3">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Follow Us</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* Twitter Icon */}
                            <Link
                                href="https://www.twitter.com"
                                className="text-gray-600 hover:text-blue-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
                            </Link>
                            {/* YouTube Icon */}
                            <Link
                                href="https://www.youtube.com/@Buggs_____________bunnyyy"
                                className="text-gray-600 hover:text-red-500 transition-colors"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="w-6 h-6 md:w-8 md:h-8" />
                            </Link>
                            {/* Pinterest Icon */}
                            <Link
                                href="https://www.pinterest.com"
                                className="bg-yellow-500 p-2 rounded-full text-white hover:bg-yellow-600 transition-colors"
                                aria-label="Pinterest"
                            >
                                <FaPinterest className="w-6 h-6 md:w-8 md:h-8" />
                            </Link>
                            {/* Instagram Icon */}
                            <Link
                                href="https://www.instagram.com/bugs____bunnyyyy__/?__pwa=1#"
                                className="text-gray-600 hover:text-pink-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
                            </Link>
                            {/* Facebook Icon */}
                            <Link
                                href="https://www.facebook.com/me/"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
                            </Link>
                        </div>
                    </div>


                    <div>
                    </div>
                </div>

            </div>
        </div>
    );
}