import React from "react";
import hero from "../../assets/hero-computer.png";
function HeroPage() {
  return (
    <div className='flex flex-row gap-2 h-4/5 justify-between place-items-center mx-auto w-[600px]'>
      <div>
        <h1 className='leading-loose text-6xl'>Webstruck</h1>
        <p className='text-2xl text-gray-200 font-normal'>
          One stop shop for your Web Needs
        </p>
        <button className='btn-hover'>Contact Us</button>
      </div>
      <img
        src={hero}
        alt='hero image'
        className='h-[650px] w-[650px] object-contain animate-heroAnimate'
      />
    </div>
  );
}

export default HeroPage;
