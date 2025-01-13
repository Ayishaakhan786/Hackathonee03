import Image from "next/image";

import upper from "./imgs/upper.png";
import shopsec1 from "./imgs/shopSec1.png";
import shopsec2 from "./imgs/shopSec2.png";
import shopsec3 from "./imgs/shopSec3.png";
import shopsec7 from "./imgs/shopSec7.png";
import shopsec8 from "./imgs/shopSec8.png";
import shopsec9 from "./imgs/shopSec9.png";
import foodCard from "./imgs/foodCard.png";
import LatestProduct from "./imgs/latestProducts.png";

import { CiSearch } from "react-icons/ci";

export default function Shop() {
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
            Our Shop
          </h2>
          <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500 hover:text-orange-300">Shop</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row-reverse gap-6">
        {/* Sidebar Section */}
        <aside className="w-full lg:w-1/4">
          <div>
            {/* Search Bar */}
            <div className="rounded mb-2 text-black">
              <div className="flex items-center border bg-orange-200">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full px-4 py-2 bg-transparent border-none focus:outline-none"
                />
                <span className="px-2 text-white bg-orange-500 h-full w-46">
                  <CiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-2 mb-6">
            <h3 className="text-xl font-bold mb-4 text-black">Category</h3>
            <ul>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="burgers"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="burgers" className="text-black hover:text-orange-500 cursor-pointer">
                  Sandwiches
                </label>
              </li>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="drinks"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="drinks" className="text-black hover:text-orange-500 cursor-pointer">
                  Burger
                </label>
              </li>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="pizzas"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="pizzas" className="text-black hover:text-orange-500 cursor-pointer">
                  Chicken Chup
                </label>
              </li>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="pizzas"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="pizzas" className="text-black hover:text-orange-500 cursor-pointer">
                  Drink
                </label>
              </li>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="pizzas"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="pizzas" className="text-black hover:text-orange-500 cursor-pointer">
                  Pizza
                </label>
              </li>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="pizzas"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="pizzas" className="text-black hover:text-orange-500 cursor-pointer">
                  Thi
                </label>
              </li>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="pizzas"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="pizzas" className="text-black hover:text-orange-500 cursor-pointer">
                  Non Veg
                </label>
              </li>
              <li className="flex items-center py-2">
                <input
                  type="checkbox"
                  id="pizzas"
                  className="mr-2 w-4 h-4 accent-orange-500"
                />
                <label htmlFor="pizzas" className="text-black hover:text-orange-500 cursor-pointer">
                  Uncategorized
                </label>
              </li>
            </ul>
          </div>

          <div className="relative w-80 h-96 bg-white text-white shadow-lg overflow-hidden pr-6">
            <Image
              src={foodCard}
              alt="Classic Restaurant"
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 opacity-90"></div>
            <div className="absolute top-4 left-4">
              <h3 className="text-lg font-semibold">Perfect Taste</h3>
              <h1 className="text-2xl font-bold mt-1">Classic Restaurant</h1>
              <p className="text-xl font-medium mt-2 text-amber-500 font-semibold">45.00$</p>
              <button className="mt-4 px-2 py-2 text-white font-bold rounded flex items-center hover:bg-gray-500">
                Shop Now
                <span className="ml-2">➔</span>
              </button>
            </div>
          </div>

          <div className="bg-white shadow-md p-4 mb-4 mt-2">
            <h3 className="text-xl font-bold mb-4 text-gray-600">Filter By Price</h3>
            <input type="range" min="0" max="8000" className="w-full mb-2" />
            <p className="text-gray-600">From $0 - $8000 <span className="ml-6">Filter</span></p>
          </div>

          <div className="p-4 bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest Products</h2>
            <div className="flex items-center mb-4">
              <Image src={LatestProduct} alt="Pizza" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-black">Pizza</h3>
                <p className="text-yellow-500">⭐⭐</p>
                <p className="text-black">$35.00</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src={LatestProduct}
                alt="Cupcake"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-lg font-medium text-black">Cupcake</h3>
                <p className="text-yellow-500">⭐⭐⭐</p>
                <p className="text-black">$35.00</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src={LatestProduct}
                alt="Cookies"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-lg font-medium text-black">Cookies</h3>
                <p className="text-yellow-500">⭐⭐⭐</p>
                <p className="text-black">$35.00</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src={LatestProduct}
                alt="Cookies"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-lg font-medium text-black">Burger</h3>
                <p className="text-yellow-500">⭐⭐⭐</p>
                <p className="text-black">$35.00</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Product Tags</h2>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Services
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Our Menu
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Pizza
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Cupcake
              </a>
              <a href="#" className="text-orange-600 hover:text-orange-300 underline">
                Burger
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Cookies
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Our Shop
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                Tandoori Chicken
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Section */}
        <main className="w-full lg:w-5/6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-2">
            {/* Product Card */}
            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec1} alt="fresh" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Fresh Lime</h3>
                <p className="text-amber-600 mb-4">$38.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec2} alt="Muffin" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-l mb-1 text-gray-600">Chocolate Muffine</h3>
                <p className="text-amber-600 mb-4">$28.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec3} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-800">Burger</h3>
                <p className="text-amber-600 mb-4">$21.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec7} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Cheese Butter</h3>
                <p className="text-amber-600 mb-4">$10.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec8} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Sandwiches</h3>
                <p className="text-amber-600 mb-4">$25.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec9} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Chicken Chup</h3>
                <p className="text-amber-600 mb-4">$12.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec1} alt="fresh" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Fresh Lime</h3>
                <p className="text-amber-600 mb-4">$38.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec2} alt="Muffin" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-l mb-1 text-gray-600">Chocolate Muffine</h3>
                <p className="text-amber-600 mb-4">$28.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec3} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-800">Burger</h3>
                <p className="text-amber-600 mb-4">$21.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec7} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Cheese Butter</h3>
                <p className="text-amber-600 mb-4">$10.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec8} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Sandwiches</h3>
                <p className="text-amber-600 mb-4">$25.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden">
              <Image src={shopsec9} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Chicken Chup</h3>
                <p className="text-amber-600 mb-4">$12.00</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Repeat this structure for each product */}
          </div>
        </main>
      </div >

    </div >
  );
}