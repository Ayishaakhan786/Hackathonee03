import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
export default function Header (){
    return (
      <header className="text-gray-600 body-font w-1320px h-32px">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <span className="text-lg font-semibold mr-20">
          <span className="text-white">Food</span>
          <span className="text-orange-500">tuck</span>
        </span>
        {/* Navigation */}
        <nav className="border-black bg-black flex flex-wrap items-center text-base justify-center gap-x-4">
          <a className="mr-5 text-white">Home</a>
          <a className="mr-5 text-white">Menu</a>
          <a className="mr-5 text-white">Blogs</a>
          <a className="mr-5 text-white">Pages</a>
          <Link href= "../about" className="mr-5 text-white">About Us</Link>
          <a className="mr-5 text-white">Shop</a>
          <a className="mr-5 text-white">Contact</a>
        </nav>
        {/* Icons import from react icons. */}
        <div className="flex items-center gap-x-4 text-white pl-20">
        <IoSearchOutline className="text-xl"/>
        <AiOutlineUser className="text-xl"/>
        <HiOutlineShoppingBag className="text-xl"/>
        </div>
      </div>
    </header>
    );
}