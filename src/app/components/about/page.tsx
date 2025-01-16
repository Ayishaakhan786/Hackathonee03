import Image from "next/image";

import upper from './img/upper.png';
import { IoPlayOutline } from "react-icons/io5";
import lemon from './img/lemon.png';
import yogurt from './img/yougurt.png';
import pasta from './img/pasta.png';
import third from "./img/thirdSection.png";
import rounded from './img/sixth-rounded.png';
import s1 from './img/AB-S1.png';

import { PiCoffeeLight, PiPersonLight, PiStudent } from "react-icons/pi";

export default function About() {
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
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-white text-sm sm:text-base">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500 hover:text-orange-300">About</a>
          </div>
        </div>
      </div>

      {/* Second Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
              src={lemon}
            />
          </div>
          {/* Right Images */}
          <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src={yogurt}
            />
            {/* Bottom Image */}
            <Image
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src={pasta}
            />
          </div>
          {/* Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-white title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 text-white" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="text-white text-3xl font-bold mt-3 text-center">
            Why Choose Us
          </h1>
          <p className="text-white text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <div className="w-full flex justify-center">
            <Image
              className="object-cover object-center w-full max-w-full h-auto rounded-lg"
              alt="hero"
              src={third}
            />
          </div>
        </div>
      </section>

      {/* Fourth section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
        <div className="bg-black p-4 rounded-lg text-center w-full md:w-1/3">
          <div className="text-white text-7xl px-1 flex justify-center items-center">
            <PiStudent />
          </div>
          <h1 className="text-white font-bold text-2xl mt-4">Best Chef</h1>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>

        <div className="bg-black p-4 rounded-lg text-center w-full md:w-1/3">
          <div className="text-white text-7xl px-1 flex justify-center items-center">
            <PiCoffeeLight />
          </div>
          <h1 className="text-white font-bold text-2xl mt-4">120 Food Items</h1>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>

        <div className="bg-black p-4 rounded-lg text-center w-full md:w-1/3">
          <div className="text-white text-7xl px-1 flex justify-center items-center">
            <PiPersonLight />
          </div>
          <h1 className="text-white font-bold text-2xl mt-4">Clean Environment</h1>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>
      </div>
      {/* fifth section */}
      <section className="bg-black py-20 md:py-40">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Team Member</h2>
          <p className="text-sm md:text-base text-white opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          <div className="bg-white shadow-lg overflow-hidden w-full sm:w-64">
            <Image
              src={s1}
              alt="Mark Henry"
              className="h-40 sm:h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-xl font-semibold text-black">
                Mark Henry
              </h3>
              <p className="text-sm sm:text-base text-black">Chef</p>
            </div>
          </div>
          <div className="bg-white shadow-lg overflow-hidden w-full sm:w-64">
            <Image
              src={s1}
              alt="Lydia Watson"
              className="h-40 sm:h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-xl font-semibold text-black">
                Lydia Watson
              </h3>
              <p className="text-sm sm:text-base text-black">Manager</p>
            </div>
          </div>
          <div className="bg-white shadow-lg overflow-hidden w-full sm:w-64">
            <Image
              src={s1}
              alt="Roger Alvarez"
              className="h-40 sm:h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-xl font-semibold text-black">
                Roger Alvarez
              </h3>
              <p className="text-sm sm:text-base text-black">Cook</p>
            </div>
          </div>
          <div className="bg-white shadow-lg overflow-hidden w-full sm:w-64">
            <Image
              src={s1}
              alt="Tom Morrison"
              className="h-40 sm:h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-xl font-semibold text-black">
                Tom Morrison
              </h3>
              <p className="text-sm sm:text-base text-black">Waiter</p>
            </div>
          </div>
        </div>
      </section>

      {/* sixth section */}
      <div className="w-full text-left mt-20 ml-3">
        <h2 className="text-xl font-bold text-orange-500 italic">Testimonials</h2>
        <h1 className="text-3xl font-semibold">What our clients are saying</h1>
      </div>
      <div className="font-[sans-serif] max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
        <Image
          src={rounded} alt="img"
          className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7"
        />
        <div className="mt-6 text-center">
          <div>
            <h4 className="text-sm font-extrabold text-gray-800">Alamin Hasan</h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Food Specialist
            </p>
          </div>
          <p className="text-sm text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
        </div>
        <div className="flex justify-center space-x-1 mt-4">
          <svg
            className="w-5 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-5 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-5 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-5 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-5 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>

      {/* seventh section */}

    </div>

  );
}