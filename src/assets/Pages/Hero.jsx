import React, { useEffect, useRef } from 'react'
import Navbar from '../../../public/components/Navbar'
import gsap from "gsap";
const Hero = () => {
  useEffect(() => {
  const img = document.querySelector(".img");
  img.onload = () => {
    const tl = gsap.timeline();
    tl.fromTo(".h1",
      { opacity: 0,  },
      { opacity: 1,  duration: 1.5, ease: "power3.out" }
    );
    tl.fromTo(".img",
      { opacity: 0, y:"100px"  },
      { opacity: 1, y:"0" , duration: 1,  },
      "-=1"
    );
  };
}, []);

  return (
    <>
    <Navbar />
    <div className=''>
         <div  className='h-screen w-full flex items-center justify-center  bg-[url("/images/oppp.jpg")] bg-cover bg-center  shadow-2xl'>
      <div className='h-[95vh] w-[95vw]  flex justify-center items-center'>
        <h1 className='h1  font-samurai text-[#eb3700]  text-[150px]'>ZenSyntax</h1>
         <img className='img  absolute  size-[755px] w-[1200px] 
      ' src="/images/mem.png" alt="" />
      </div>
     
    </div>
    </div>
    </>
  )
}

export default Hero