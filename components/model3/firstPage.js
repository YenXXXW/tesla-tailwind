import Image from "next/image";
import Navbar from "../navbar";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
        <div className="h-screen relative text-white tracking-wide" ref={ref} id='intro'>
            <Navbar fill={'white'} position={'absolute'}/>
            <Image src='/model3/31.jpg' layout="fill" objectFit="cover"/>
            <motion.div variants={variant1} initial='hidden' animate={modelControls}
             className="absolute top-[15%] w-full">
                <p className="text-center text-5xl">Model 3</p>
            </motion.div>
            <div className="absolute w-full bottom-[20%] xs:bottom-[15%] flex flex-col
            px-3 lg:px-[20%] lg:flex-row">
                {/* first flex div */}
                <div className="flex justify-around text-center w-full">
                    <div>
                        <div className="flex px-0">
                            <div className="w-[51px] h-[30px]  my-auto ">
                                <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 53 40" className="relative">
                                    <path d='M2 27 A25 24 0 0 1 52 27 ' fill='none' stroke='white' strokeWidth='2px'/>
                                    <path d='M2 27 h4 v-2 h-4' fill='white'/>
                                    <path d='M10 11  l2 2' fill='white' stroke='white' strokeWidth='2px'/>                    
                                    <path d='M25 2 v6 h2 v-4' fill='white'/>
                                    <path d='M44 11  l-2 2' fill='white' stroke='white' strokeWidth='2px'/>
                                    <path d='M52 27 h-4 v-2 h4' fill='white'/>                                        
                                    <motion.path variants={SpeeddialVariants} initial='hidden' animate={modelControls}
                                     d='M25 27  l-15 -1 l15 -1 ' fill='white' stroke='white' strokeWidth='1px'/> 
                                    <circle r='1' cx='25' cy='26' fill='white' stroke='white' strokeWidth='1px'/>                   
                                </svg>                                                        
                            </div>
                            <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">3.1 s </p>
                        </div>
                        <p className='text-xs font-normal lg:text-sm'>0-60 mph*</p>
                    </div>
                    <motion.div variants={variant2} initial='hidden' animate={modelControls}>
                        <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">358 mi</p>
                        <p className='text-xs font-normal lg:text-sm'>Range (EPA est.)</p>
                    </motion.div>
                    <motion.div  variants={variant3} initial='hidden' animate={modelControls}>
                        <p className="ml-2 text-xl xs:text-2xl xl:text-3xl">AWD</p>
                        <p className='text-xs font-normal lg:text-sm'>Dual Motor</p>
                    </motion.div>
                </div>
                {/* secong flex div */}
                <motion.button  variants={variant4} initial='hidden' animate={modelControls}
                 className="h-10 mt-3 border-[4px] rounded-full md:mx-auto sm:w-[250px] sm:mx-auto  hover:text-gray-800 hover:bg-white">
                    ORDER NOW
                </motion.button>
            </div>    
        </div>
    );
}
 
export default FirstPage;