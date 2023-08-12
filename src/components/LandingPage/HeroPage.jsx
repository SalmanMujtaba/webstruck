import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import hero from "../../assets/hero-computer.png";
import Button from "../Button";
import { HeadlineDynamicText } from "../HeadlineDynamicText";

function HeroPage() {
  return (
    <div className='md-max:w-full flex md-max:flex-col md-max:items-center md-max:justify-center h-full justify-between xl:w-[1280px]'>
      <div className='flex flex-col justify-center gap-2 flex-[2] md-max:flex-1 md-max:items-center place-items-center'>
        <h1
          className='leading-relaxed  text-6xl place-self-center'
          style={{ lineHeight: 1.5 }}>
          Webstruck
        </h1>
        <HeadlineDynamicText></HeadlineDynamicText>
        <Button>Contact Us</Button>
      </div>
      <div className='flex-[3] relative md-max:flex-1 md-max:w-full'>
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere
              args={[1.15]}
              scale={1.6}>
              <MeshDistortMaterial
                color='#a696fb'
                attach='material'
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        <img
          src={hero}
          alt='hero image'
          className='h-[600px] md-max:w-[300px] md-max:h-[300px] w-[800px] object-contain absolute inset-0 mx-auto animate-heroAnimate'
        />
      </div>
    </div>
  );
}

export default HeroPage;
