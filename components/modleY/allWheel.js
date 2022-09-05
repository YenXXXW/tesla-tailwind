import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

    const SpeeddialVariants={
        hidden:{
            rotate:0,
        },            
        visible:{
            rotate:182,
            originX:'25px',
            transition:{
                duration:1 , delay : 1
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
                <div className="absolute w-full text-center text-white z-40 bottom-10 flex justify-around lg:px-20">
                    <motion.div className="hidden md:block" variants={variant1} initial='hidden' animate={Controls}>
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-xs">Independent motors digitally control</p>
                        <p className="text-xs">torque to the front and rear wheels</p>
                    </motion.div>
                    <motion.div className="hidden md:block" variants={variant2} initial='hidden' animate={Controls}>
                    
                        <div className="flex px-0 justify-center">
                            <div className="w-[51px] h-[30px]  my-auto ">
                                <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 53 40" className="relative">
                                    <path d='M2 27 A25 24 0 0 1 52 27 ' fill='none' stroke='white' strokeWidth='3px'/>
                                    <path d='M2 27 h4 v-2 h-4' fill='white'/>
                                    <path d='M10 11  l2 2' fill='white' stroke='white' strokeWidth='2px'/>                    
                                    <path d='M25 2 v6 h2 v-4' fill='white'/>
                                    <path d='M44 11  l-2 2' fill='white' stroke='white' strokeWidth='2px'/>
                                    <path d='M52 27 h-4 v-2 h4' fill='white'/>                                        
                                    <motion.path variants={SpeeddialVariants} initial='hidden' animate={Controls}
                                     d='M25 27  l-15 -1 l15 -1 ' fill='white' stroke='white' strokeWidth='1px'/> 
                                    <circle r='1' cx='25' cy='26' fill='white' stroke='white' strokeWidth='1px'/>                   
                                </svg>                                                        
                            </div>
                            <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">3.5 s </p>
                        </div>
                        <p className="text-xs">Quickest acceleration—from zero to 60</p>
                        <p className="text-xs">mph* in as little as 3.5 seconds</p>                   
                    </motion.div>
                    <motion.div className="hidden md:block" variants={variant3} initial='hidden' animate={Controls}>
                        <Image src='/model3/cloud-white.png' width={'40px'} height={'30px'}/>
                        <p className="text-xs">Capable in rain, snow, mud and off-road</p>
                        <p className="text-xs"> with superior traction control</p>
                    </motion.div>

                    <motion.div variants={variant1} initial='hidden' animate={Controls} className="md:hidden">
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-xs md:hidden">Independent</p>
                        <p className="text-xs md:hidden">motors</p>
                    </motion.div>                    
                    <motion.div variants={variant2} initial='hidden' animate={Controls} className="md:hidden">
                    <div className="flex px-0 justify-center">
                            <div className="w-[51px] h-[30px]  my-auto mt-2">
                                <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 53 40" className="relative">
                                    <path d='M2 27 A25 24 0 0 1 52 27 ' fill='none' stroke='white' strokeWidth='3px'/>
                                    <path d='M2 27 h4 v-2 h-4' fill='white'/>
                                    <path d='M10 11  l2 2' fill='white' stroke='white' strokeWidth='2px'/>                    
                                    <path d='M25 2 v6 h2 v-4' fill='white'/>
                                    <path d='M44 11  l-2 2' fill='white' stroke='white' strokeWidth='2px'/>
                                    <path d='M52 27 h-4 v-2 h4' fill='white'/>                                        
                                    <motion.path variants={SpeeddialVariants} initial='hidden' animate={Controls}
                                     d='M25 27  l-15 -1 l15 -1 ' fill='white' stroke='white' strokeWidth='1px'/> 
                                    <circle r='1' cx='25' cy='26' fill='white' stroke='white' strokeWidth='1px'/>                   
                                </svg>                                                        
                            </div>
                            <p className="ml-2 text-xl xs:text-2xl xl:text-3xl mt-2">3.5 s </p>
                        </div>
                        <p className="text-xs md:hidden">0-60 mph*</p>                         
                    </motion.div>  
                    <motion.div variants={variant3} initial='hidden' animate={Controls} className="md:hidden pt-3">
                        <Image src='/model3/cloud-white.png' width={'30px'} height={'20px'} />
                        <p className="text-xs md:hidden">All-Weather</p>
                        <p className="text-xs md:hidden">Control</p>
                    </motion.div>            
                                   
                </div>
                <Image src='/modelY/Y4.jpg' layout='fill' objectFit='cover'/>
            </div>
            <div className="pl-10 w-full">
                <div className="mx-auto flex flex-col sm:flex-row max-w-[900px] pt-3 h-[50vh] md:h-[40vh] lg:h-[30vh] ">
                    <div className="min-w-[250px] sm:my-auto mr-20">
                        <motion.p variants={variant1} initial='hidden' animate={Controls}
                         className="font-light text-xl">All-Wheel Drive</motion.p>
                        <motion.p variants={variant2} initial='hidden' animate={Controls}
                         className="text-2xl md:text-3xl mb-3">Dual Motor</motion.p>
                        <motion.button variants={variant4} initial='hidden' animate={Controls}
                         className="hidden sm:block  border-[4px]  mt-5 border-gray-700 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-700">
                            ORDER NOW
                        </motion.button>
                    </div>
                    <div className="sm:my-auto  ">
                        <motion.p variants={variant3} initial='hidden' animate={Controls}
                         className="sm:text-sm ">Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.</motion.p>
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
 
export default AllWheel;