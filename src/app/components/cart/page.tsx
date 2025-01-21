"use client";

import { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image"; // Import Image component for banner image

// Sample banner image path (you can replace with your actual image path)
import upper from "./img/upper.png";

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Add item to the cart
  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = cart.findIndex((item: any) => item._id === product._id);

    if (itemIndex === -1) {
      // If the item is not already in the cart, add it with a quantity of 1
      cart.push({ ...product, quantity: 1 });
    } else {
      // If the item is already in the cart, increase the quantity
      cart[itemIndex].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart); // Update the state with the latest cart data
    alert(`${product.name} added to cart!`);
  };

  // Remove item from the cart
  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item removed from cart!");
  };

  // Example products array
  const products = [
    { _id: "1", name: "Country Burger", price: 45 },
    { _id: "2", name: "Chicken Chup", price: 12 },
    { _id: "3", name: "Chocolate Muffin", price: 28 },
    { _id: "4", name: "Fresh Lime", price: 38 },
    { _id: "5", name: "Burger", price: 21 },
    { _id: "6", name: "Pizza", price: 48 },
    { _id: "7", name: "Drink", price: 23 },
    { _id: "8", name: "Sandwiches", price: 25 },
    { _id: "9", name: "Cheez Butter", price: 10 },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* First Section: Image and Breadcrumb */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={upper}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[250px] sm:min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Shopping Cart
          </h2>
          <div className="flex flex-wrap items-center justify-center space-x-2 text-white text-sm sm:text-base">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
            <span className="text-white">&gt;</span>
            <a
              href="/about"
              className="text-orange-500 hover:text-orange-300"
            >
              Shopping Cart
            </a>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="flex items-center gap-2 mt-6 mb-4">
        <HiOutlineShoppingBag className="text-3xl text-white" />
        <h1 className="text-xl sm:text-2xl font-bold text-orange-500">Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-white">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-4 p-4 border rounded-lg shadow-md"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Products List */}
      <div className="mt-6">
        <h2 className="text-xl sm:text-2xl font-bold">Available Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center"
            >
              <h3 className="text-base sm:text-lg font-semibold text-black">
                {product.name}
              </h3>
              <p className="text-black">Price: ${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}