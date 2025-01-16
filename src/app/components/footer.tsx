import React from "react";
import Image from "next/image";

import footer1 from "./img/footer1.png";
import footer2 from "./img/footer2.png";
import footer3 from "./img/footer3.png";

import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      {/* Subscription Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-6 md:px-[135px] py-6 md:py-[50px]">
        <div className="text-white md:w-[50%] w-full text-center md:text-left">
          <h2 className="text-lg md:text-2xl font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-sm md:text-base font-normal mt-4">
            Don&#39;t wait; make a smart & logical quote here. It's pretty easy.
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-start">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-3 md:px-5 mr-2 w-full md:w-auto"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-3 md:px-5 w-full md:w-auto">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-6 md:mx-[135px]" />

      {/* Main Content Section */}
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-[135px] py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl font-semibold uppercase text-white">About Us</h2>
            <p className="text-sm md:text-base text-gray-400">
              Corporate clients and leisure travelers have been relying on us for safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-[#FF9F0D] flex justify-center items-center w-12 h-12 md:w-16 md:h-16">
                <PiClockClockwiseBold className="text-white text-xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-white text-sm md:text-base font-medium">Opening Hours</h3>
                <p className="text-xs md:text-sm text-gray-400">Mon - Sat (8:00 - 6:00)</p>
                <p className="text-xs md:text-sm text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl font-semibold uppercase text-white">Useful Links</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link, index) => (
                <li key={index}>
                  <a href="../components/chefs" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl font-semibold uppercase text-white">Help?</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((help, index) => (
                <li key={index}>
                  <a href="../components/faqs" className="hover:underline">
                    {help}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="mb-6 text-lg md:text-xl font-semibold uppercase text-white">Recent Posts</h2>
            {[footer1, footer2, footer3].map((image, index) => (
              <div className="flex items-center gap-4 mb-4" key={index}>
                <Image src={image} alt={`Post ${index + 1}`} className="w-12 h-12 md:w-16 md:h-16 object-cover" />
                <div>
                  <p className="text-xs md:text-sm text-gray-400">20 Feb 2022</p>
                  <h3 className="text-sm md:text-base text-white">Keep Your Business</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-300 text-center md:text-left">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex justify-center md:justify-start mt-4 md:mt-0 space-x-4">
            {[
              { Icon: FaFacebookF, link: "https://www.facebook.com/me/" },
              { Icon: FaTwitter, link: "https://www.twitter.com" },
              { Icon: FaInstagram, link: "https://www.instagram.com/bugs____bunnyyyy__/?__pwa=1#" },
              { Icon: FaYoutube, link: "https://www.youtube.com/@Buggs_____________bunnyyy" },
              { Icon: FaPinterest, link: "https://www.pinterest.com" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black w-9 h-9 flex justify-center items-center rounded-full"
              >
                <Icon className="text-white text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;