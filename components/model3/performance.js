import Image from "next/image";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Performance = () => {

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

    const SpeeddialVariants={
        hidden:{
            rotate:0,
        },            
        visible:{
            rotate:182,
            originX:'25px',
            transition:{
                duration:1 , 
            }
        }
    }
 
    const { ref , inView  } = useInView()

    const specControls = useAnimation()

    useEffect(()=>{
        if (inView){
            specControls.start('visible')
        }
        if(!inView){
            specControls.start('hidden')
        }
       
    },[inView])

    return (
        <div>
            <div className="h-[60vh] w-full relative " ref={ref}>
                <div className="absolute z-30 bottom-5 w-full text-white">
                    <div className="flex justify-around text-center w-full">
                        <div>
                            <div className="flex justify-center px-0 ">
                                <div className="w-[51px] h-[30px]  my-auto ">
                                    <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 53 40" className="relative">
                                        <path d='M2 27 A25 24 0 0 1 52 27 ' fill='none' stroke='white' strokeWidth='2px'/>
                                        <path d='M2 27 h4 v-2 h-4' fill='white'/>
                                        <path d='M10 11  l2 2' fill='white' stroke='white' strokeWidth='2px'/>                    
                                        <path d='M25 2 v6 h2 v-4' fill='white'/>
                                        <path d='M44 11  l-2 2' fill='white' stroke='white' strokeWidth='2px'/>
                                        <path d='M52 27 h-4 v-2 h4' fill='white'/>                                        
                                        <motion.path variants={SpeeddialVariants} initial='hidden' animate={specControls}
                                         path d='M25 27  l-15 -1 l15 -1 ' fill='white' stroke='white' strokeWidth='1px'/> 
                                        <circle r='1' cx='25' cy='26' fill='white' stroke='white' strokeWidth='1px'/>                   
                                    </svg>                                                        
                                </div>
                                <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">3.1 s </p>
                            </div>
                            <p className='text-xs font-normal lg:text-sm lg:hidden'>0-60 mph*</p>
                            <p className="hidden text-xs lg:block">Quickest acceleration—from zero to 60</p>
                            <p className="hidden text-xs lg:block">mph* in as little as 3.1 seconds</p>
                        </div>
                        <motion.div variants={variant2} initial='hidden' animate={specControls}>
                            <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">162mph</p>
                            <p className='text-xs font-normal lg:hidden'>Top speed</p>
                            <p className="hidden text-xs lg:block">Improved handling and aerodynamics</p>
                            <p className="hidden text-xs lg:block">allow for a top speed of 162 mph</p>
                        </motion.div>
                        <motion.div  variants={variant3} initial='hidden' animate={specControls}>
                            <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">AWD</p>
                            <p className='text-xs font-normal lg:hidden'>Dual Motor</p>
                            <p className="hidden text-xs lg:block">Dual Motor All-Wheel Drive instantly</p>
                            <p className="hidden text-xs lg:block">controls traction and torque, in all weather</p>
                            <p className="hidden text-xs lg:block">conditions</p>
                        </motion.div>
                    </div>
                </div>
                <Image src='/model3/33.jpg' layout="fill" objectFit="cover"/>
            </div>
            <div className="max-w-[1100px] pl-8 md:pl-10 flex flex-col my-4 lg:flex-row ">
                <div className="sm:w-[380px] lg:pl-14">
                    <motion.p variants={variant1} initial='hidden' animate={specControls}
                     className="font-light text-xl mt-2">Performance</motion.p>
                    <motion.p variants={variant2} initial='hidden' animate={specControls}
                     className="text-2xl md:text-3xl mb-3">Quickest Acceleration</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={specControls}
                     className="hidden w-[250px] border-[3px] border-gray-800 rounded-full  mt-6 py-1 lg:block hover:bg-gray-800 hover:text-white"
                    >ORDER NOW</motion.button>
                </div>
                <div className="lg:pl-14">
                    <motion.p variants={variant3} initial='hidden' animate={specControls}
                     className="sm:text-sm lg:pl-40 lg:pt-3 pr-5">Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.</motion.p>
                    <motion.button  variants={variant4} initial='hidden' animate={specControls}
                     className=" w-[250px] border-[3px] border-gray-800 rounded-full  mt-6 py-1 lg:hidden hover:bg-gray-800 hover:text-white"
                    >ORDER NOW</motion.button>
                </div>                
            </div>
        </div>
    );
}
 
export default Performance;