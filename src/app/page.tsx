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

import { PiCookieThin, PiHamburger } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";

export default function Hero(){
  return(
      <main className="w-full flex justify-center items-center bg-black text-white min-h-screen p-8 flex-col">
      <div className="sm:w-full md:w-[100%] sm:p-5 sm:h--auto md:h-[500px] flex sm:flex-row sm:justify-start md:justify-center sm:items-start md:items-center  bg-black w-1390">
         <div className="sm:w-full md:w-[50%] p-4 ">
              <h3 className="text-yellow-500 font-sans">Its Quick & Amusing</h3>
              <h1 className="text-white font-bold font-bolf sm:text-md md:text-3xl lg:text-5xl flex flex-row mt-2" > 
   <div className="text-yellow-400">Th</div>e Art of Speed</h1>
              <h2 className="text-white font-bolf sm:text-md md:text-3xl lg:text-5xl pt-4">Food Quality</h2>
        {/* timer */}
      <div className="flex sm:flex-wrap sm:justify-start md:justify-start pt-5 pb-4 gap-4">      
<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere voluptatum tempore massa conque</p>  
      </div>
  <button className="bg-yellow-500 sm:hidden w-190 md:block sm:px-3 md:px-7 sm:text-sm py-0 text-white rounded-full h-10 ">See Menu</button>
  </div>
{/* image */}
<div className="sm-w-full md:w-[30%] lg:w-[30%] pl-7 justify-center items-center flex flex-row">
  <Image src= {plate} alt="plate" 
  className="w-50 h-auto shadow-md "/>
</div>
      </div>
      {/* Second section */}
      <div className="bg-black px-6 py-12 overflow-hidden">
  <div className="max-w-7xl max-md:max-w-md mx-auto">
    <div className="grid md:grid-cols-2 items-center gap-12">
      <div>
        <h3 className="text-orange-500 italic text-xl font-thin">about us</h3>
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
       We <span className="text-white">Create the best 
      <br/>Foody Product<br/>
      </span></h1>
        <p className="text-base leading-relaxed text-gray-400 mt-4">
        Lorem ipsum dolor sit amet, consectetur
       adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla
       bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
       Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300 mb-6">
        <li> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
        <li> Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
       </ul>
       {/* button */}
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
      <div className="lg:w-1/2 flex flex-col gap-3 items center ml-10">
      <div className="mb-1">
        <Image
          src= {egg1} alt="taste"
          className="shrink-0 width: 660px height: 330px rounded-md object-contain radius-6px top-1070px left-960px"
        />
      </div>
      <div className="flex justify-between w-full gap-x-2">
       <Image src= {egg2} alt="taste" className="rounded width: 322px height: 194px top-1416px left-960px radius-6px"/>
       <Image src={egg3} alt="deleiciso" className="rounded radius-6px width: 322px height: 194px top-1416px left-1298px"/>
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
      <Image src={third1} alt="third1" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <Image src={third2} alt="third2" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={third3} alt="third3" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={third4} alt="third4" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
      </div>
    </div>
  </div>
</section>
{/* Fourth Section */}
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-5 mx-auto">
    <div className="lg:w-4/5 flex">
      <Image src={fourth1} alt="fourth01" className="rounded radius-6px width:362px height:356px top-2361px left-300px"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-orange-500 italic">
          Why Choose us
        </h2>
        <h1 className="text-orange-500 text-4xl font-medium mb-1 font-bold">
          Ex<span className="text-white">tra ordinary taste And Experienced</span>
        </h1>
        <div className="flex mb-3">
        <p className="leading-relaxed text-white py-4 pl-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        </div>
        <div className="flex gap-4 mb-4">
        <div className="bg-orange-500 p-4 rounded-lg text-center">
          <div className="text-white text-5xl px-1">
          <PiHamburger/>
          </div>
          <p className="text-white">Fast Food</p>
        </div>
        <div className="bg-orange-500 p-4 rounded-lg text-center">
        <div className="text-white text-6xl px-1">
        <PiCookieThin/>
          </div>
          <p className="text-white">Lunch</p>
        </div>
        <div className="bg-orange-500 p-4 rounded-lg text-center">
        <div className="text-white text-6xl px-1">
        <TbGlassFull/>
          </div>
          <p className="text-white">Dinner</p>
        </div>
        </div>
        <div className="bg-white m-8 px-2 text-center rounded-lg">
          <h1 className="text-orange-500 text-4xl">30+  <span className="text-gray-900 text-xl">Years of</span>{" "}<br/><p className="text-black text-xl">Experienced</p></h1>
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
      <Image src={chef1} alt="third1" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <Image src={chef2} alt="third2" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={chef3} alt="third3" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <Image src={chef4} alt="third4" className="rounded radius-6px width:1320px height:489px top-1752px left-300px"/>
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



      </main>
  );
}