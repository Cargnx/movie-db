import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900/20 backdrop-blur-sm border-b border-gray-700/50 text-white">
      <div className="flex justify-between items-center  container-xl py-7">
        <p className="font-bold">HELLO WORLD</p>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">TEST</li>
          <li className="hover:text-gray-300 cursor-pointer">TEST</li>
          <li className="hover:text-gray-300 cursor-pointer">TEST</li>
        </ul>
      </div>
    </header>
  );
}
