import Image from "next/image";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navbar from "../navbar";

const FirstPage = () => {

    const variant1 ={
        hidden : {
            y: 50 , opacity : 0
        }, 
        visible : {
            y : 0 , opacity : 1,
            transition : {
                delay : 0.2
            }
        }
    }
    const variant2 ={
        hidden : {
            y: 50 , opacity : 0
        }, 
        visible : {
            y : 0 , opacity : 1,
            transition : {
                delay : 0.3
            }
        }
    }
    const variant3 ={
        hidden : {
            y: 50 , opacity : 0
        }, 
        visible : {
            y : 0 , opacity : 1,
            transition : {
                delay : 0.4
            }
        }
    }
    const variant4 ={
        hidden : {
            y: 50 , opacity : 0
        }, 
        visible : {
            y : 0 , opacity : 1,
            transition : {
                delay : 0.5
            }
        }
    }
    const variant5 ={
        hidden : {
            y: 50 , opacity : 0
        }, 
        visible : {
            y : 0 , opacity : 1,
            transition : {
                delay : 0.6
            }
        }
    }

    const modelControls = useAnimation()        
    const { ref , inView  } = useInView()

    const specControls = useAnimation()
    
    useEffect(()=>{
        if (inView){
            modelControls.start("visible")
            specControls.start('visible')
        }
        if(!inView){
            modelControls.start('hidden')
            specControls.start('hidden')
        }
       
    },[inView])

    return (
        <>
        <div className="h-screen relative " ref= {ref}>
            <Navbar fill={'black'} position={'absolute'}/>
            <Image src={'/modelS/S1.jpg'} layout='fill' objectFit="cover"/>
            <motion.div className="w-full absolute top-[15%]"
            variants={variant1} initial='hidden' animate={modelControls}>
                <h2 className="text-center font-bold">Model S</h2>
                <p className="text-center text-xl">Plaid</p>
            </motion.div>
            <div className="absolute w-full bottom-[20%] xs:bottom-[15%] text-white  tracking-wide flex flex-col
             px-3 lg:flex-row lg:px-48">
                <div className="flex justify-around md:w-[70%] md:mx-auto">
                    <motion.div variants={variant1} initial='hidden' animate={specControls}>
                        <p className="text-center text-lg sm:text-2xl xl:text-4xl ">396mi</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm">Range (EPA est.)</p>
                    </motion.div>
                    <motion.div  variants={variant2} initial='hidden' animate={specControls}>
                        <p className="text-center text-xl xs:text-2xl xl:text-4xl ">1.99s</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm ">0-60 mph*</p>
                    </motion.div>
                    <motion.div className="hidden sm:block"  variants={variant3} initial='hidden' animate={specControls}>
                        <p className="text-center text-xl xs:text-2xl xl:text-4xl ">200mph</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm ">Top Speed†</p>
                    </motion.div>
                    <motion.div className="sm:hidden" variants={variant3} initial='hidden' animate={specControls}>
                        <p className="text-center text-xl xs:text-2xl xl:text-4xl ">1,020 hp</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm ">Peak Power</p>
                    </motion.div>
                    <motion.div className="hidden sm:block" variants={variant4} initial='hidden' animate={specControls}>
                        <p className="text-center text-xl xs:text-2xl xl:text-4xl ">1,020 hp</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm ">Peak Power</p>
                    </motion.div>
                </div>
                <motion.button className="mt-3 border-[4px]  h-8 rounded-full sm:mx-auto sm:w-[200px] hover:text-gray-800 hover:bg-white"
                variants={variant5} initial='hidden' animate={specControls}>ORDER NOW</motion.button>
            </div>
        </div>
        </>
    );
}
 
export default FirstPage;