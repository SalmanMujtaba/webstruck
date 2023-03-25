import React from "react";
import { Header } from "./Header";
import HeroPage from "./HeroPage";

function LandingPage() {
  return (
    <>
      <div className='bg-hero-texture bg-no-repeat flex md-max:h-[200vh] h-screen object-contain flex-col items-center justify-between'>
        <Header></Header>
        <HeroPage></HeroPage>
      </div>
    </>
  );
}

export default LandingPage;
