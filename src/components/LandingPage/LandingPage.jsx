import React from "react";
import { Header } from "./Header";
import HeroPage from "./HeroPage";

function LandingPage() {
  return (
    <>
      <div className='bg-hero-texture bg-no-repeat h-screen object-contain'>
        <Header></Header>
        <HeroPage></HeroPage>
      </div>
    </>
  );
}

export default LandingPage;
