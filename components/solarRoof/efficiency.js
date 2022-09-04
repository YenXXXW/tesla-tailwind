import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Efficiency = () => {

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
        <div className="w-full flex flex-col lg:flex-row-reverse mb-10">
            <div className="w-full lg:w-[70%] relative" ref={ref}>
                <div className="w-full h-[35vh] relative lg:hidden">
                    <Image src='/SolarRoof/SR4.avif' layout="fill" objectFit="cover"/>
                </div>
                <div className="hidden w-full h-screen relative lg:block">
                    <Image src='/SolarRoof/SR4.avif' layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="ml-8 flex flex-col sm:flex-row lg:flex-col lg:w-[29%] pt-3  lg:h-screen">
                <div className="min-w-[250px] sm:my-auto lg:my-0">
                    <motion.p  variants={variant1} initial='hidden' animate={Controls}>Efficiency</motion.p>
                    <motion.p  variants={variant2} initial='hidden' animate={Controls}
                    className="text-xl md:text-3xl font-bold lg:mb-3">Maximum Solar Production</motion.p>
                    <motion.button  variants={variant4} initial='hidden' animate={Controls}
                     className="hidden sm:block lg:hidden border-[3px]  mt-5 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                        ORDER NOW
                    </motion.button>
                </div>
                <div className="sm:my-auto lg:my-0 pr-6">
                    <motion.p  variants={variant3} initial='hidden' animate={Controls}
                    className="text-sm ">Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures Tesla Solar Inverter continues to improve with each over-the-air software update.</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={Controls}
                     className="sm:hidden lg:block lg:mt-[180px] border-[3px]  mt-3 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                        ORDER NOW
                    </motion.button>
                </div>
                
            </div>
        </div>

    );
}
 
export default Efficiency;