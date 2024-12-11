import Image from "next/image";

import plate from "./Image.png";
import egg1 from './egg.png';
import egg2 from './egg2.png';
import egg3 from './egg3.png';

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
       <Image src={egg3} alt="deleiciso" className="rounded width: 660px height: 330px radius-6px width: 322px height: 194px top-1416px left-1298px"/>
       </div>
       </div>
    </div>
  </div>
</div>
      </main>
  );
}