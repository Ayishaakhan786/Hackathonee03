import Image from "next/image";
import upper from './img/upper.png';
import { IoPlayOutline } from "react-icons/io5";
import lemon from './img/lemon.png';
import yogurt from './img/yougurt.png';
import pasta from './img/pasta.png';
import third from "./img/thirdSection.png";
import student from './img/Student.png';
import coffee from './img/Coffee.png';
import person from './img/Person.png';
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
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <a href="/" className="text-white">Home</a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">About</a>
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
            <h1 className="text-white text-3xl text-white text-bold mt-3">Why Choose Us</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
              pellentesque bibendum non dui volutpat fringilla bibendum.
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src = {third}
          />
        </div>
      </section>
      {/* Fourth section */}
      <section className="text-white body-font">
  <div className="container px-3 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={student}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-white mb-2 text-bold text-center">
            BEST CHEF
            </h1>
            <p className="leading-relaxed mb-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={coffee}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-white mb-2 text-bold text-center">
            120 Item food
            </h1>
            <p className="leading-relaxed mb-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={person}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-white mb-2 text-bold text-center">
            Clean Environment
            </h1>
            <p className="leading-relaxed mb-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}