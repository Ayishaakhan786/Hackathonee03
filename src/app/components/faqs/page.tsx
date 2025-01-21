import Image from "next/image";
import Link from "next/link";

import uppr from "./imgss/upper.png";

export default function FAQS() {
  return (
    <div>
      {/* First Section: Image and Breadcrumb */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={uppr}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            FAQ Page
          </h2>
          <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="../faqs" className="text-orange-500 hover:text-orange-300">FAQS</Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-10 mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">Questions Looks Here</h1>
        <p className="text-center text-gray-700 mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 shadow-md border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-black">How we serve food?</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>
          <div className="bg-white p-6 shadow-md border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-black">How can we get in touch with you?</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>
          <div className="bg-white p-6 shadow-md border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-black">How is our food quality?</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>
          <div className="bg-white p-6 shadow-md border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-black">What will be delivered? And When?</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>
          <div className="bg-white p-6 shadow-md border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-black">How do we give home delivery?</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>
          <div className="bg-white p-6 shadow-md border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-black">Is this restaurant 24 hours open?</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}