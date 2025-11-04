import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
  
const About = () => {
  useLayoutEffect(() => {
    // useLayoutEffect fixes timing issue
    const ctx = gsap.context(() => {
    

      const tl = gsap.timeline( {scrollTrigger: {
          trigger: ".comp-block",
          start: "top top",
          end: "+=2500",
          scrub: 0.8,
          pin: true,
          pinSpacing: "margin",
          anticipatePin: 1,
          markers: true,
        }})
        tl.from(".comp-block",{
          scale:1,
          duration:1
        })
      tl.to(".first-block", {
        x: "-100px",
        borderRadius:"40px",
        duration: 3,
        
       
      }).to(".last-block", {
        x: "100px",
        borderRadius:"40px",
        duration: 3,
        
      },"-=3").to(".middel-block", {
        
        borderRadius:"40px",
        duration: 3,
        
      },"-=3");

       tl.to(".iner", {
        rotateY: "180",
       
       
      })
      tl.to({},{duration:1})

      
    });

    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="comp-block [perspective:1000px] [transform:translateZ(0)] will-change-transform h-screen w-full bg-[#0b1316] flex items-center justify-center bg-center bg-cover ">
        <div className="first-block overflow-hidden   h-[400px] w-[320px]  relative [perspective: 1000px] [translateZ:0] ">
      <div>

        <div className="iner absolute [transform-style:preserve-3d] transition-transform [translateZ:0]  inset-0">

          <div className="front bg-[url('/images/image_part_1.jpg')] flex items-center justify-end bg-cover  absolute h-full w-full [backface-visibility:hidden]" >
                     <h1 className="text-[110px]">Ab</h1>
        </div>
        <div className="back h-full bg-[url('/images/ani1.jpg')] bg-cover bg-center  w-full [backface-visibility:hidden] absolute inset-0 rotate-y-180 ">
            <div className="h-full w-full bg-black/60 p-8">
              <h1 className="text-[45px]">Who I Am</h1>
              <p>I’m a creative front-end developer who loves turning ideas into smooth, interactive experiences. Code, motion, and design — that’s where my world lives.</p>
            </div>
        </div>

        </div>

        </div>

        </div>
         
         <div className="middel-block overflow-hidden  [perspective: 1000px] relative h-[400px] w-[320px] [translateZ:0]">
           <div  className="iner absolute [translateZ:0] inset-0 [transform-style:preserve-3d] transition-transform ">
            <div className="   absolute h-[400px] w-[320px] bg-red-800 bg-[url('/images/image_part_2.jpg')] flex items-center justify-start bg-cover [backface-visibility:hidden] ">
                    <h1 className="text-[110px]">out</h1> 
          </div>
            <div className="back h-full bg-[url('/images/ani3.jpg')] bg-cover bg-center  [backface-visibility:hidden] absolute inset-0 rotate-y-180 ">
           <div className="h-full w-full bg-black/60 p-8">
             <h1 className="text-[45px]  ">What I Do</h1>
            <p>I craft responsive websites and animated interfaces using React, GSAP, and modern tools — always aiming for clean logic and bold visuals.</p>
           </div>
        </div>
           </div>
        </div>

        
        <div className="last-block overflow-hidden [translateZ:0]  relative h-[400px] w-[320px] ">
          <div className="iner absolute [translateZ:0] inset-0 transition-transform [transform-style:preserve-3d] ">
            <div className=" h-[400px] w-[320px] bg-red-800 bg-[url('/images/image_part_3.jpg')] flex items-center justify-start bg-cover [backface-visibility:hidden] ">
                    <h1 className="text-[110px]">Me</h1> 
        </div>
         <div className="back h-full bg-[url('/images/ani2.jpg')] bg-cover bg-center w-full [backface-visibility:hidden] absolute inset-0 rotate-y-180 ">
            <div className="h-full w-full bg-black/60 p-8 ">
              <h1 className="text-[45px]   ">My Vision</h1>
            <p>I believe every pixel should have purpose and every animation should tell a story — minimal, but alive.</p>
            </div>
        </div>
          </div>

        </div>
      </div>

      <div className="h-screen flex items-center justify-center bg-gray-700">
        <h1>Next Section</h1>
      </div>
     
    </>
  );
};

export default About;
