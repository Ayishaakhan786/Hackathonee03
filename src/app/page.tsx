import Image from "next/image";

import plate from "./Image.png";
import egg1 from './egg.png';
import egg2 from './egg2.png';
import egg3 from './egg3.png';
import third1 from './third-sec1.png';
import third2 from './third-sec2.png';
import third3 from './third-sec3.png';
import third4 from './third-sec4.png';
import fourth1 from './f1.png';
import chef1 from './Chef1.png';
import chef2 from './chef2.png';
import chef3 from './Chef3.png';
import chef4 from './chef4.png';
import rounded from './sixth-rounded.png';
import seventh from './seven-sec.png';
import eight01 from './eight01.png';
import eight02 from './eight02.png';

import { PiCookieThin, PiHamburger } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";
import { CiPlay1 } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { LuShare2 } from "react-icons/lu";

export default function Hero(){
  return(
      <main className="w-full flex justify-center items-center bg-black text-white min-h-screen p-8 flex-col">
      <div className="sm:w-full md:w-full sm:p-5 sm:h-auto md:h-[500px] flex flex-col sm:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-black w-full">
  <div className="sm:w-full md:w-[50%] p-4">
    <h3 className="text-yellow-500 font-sans">Its Quick & Amusing</h3>
    <h1 className="text-white font-bold font-sans sm:text-md md:text-3xl lg:text-5xl flex flex-row mt-2">
      <div className="text-yellow-400">Th</div>e Art of Speed
    </h1>
    <h2 className="text-white font-bold sm:text-md md:text-3xl lg:text-5xl pt-4">Food Quality</h2>
    
    {/* Timer */}
    <div className="flex sm:flex-wrap sm:justify-start md:justify-start pt-5 pb-4 gap-4">
      <p className="text-white sm:text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere voluptatum tempore massa conque</p>
    </div>
    
    {/* Button */}
    <button className="bg-yellow-500 sm:w-full md:w-auto px-4 sm:px-3 md:px-7 sm:text-sm md:text-base py-2 text-white rounded-full">See Menu</button>
  </div>
  
  {/* Image */}
  <div className="sm:w-full md:w-[40%] lg:w-[30%] pl-7 justify-center items-center flex flex-row">
    <Image src={plate} alt="plate" className="w-full h-auto shadow-md" />
  </div>
</div>

{/* Second section */}
<div className="bg-black px-6 py-12 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      <div>
        <h3 className="text-orange-500 italic text-xl font-thin">About Us</h3>
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          We <span className="text-white">Create the best <br /> Foody Product</span>
        </h1>
        <p className="text-base leading-relaxed text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla
          bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300 mb-6">
          <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li>Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
        <div className="mt-10">
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 transition-all text-white text-sm rounded-full px-5 py-3"
          >
            Read More
          </button>
        </div>
      </div>
      {/* Image section */}
      <div className="lg:w-1/2 flex flex-col gap-2 items-center ml-10">
        <div className="mb-1">
          <Image
            src={egg1} alt="taste"
            className="shrink-0 w-[660px] h-[330px] rounded-md object-contain"
          />
        </div>
        <div className="flex justify-between w-full gap-x-3">
          <Image
            src={egg2} alt="taste"
            className="w-[322px] h-[194px] rounded-md object-cover"
          />
          <Image
            src={egg3} alt="delicious"
            className="w-[322px] h-[194px] rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

{/* Third Section */}
<section className="text-white body-font italic mt-0">
  <div className="container px-5 py-22 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h2 className="text-xl font-medium title-font mb-4 text-orange-500">
        Food Category
      </h2>
      <h1 className="text-orange-500 font-bold text-4xl">
        Ch<span className="text-white">oose Food Items</span>
      </h1>
    </div>
    <div className="flex flex-wrap m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={third1} alt="third1" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <Image src={third2} alt="third2" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={third3} alt="third3" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={third4} alt="third4" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
    </div>
  </div>
</section>



{/* Fourth Section */}
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col lg:flex-row items-center lg:w-4/5 mx-auto">
      <Image 
        src={fourth1} 
        alt="fourth01" 
        className="rounded radius-6px w-full lg:w-[362px] h-auto mb-4 lg:mb-0"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-orange-500 italic text-lg">Why Choose Us</h2>
        <h1 className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-medium mb-1 font-bold">
          Ex<span className="text-white">tra ordinary taste And Experienced</span>
        </h1>
        <div className="flex mb-3">
          <p className="leading-relaxed text-white py-4 pl-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
        </div>
        <div className="flex gap-4 mb-4 flex-wrap justify-center">
          <div className="bg-orange-500 p-4 rounded-lg text-center w-1/3 sm:w-1/4">
            <div className="text-white text-5xl px-1">
              <PiHamburger />
            </div>
            <p className="text-white">Fast Food</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg text-center w-1/3 sm:w-1/4">
            <div className="text-white text-6xl px-1">
              <PiCookieThin />
            </div>
            <p className="text-white">Lunch</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg text-center w-1/3 sm:w-1/4">
            <div className="text-white text-6xl px-1">
              <TbGlassFull />
            </div>
            <p className="text-white">Dinner</p>
          </div>
        </div>
        <div className="bg-white m-8 px-2 text-center rounded-lg">
          <h1 className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl">
            30+ <span className="text-gray-900 text-xl">Years of</span>{" "}
            <p className="text-black text-xl">Experienced</p>
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Fifth section */}
<section className="text-white body-font italic mt-0">
  <div className="container px-5 py-22 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h2 className="text-lg font-medium title-font mb-4 text-orange-500">
        Chefs
      </h2>
      <h1 className="text-orange-500 font-bold text-4xl">
        Me<span className="text-white">et Our Chefs</span>
      </h1>
    </div>
    <div className="flex flex-wrap m-2 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={chef1} alt="third1" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <Image src={chef2} alt="third2" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={chef3} alt="third3" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={chef4} alt="third4" className="rounded radius-6px width[1320px] height[489px] top[1752px] left[300px]"/>
      </div>
    </div>
    <div className="flex items-center justify-center h-full">
      <button className="self-end bg-black border-2 border-orange-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">
        See More
      </button>
    </div>
  </div>
</section>
{/* sixth section */}
<div className="w-full text-left">
  <h2 className="text-xl font-bold text-orange-500 italic">Testimonials</h2>
  <h1 className="text-3xl font-semibold">What our clients are saying</h1>
</div>
<div className="font-[sans-serif] max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
  <Image
    src= {rounded} alt="img"
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
  {/* seventh secton */}
  <section className="food-section mt-20 relative">
  {/* Image */}
  <div className="food-image">
    <Image 
      src={seventh} 
      alt="Food Image" 
      className="w-full h-auto"
    />
  </div>
  {/* Text Content over Image */}
  <div className="food-content absolute top-1/2 left-4 right-4 transform -translate-y-1/2 text-center sm:text-right text-white">
    <h4 className="text-sm font-bold italic text-orange-400">Restaurant Active Process</h4>
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-orange-500">
      We <span className="text-white">Document Every Food <br/>Bean Process until it is saved</span>
    </h1>
    <p className="mt-4 text-gray-200 text-sm sm:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br/>bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
    </p>
    <div className="buttons mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
      <button className="text-white px-4 py-2 rounded-full border-2 border-orange-500 hover:bg-gray-900">
        Read More
      </button>
      <button className="flex items-center text-white px-4 py-2 rounded-full mt-4 sm:mt-0">
        <CiPlay1 className="mr-2 bg-orange-500 rounded-full text-4xl"/>
        Play Video
      </button>
    </div>
  </div>
</section>


{/* Eighth section */}
<div className="flex flex-col text-center w-full mb-2 mt-20">
  <h2 className="text-lg sm:text-xl font-medium title-font mb-4 text-orange-500 italic">
    Blog Post
  </h2>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">
    La<span className="text-white">test News & Blog</span>
  </h1>
</div>

    <section className="text-white body-font">
  <div className="container px-2 py-10 mx-auto">
    <div className="flex flex-wrap -m-3">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src= {eight01}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="text-sm title-font font-medium text-orange-500 mb-3">
             10 February 2022
            </h2>
            <p className="leading-relaxed mb-2 text-lg text-bold">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-white items-center md:mb-2 lg:mb-0">
                Learn More
              </a>
              <span className="text-white mr-3 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg py-1 ">
              <BiLike/>
              </span>
              <span className="text-orange-500 items-center leading-none text-lg mr-2">
              <LiaCommentDotsSolid/>
              </span>
              <span className="text-white items-center leading-none text-lg ">
              <LuShare2/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={eight02}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="text-sm title-font font-medium text-orange-500 mb-3">
            10 February 2022
            </h2>
            <p className="leading-relaxed mb-2 text-lg text-bold">
            Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-white items-center md:mb-2 lg:mb-0">
                Learn More
              </a>
              <span className="text-white mr-3 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg py-1 ">
              <BiLike/>
              </span>
              <span className="text-orange-500 items-center leading-none text-lg mr-2">
              <LiaCommentDotsSolid/>
              </span>
              <span className="text-white items-center leading-none text-lg ">
              <LuShare2/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src= {fourth1}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="text-sm title-font font-medium text-orange-500 mb-3">
            10 February 2022
            </h2>
            <p className="leading-relaxed mb-2 text-lg text-bold">
            Curabitur rutrum velit ac congue malesuada
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-white items-center md:mb-2 lg:mb-0">
                Learn More
              </a>
              <span className="text-white mr-3 items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg py-1 ">
              <BiLike/>
              </span>
              <span className="text-orange-500 items-center leading-none text-lg mr-2">
              <LiaCommentDotsSolid/>
              </span>
              <span className="text-white items-center leading-none text-lg ">
              <LuShare2/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
  );
}