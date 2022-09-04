import Image from "next/image";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AllWheel = () => {
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

    

    const modelControls = useAnimation()        
    const { ref , inView  } = useInView()


    useEffect(()=>{
        if (inView){
            modelControls.start("visible")
        }
        if(!inView){
            modelControls.start('hidden')
        }
       
    },[inView])

    return ( 
        <div className="h-screen"  ref={ref}>
            <div className="h-[45vh] sm:h-[60vh] w-full relative">
                <div className="absolute z-30 bottom-5 w-full text-white">
                    <div className="flex justify-around text-center w-full lg:px-20">
                        <motion.div variants={variant1} initial='hidden' animate={modelControls}>
                            <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">2</p>
                            <p className="hidden text-xs lg:block">Independent motors digitally control</p>
                            <p className="hidden text-xs lg:block">torque to the front and rear wheels</p>
                        </motion.div>
                        <motion.div variants={variant2} initial='hidden' animate={modelControls}>
                            <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">10ms</p>
                            <p className='text-xs font-normal lg:hidden'>Top speed</p>
                            <p className="hidden text-xs lg:block">Dual motors respond to changing</p>
                            <p className="hidden text-xs lg:block">Unparalleled traction and control, in all</p>
                        </motion.div>
                        <motion.div variants={variant3} initial='hidden' animate={modelControls}>
                            <Image src='/model3/cloud-white.png' width={'40px'} height={'30px'}/>
                            <p className='text-xs font-normal lg:hidden'>Dual Motor</p>
                            <p className="hidden text-xs lg:block">Unparalleled traction and control, in all</p>
                            <p className="hidden text-xs lg:block">weather conditions</p>
                        </motion.div>
                    </div>
                </div>
                <Image src='/model3/34.jpg' layout="fill" objectFit="cover"/>
            </div>
            <div className="max-w-[1100px] pl-8 md:pl-10 flex flex-col my-5 lg:flex-row ">
                <div className="sm:w-[380px] lg:pl-14">
                    <motion.p variants={variant1} initial='hidden' animate={modelControls}
                     className="font-light mt-2">All-Wheel Drive</motion.p>
                    <motion.p variants={variant2} initial='hidden' animate={modelControls}
                     className="text-3xl font-bold">Dual Motor</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={modelControls}
                     className="hidden w-[250px] border-[3px] border-gray-800 rounded-full  mt-6 py-1 lg:block hover:bg-gray-800 hover:text-white"
                    >ORDER NOW</motion.button>
                </div>
                <div className="lg:pl-14">
                    <motion.p variants={variant3} initial='hidden' animate={modelControls}
                     className="text-sm lg:pl-40 lg:pt-3">Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={modelControls}
                     className=" w-[250px] border-[3px] border-gray-800 rounded-full  mt-6 py-1 lg:hidden hover:bg-gray-800 hover:text-white"
                    >ORDER NOW</motion.button>
                </div>                
            </div>
        </div>
    );
}
 
export default AllWheel;