'use client';
import { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Dialogcategory from "./Dialogcategory";
import Dialogproduct from "./Dialogproduct";

export default function Admin() {
  const [dialogCate, setDialogcate] = useState(false);
  const [dialogPro, setDialogPro] = useState(false);
  return (
    <>
      <Header />
      <div className="w-full flex">
        <div className="w-[20%] bg-gray-700 h-[900px]">
          <ul>
            <li className="w-full flex items-center justify-center h-[80px] hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="">Dashboard</a>
            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="">Category List</a>
            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="">Products List</a>
            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="" onClick={(e) => { e.preventDefault(); setDialogcate(true); }}>
                Add Category
              </a>

            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="" onClick={(e) => { e.preventDefault(); setDialogPro(true); }}>Add Product</a>
            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="">Home</a>
            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="">About Us</a>
            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="">Library</a>
            </li>
            <li className="w-full flex items-center justify-center h-[80px]  hover:bg-gray-600 text-white font-bold text-[18px]">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-[80%]">
          <h1>page</h1>
        </div>
      </div>
      <Footer />
      {dialogCate && <Dialogcategory isOpen={dialogCate} onClose={() => setDialogcate(false)} />}
      {dialogPro && <Dialogproduct isOpen={dialogPro} onClose={() => setDialogPro(false)} />}

    </>
  );
}
