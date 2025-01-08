import Image from "next/image"; 

import upper from "./imgs/upper.png";

export default function Shop (){
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
        </div>
    );
}