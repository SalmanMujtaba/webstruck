import React from "react";
import logo from "../../assets/webstruck logo.svg";
export const Header = () => {
  return (
    <header className='h-1/5 font-sans'>
      <nav>
        <div className='flex mx-auto w-[1080px]'>
          <img
            src={logo}
            alt='logo'
            className='object-contain w-7 h-7 self-center'
          />
          <ul className='py-4 sm:flex text-webstruck-dark w-full justify-end'>
            <li className='px-4'>Home</li>
            <li className='px-4'>Contact</li>
            <li className='px-4'>Work</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
