import { client } from '../../../sanity/lib/client';

import Image from "next/image";

import upper from "./img/upper.png";

async function foodData() {
    const fetchData = await client.fetch(`
      *[_type == "chef"] {
  _id,
  name,
  position,
  experience,
  specialty,
  "imageUrl": image.asset->url,
  description,
  available
}

      `)
    return fetchData
}

export default async function Chefs() {
    const data = await foodData();
    console.log(data);
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
                    {data.map((val: any, i: number) => {
                        return (
                            <div
                                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                                key={val.id}
                            >
                                <img
                                    src={val.imageUrl}
                                    alt="img"
                                    className="w-full h-56 sm:h-48 md:h-52 lg:h-60 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-1 text-gray-700">
                                        {val.name}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        Position: <span className="text-amber-600">{val.position}</span>
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        Experience: <span className="text-amber-600">{val.experience}</span>
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        Description: <span className="text-amber-600">{val.description}</span>
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        Specialty: <span className="text-amber-600">{val.specialty}</span>
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        Available: <span className="text-amber-600">{val.available}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}