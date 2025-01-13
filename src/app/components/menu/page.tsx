import Image from "next/image";

import upper from './imgs/upper.png';
import menu01 from './imgs/M1.png';
import rightImg from './imgs/right.png';
import ice from './imgs/ice.png';
import drinks from './imgs/drinks.png';

export default function Menu () {
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
      Our Menu
    </h2>
    <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
      <a href="/" className="text-white hover:text-gray-300">Home</a>
      <span className="text-white"> &gt; </span>
      <a href="/about" className="text-orange-500 hover:text-orange-300">Menu</a>
    </div>
  </div>
  </div>

{/* second section */}
<div className="bg-gray-100 p-4 sm:p-6">
  {/* Section container */}
  <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
    {/* Image */}
    <div className="w-full md:w-1/3">
      <Image
        src={menu01}
        alt="Starter Menu"
        className="rounded-lg shadow-md w-full h-auto"
      />
    </div>
    {/* Menu content */}
    <div className="w-full md:w-2/3">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
        Starter Menu
      </h2>
      <ul className="space-y-6">
        {/* Menu Item 1 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Alder Grilled Chinook Salmon
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              32$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Toasted French bread topped with romano, cheddar
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            560 CAL
          </h3>
        </li>
        {/* Menu Item 2 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-amber-500">
              Berries and creme tart
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              43$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            700 CAL
          </h3>
        </li>
        {/* Menu Item 3 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Tormentoso Bush Pizza Pintoage
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              14$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Ground cumin, avocados, peeled and cubed
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            1000 CAL
          </h3>
        </li>
        {/* Menu Item 4 */}
        <li>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              35$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            560 CAL
          </h3>
        </li>
      </ul>
    </div>
  </div>
</div>

{/* Third section */}
<div className="bg-gray-100 p-4 sm:p-6">
  {/* Section container */}
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
    {/* Menu content */}
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
      Main Course
      </h2>
      <ul className="space-y-6">
        {/* Menu Item 1 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Optic Big Breakfast Combo Menu
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              32$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
          Toasted French bread topped with romano, cheddar
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">560 CAL</h3>
        </li>
        {/* Menu Item 2 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Cashew Chicken With Stir-Fry
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              43$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
          Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">700 CAL</h3>
        </li>
        {/* Menu Item 3 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Vegetables & Green Salad
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              14$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
          Ground cumin, avocados, peeled and cubed
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">1000 CAL</h3>
        </li>
        {/* Menu Item 4 */}
        <li>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Spicy Vegan Potato Curry
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              35$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">560 CAL</h3>
        </li>
      </ul>
    </div>
    {/* Image */}
    <div className="w-full md:w-1/3">
      <Image
        src={rightImg}
        alt="Starter Menu"
        className="rounded-lg shadow-md"
      />
    </div>
  </div>
</div>

{/* Fourth section */}
<div className="bg-gray-100 p-4 sm:p-6">
  {/* Section container */}
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
    {/* Image */}
    <div className="w-full md:w-1/3">
      <Image
        src={ice}
        alt="Starter Menu"
        className="rounded-lg shadow-md"
      />
    </div>
    {/* Menu content */}
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
      Dessert
      </h2>
      <ul className="space-y-6">
        {/* Menu Item 1 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Fig and lemon cake
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              32$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Toasted French bread topped with romano, cheddar
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">560 CAL</h3>
        </li>
        {/* Menu Item 2 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Creamy mascarpone cake
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              43$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">700 CAL</h3>
        </li>
        {/* Menu Item 3 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Pastry, blueberries, lemon juice
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              14$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Ground cumin, avocados, peeled and cubed
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">1000 CAL</h3>
        </li>
        {/* Menu Item 4 */}
        <li>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Pain au chocolat
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base">
              35$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm mt-2">560 CAL</h3>
        </li>
      </ul>
    </div>
  </div>
</div>

{/* fifth section */}
<div className="bg-gray-100 p-4 sm:p-6">
  {/* Section container */}
  <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
    {/* Menu content */}
    <div className="w-full md:w-2/3">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
        Drinks
      </h2>
      <ul className="space-y-6">
        {/* Menu Item 1 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Caffè macchiato
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              32$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Toasted French bread topped with romano, cheddar
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            560 CAL
          </h3>
        </li>
        {/* Menu Item 2 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Aperol Spritz Capacianno
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              43$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            700 CAL
          </h3>
        </li>
        {/* Menu Item 3 */}
        <li className="border-b pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Caffe Latte Campuri
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              14$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Ground cumin, avocados, peeled and cubed
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            1000 CAL
          </h3>
        </li>
        {/* Menu Item 4 */}
        <li>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Tormentoso BushTea Pintoage
            </h3>
            <span className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">
              35$
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <h3 className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
            560 CAL
          </h3>
        </li>
      </ul>
    </div>
    {/* Image */}
    <div className="w-full md:w-1/3">
      <Image
        src={drinks}
        alt="Starter Menu"
        className="rounded-lg shadow-md w-full h-auto"
      />
    </div>
  </div>
</div>

  </div>
    );
}