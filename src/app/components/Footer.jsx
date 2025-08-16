import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900/20 backdrop-blur-sm border-t border-gray-700/50 text-white shadow-[0px_27px_5px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="flex items-center  justify-center container-xl py-7 gap-6">
        <h1 className="text-md capitalize font-bold">Movie DB</h1>
        <a href="https://github.com/Cargnx" className="font-bold text-xs">
          My GitHub
        </a>
      </div>
    </footer>
  );
}
