import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="text-gray-600 body-font w-full h-auto">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-semibold flex items-center justify-center md:mr-0 w-auto">
          <span className="text-white">Food</span>
          <span className="text-orange-500">tuck</span>
        </span>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center text-base gap-x-4 w-full md:w-auto justify-center md:justify-start">
          <a href="/" className="mr-5 text-white py-2">Home</a>
          <Link href="../components/menu" className="mr-5 text-white py-2">Menu</Link>
          <Link href="../components/blogs" className="mr-5 text-white py-2">Blogs</Link>
          <Link href="#" className="mr-5 text-white py-2">Pages</Link>
          <Link href="../components/about" className="mr-5 text-white py-2">About Us</Link>
          <Link href="../components/shop" className="mr-5 text-white py-2">Shop</Link>
          <a className="mr-5 text-white py-2">Contact</a>
        </nav>

        {/* Icons import from react icons */}
        <div className="flex items-center gap-x-4 text-white md:pl-20 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
          <IoSearchOutline className="text-xl" />
          <Link href="../components/signUpPage">
            <AiOutlineUser className="text-xl cursor-pointer" />
          </Link>
          <Link href="../components/cart">
            <HiOutlineShoppingBag className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}