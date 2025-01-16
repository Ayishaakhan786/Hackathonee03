import Image from "next/image";

import upper from "./imgs/upper.png";
import chef01 from "./imgs/chefSec (11).png";
import chef02 from "./imgs/chefSec (10).png";
import chef03 from "./imgs/chefSec (1).png";
import chef04 from "./imgs/chefSec (9).png";
import chef05 from "./imgs/chefSec (8).png";
import chef06 from "./imgs/chefSec (7).png";
import chef07 from "./imgs/chefSec (6).png";
import chef08 from "./imgs/chefSec (5).png";
import chef09 from "./imgs/chefSec (4).png";
import chef10 from "./imgs/chefSec (3).png";
import chef11 from "./imgs/chefSec (2).png"
import chef12 from "./imgs/chefSec (12).png";

export default function Chefs() {
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
                        Our Chefs
                    </h2>
                    <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                        <span className="text-white"> &gt; </span>
                        <a href="/Team" className="text-orange-500 hover:text-orange-300">chef</a>
                    </div>
                </div>
            </div>

            {/* Chef Section */}
            <div className="container mx-auto p-4 bg-white">
                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="text-center">
                        <Image
                            src={chef01}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Tahmina Rumi</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 2 */}
                    <div className="text-center">
                        <Image
                            src={chef02}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Jorina Begum</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 3 */}
                    <div className="text-center">
                        <Image
                            src={chef03}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">M.Mohammad</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 4 */}
                    <div className="text-center">
                        <Image
                            src={chef04}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Munna Kathy</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 5 */}
                    <div className="text-center">
                        <Image
                            src={chef05}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Tahmina Rumi</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 6 */}
                    <div className="text-center">
                        <Image
                            src={chef06}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Bisnu devgon</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 7 */}
                    <div className="text-center">
                        <Image
                            src={chef07}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Motin Molladsf</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 8 */}
                    <div className="text-center">
                        <Image
                            src={chef08}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">William Rumi</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 9 */}
                    <div className="text-center">
                        <Image
                            src={chef09}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Kets william roy</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 10 */}
                    <div className="text-center">
                        <Image
                            src={chef10}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Mahmud kholil</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 11 */}
                    <div className="text-center">
                        <Image
                            src={chef11}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Ataur Rahman</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                    {/* Card 12 */}
                    <div className="text-center">
                        <Image
                            src={chef12}
                            alt="Chef Name"
                            className="w-full h-50 object-cover shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-800">Monalisa holly</h3>
                        <p className="text-sm text-gray-600">Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
}