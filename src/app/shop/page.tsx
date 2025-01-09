import Image from "next/image";

import upper from "./imgs/upper.png";
import shopsec1 from "./imgs/shopSec1.png";
import shopsec2 from "./imgs/shopSec2.png";
import shopsec3 from "./imgs/shopSec3.png";

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
          <div className="bg-white shadow-md p-2 rounded mb-6">
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
          <div>image</div>
          <div className="bg-white shadow-md p-4 mb-6 mt-2">
            <h3 className="text-xl font-bold mb-4 text-gray-600">Filter By Price</h3>
            <input type="range" min="0" max="8000" className="w-full mb-2" />
            <p className="text-gray-600">From $0 - $8000 <span className="ml-6">Filter</span></p>
          </div>
          <div>Latest Product</div>
          <div>Product Tag</div>
        </aside>

        {/* Main Content Section */}
        <main className="w-full lg:w-5/6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={shopsec1} alt="fresh" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Fresh Lime</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={shopsec2} alt="Muffin" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-l mb-1 text-gray-600">Chocolate Muffine</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={shopsec3} alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-800">Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/burger.jpg" alt="Burger" className="w-312 h-267 object-cover" />
              <div className="p-4">
                <h3 className="text-lg mb-1 text-gray-600">Classic Burger</h3>
                <p className="text-amber-600 mb-4">$9.99</p>
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