import Image from "next/image";
import { motion , useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Exterior =()=>{

    const variant = {
        hidden : {
            y :50 , opacity : 0 ,
        },
        visible : {
            y : 0 , opacity : 1 ,
            transition : {
                delay : 0.2
            }
        }
    }

   const { ref , inView} = useInView()
   const Controls = useAnimation()

   useEffect(()=>{
        if(inView){
            Controls.start('visible')
        }else{
            Controls.start("hidden")
        }
   },[inView])

    return(
        <>
        <div className="relative h-[50vh] md:h-[60vh] ">
            <Image src={'/modelS/S7.jpg'} layout='fill' objectFit="cover"/>
        </div>
        <motion.div variants={variant} initial='hidden' animate={Controls}
         className="bg-black text-white pl-10 pr-5 pt-3 lg:pl-[100px] xl:pl-[150px] tracking-wider ">
            <p className="text-xl " ref={ref}>Exterior</p>
            <p className="text-2xl md:text-3xl pb-4">Designed for Efficiency</p>
            <p className="max-w-4xl sm:text-sm">With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
            <button className="mt-5 mb-10 border-[4px] py-1 border-white rounded-full mx-2 w-5/6 hover:text-gray-800 hover:bg-white  sm:w-[250px] sm:mx-0">
                ORDER NOW
            </button>
        </motion.div>
        </>
    )
}
export default Exterior