import React from 'react';
import { VscSearch } from "react-icons/vsc";
import { IoBasketOutline } from "react-icons/io5";const SubHead = () => {
  return (
    <div className="bg-blue-800 border-b-[1px] border-white p-4">
      <div className="flex justify-between lg:mx-56 items-center">
     <div className="flex items-center md:gap-10 lg:gap-16">
    <h1 className='text-5xl px-2 text-white font-semibold flex '>
      <img src="/O2Logo.png" className='h-10 w-20' alt="logo" />
      </h1> 
      <ul className='flex gap-5 md:gap-8 lg:gap-16'>
        {["Shop", "Why O2" , "Help"].map((item,i)=>(
          <li key={i} className="text-white hover:text-blue-400 transition duration-300"><a href='/'>{item}</a></li>
        ))}
      </ul>
     </div>
     <div className="flex  gap-2 md:gap-4  lg:gap-5 text-white items-center">
      <span className='hover:text-blue-400 hidden md:block transition duration-300'><a href='/'>My O2</a></span>
      <a  href='/'>
      <div className="flex gap-2 hover:text-blue-400 transition duration-300 items-center">
        <VscSearch className='text-2xl'/>
        <span className='hidden md:block'>Search</span>
      </div>
      </a>
      <span className='hover:text-blue-400 transition duration-300'>
      <a href="/">
        <IoBasketOutline className='text-2xl'/>
      </a>
      </span>
     </div>
      </div>
    </div>
  );
};

export default SubHead;
