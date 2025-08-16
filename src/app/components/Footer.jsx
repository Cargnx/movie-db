import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900/20 backdrop-blur-sm border-t border-gray-700/50 text-white shadow-[0px_27px_5px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="flex justify-between items-center  container-xl py-7">
        <p className="font-bold">HELLO WORLD</p>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">TEST</li>
          <li className="hover:text-gray-300 cursor-pointer">TEST</li>
          <li className="hover:text-gray-300 cursor-pointer">TEST</li>
        </ul>
      </div>
    </footer>
  );
}
