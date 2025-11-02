import React, { useRef } from 'react'
import { Swords,X } from "lucide-react";
import gsap from "gsap";

const Navbar = (props) => {
    
    const side = useRef(null)
   const sidebox =()=>{
    const tl = gsap.timeline()

   

    tl.to(side.current,{
        x:0.4,
        duration:0.2
    })
    tl.to(".atag",{
      x:0.4,
      stagger:{
        amount:0.2
      },
      duration:0.5,
      opacity:1
    })
    tl.to(".ax",{

        opacity:1
    },"-=0.4")
   }


   const reversefn =()=>{
    const tl = gsap.timeline()

    tl.to(".ax",{

        opacity:0,
        duration:0.2
    })
    tl.to(".atag",{
      x:"-200px",
      stagger:{
        amount:0.2
      },
      duration:0.5,
      opacity:1
    })
    tl.to(side.current,{
        x:"-200px",
        duration:0.2
    },"-=0.4")
   }
  return (
    <div className=''>
        
       <div onClick={()=>{
        sidebox()
        
       }} className='sword absolute pl-10 pt-10'>
         <Swords   color='#eb3700' size={40} />
       </div>


         <div ref={side} className='side absolute h-[730px] mt-3 w-[200px] bg-[url("/images/leaf.jpg")] bg-cover bg-center flex flex-col items-center gap-10 pt-10 text-[#eb3700] pl-10 translate-x-[-200px]  '>
           <div onClick={()=>{
            reversefn()
           }} className='cursor-pointer'> 
            <X className='ax ' />
            </div>
          <a className='atag translate-x-[-200px] '  href="">Home</a>
          <a className='atag translate-x-[-200px]'  href="">Contect</a>
          <a className='atag translate-x-[-200px]'  href="">About</a>
          <a className='atag translate-x-[-200px]'  href="">Projects</a>
           
    
        </div> 


    </div>
  )
}

export default Navbar