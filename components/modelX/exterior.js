import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Exterior = () => {
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
                delay : 0.35
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
                delay : 0.50
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
                delay : 0.65
            }
        }
    }

    const Controls = useAnimation()        
    const { ref , inView  } = useInView()

    useEffect(()=>{
        if (inView){
            Controls.start("visible")
        }
        if(!inView){
            Controls.start('hidden')
        }
       
    },[inView])
    

    return (
        <div className="w-full my-10">
            <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative" ref={ref}>
                <div className="absolute w-full text-center text-white z-40 bottom-10 flex justify-around ">
                    <motion.p variants={variant1} initial='hidden' animate={Controls}
                     className="hidden md:block md:text-sm">New wheels and improved handling</motion.p>
                    <motion.p variants={variant2} initial='hidden' animate={Controls}
                     className="hidden md:block md:text-sm">Lowest-drag SUV on Earth</motion.p>                
                    <motion.p variants={variant3} initial='hidden' animate={Controls}
                     className="hidden md:block md:text-sm">Refined exterior styling</motion.p>
                    <motion.div variants={variant1} initial='hidden' animate={Controls} className="md:hidden">
                        <p className="text-xs md:hidden">New wheels and</p>
                        <p className="text-xs md:hidden"> tires</p>
                    </motion.div>                    
                    <motion.div variants={variant2} initial='hidden' animate={Controls} className="md:hidden">
                        <p className="text-xs md:hidden">Lowest-drag SUV</p>
                        <p className="text-xs md:hidden"> on Earth</p>  
                    </motion.div>  
                    <motion.div variants={variant3} initial='hidden' animate={Controls} className="md:hidden">
                        <p className="text-xs md:hidden">Refined</p>
                        <p className="text-xs md:hidden">styling</p>
                    </motion.div>            
                                   
                </div>
                <Image src='/modelX/X12.jpg' layout='fill' objectFit='cover'/>
            </div>
            <div className="pl-10 w-full">
                <div className="mx-auto flex flex-col sm:flex-row max-w-[900px] pt-3 h-[50vh] md:h-[40vh] lg:h-[30vh] ">
                    <div className="min-w-[250px] sm:my-auto mr-20">
                        <motion.p variants={variant1} initial='hidden' animate={Controls} className="text-xl font-thin">Exterior</motion.p>
                        <motion.p variants={variant2} initial='hidden' animate={Controls}
                         className="text-2xl md:text-3xl mb-3">Designed for Efficiency</motion.p>
                        <motion.button variants={variant4} initial='hidden' animate={Controls}
                         className="hidden sm:block  border-[4px]  mt-5 border-gray-700 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-700">
                            ORDER NOW
                        </motion.button>
                    </div>
                    <div className="sm:my-auto pr-5">
                        <motion.p variants={variant3} initial='hidden' animate={Controls}
                         className="sm:text-sm ">With the lowest drag coefficient of any SUV, Model X is built for speed and range. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.</motion.p>
                        <motion.button variants={variant4} initial='hidden' animate={Controls}
                         className="sm:hidden   border-[4px]  mt-5 border-gray-700 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-700">
                            ORDER NOW
                        </motion.button>
                    </div>                    
                </div>
            </div>
            
        </div>
    );
}
 
export default Exterior;