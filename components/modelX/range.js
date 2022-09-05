import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Range = () => {

    
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
        <div className="w-full flex flex-col lg:flex-row pb-10">
            <div className="w-full lg:w-[70%] relative" ref={ref}>
                <div className="absolute bottom-5  z-40 w-full flex justify-around text-white text-center lg:bottom-10">
                    <motion.div variants={variant1} initial='hidden' animate={Controls}>
                        <p className="text-lg md:text-2xl font-bold ">348 mi</p>
                        <p className="hidden text-xs md:block">Go anywhere with up to 348 miles of</p>
                        <p className="hidden text-xs md:block">estimated range on a single charge</p>
                        <p className="text-2xxs md:hidden">Range</p>
                        <p className="text-2xxs md:hidden">(est.)</p>
                    </motion.div>
                    <motion.div variants={variant2} initial='hidden' animate={Controls}>
                        <p className="text-lg md:text-2xl font-bold ">175 mi</p>
                        <p className="hidden text-xs md:block">Supercharge up to 175 miles in 15 minutes</p>            
                        <p className="text-2xxs md:hidden">Supercharge up to</p>
                        <p className="text-2xxs md:hidden">175 miles in 15</p>
                        <p className="text-2xxs md:hidden">minutes</p>
                    </motion.div>
                    <motion.div variants={variant3} initial='hidden' animate={Controls}>
                        <p className="text-lg md:text-2xl font-bold ">35,000+</p>
                        <p className="hidden text-xs md:block">Superchargers placed along popular</p>
                        <p className="hidden text-xs md:block">routes</p>
                        <p className="text-2xxs md:hidden">Global</p>
                        <p className="text-2xxs md:hidden">Superchargers</p>
                    </motion.div>
                </div>
                <div className="w-full h-[50vh] sm:h-[60vh] relative lg:hidden">
                    <Image src='/modelX/X16.jpg' layout="fill" objectFit="cover"/>
                </div>
                <div className="hidden w-full h-screen relative lg:block">
                    <Image src='/modelX/X16.jpg' layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="ml-8 flex flex-col sm:flex-row lg:flex-col lg:w-[25%] pt-3 h-[40vh] lg:h-screen">
                <div className="min-w-[250px] sm:my-auto lg:my-0">
                    <motion.p  variants={variant1} initial='hidden' animate={Controls}  className="text-xl font-thin">Range</motion.p>
                    <motion.p  variants={variant2} initial='hidden' animate={Controls}
                     className="text-2xl md:text-3xl mb-3">Go Anywhere</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={Controls}
                     className="hidden sm:block lg:hidden border-[4px]  mt-5 border-gray-700 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-700">
                        ORDER NOW
                    </motion.button>
                </div>
                <div className="sm:my-auto lg:my-0 pr-5">
                    <motion.p variants={variant3} initial='hidden' animate={Controls}
                     className="sm:text-sm ">With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={Controls}
                     className="sm:hidden lg:block lg:mt-[270px] border-[4px]  mt-3 border-gray-700 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-700">
                        ORDER NOW
                    </motion.button>
                </div>
                
            </div>
        </div>
    )
}
 
export default Range;