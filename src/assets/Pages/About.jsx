import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLayoutEffect(() => {
    // useLayoutEffect fixes timing issue
    const ctx = gsap.context(() => {
      gsap.to(".first-block", {
        x: "-100px",
        duration: 2,
        scrollTrigger: {
          trigger: ".comp-block",
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
          pinSpacing: "margin",
          anticipatePin: 1,
          markers: true,
        },
      });
      gsap.to(".last-block", {
        x: "100px",
        
        duration: 2,
        scrollTrigger: {
          trigger: ".comp-block",
          start: "top top",
          end: "+=1000",
          scrub: true,
          
          markers: true,
        },
      });
      
    });

    // Delay refresh so GSAP recalculates everything after render
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="comp-block will-change-transform h-screen w-full bg-gray-900 flex items-center justify-center  ">
        <div className="first-block h-[400px] w-[320px]  relative perspective ">
      <div>

        <div className="bg-[url('/images/image_part_1.jpg')] flex items-center justify-end bg-cover absolute h-full w-full backface-hidden" >
                     <h1 className="text-[110px]">Ab</h1>
        </div>
        <div className="">
            <h1 className="text-[110px]">create</h1>
        </div>

        </div>

        </div>


        <div className="middel-block h-[400px] w-[320px] bg-red-800 bg-[url('/images/image_part_2.jpg')] flex items-center justify-start bg-cover ">
                    <h1 className="text-[110px]">out</h1> 
          </div>
        <div className="last-block h-[400px] w-[320px] bg-red-800 bg-[url('/images/image_part_3.jpg')] flex items-center justify-start bg-cover ">
                    <h1 className="text-[110px]">Me</h1> 
        </div>
      </div>

      <div className="h-screen flex items-center justify-center bg-gray-700">
        <h1>Next Section</h1>
      </div>
    </>
  );
};

export default About;
