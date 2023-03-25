import React from "react";
import logo from "../../assets/webstruck logo.svg";
export const Header = () => {
  return (
    <header className='flex justify-center md-max:w-full font-sans'>
      <nav className='w-[1400px] flex justify-between items-center pt-2 pb-2 pr-0 pl-0 md-max:w-full md:max-p-2'>
        <img
          src={logo}
          alt='logo'
          className='object-contain w-7 h-7 self-center'
        />
        <ul className='py-4 flex text-webstruck-dark w-full items-center gap-[50px]'>
          <li className='px-4'>Home</li>
          <li className='px-4'>Contact</li>
          <li className='px-4'>Work</li>
        </ul>
      </nav>
    </header>
  );
};
