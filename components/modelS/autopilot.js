import Image from "next/image";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Autopilot = () => {

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

    const TopicControls = useAnimation()        
    const { ref : TopicRef , inView : TopicInView  } = useInView()

    const specControls = useAnimation()
    const { ref : specRef, inView : specInView  } = useInView()

    useEffect(()=>{
        if (TopicInView){
            TopicControls.start("visible")
        }
        if(!TopicInView){
            TopicControls.start('hidden')
        }
        if (specInView){
            specControls.start("visible")
        }
        if(!specInView){
            specControls.start('hidden')
        }
       
    },[TopicInView , specInView])


    return (
        <>
        <div className="relative h-[45vh] lg:h-[60vh] py-10">
            <Image src='/modelS/36.jpg'layout="fill" objectFit="cover"/>
            <div className="absolute w-full bottom-5 lg:top-5">
                <div className="flex flex-row text-center justify-between  mx-auto w-[75%] xs:w-[60%] md:w-1/2 lg:flex-col lg:ml-10 lg:text-start" ref={TopicRef}>
                    <motion.div variants={variant1} initial='hidden' animate={TopicControls}
                     className="lg:mb-10">
                        <p className="text-xl md:text-3xl font-bold">360°</p>
                        <p className="lg:hidden text-xs  mt-1">Degrees</p>
                        <p className="lg:hidden text-xs ">of Visibility</p>
                        <p className="hidden lg:block text-xs ">Rear, side and forward-facing cameras</p>
                        <p className="hidden lg:block text-xs ">provide maximum visibility</p>
                    </motion.div>
                    <motion.div  variants={variant2} initial='hidden' animate={TopicControls}
                     className="lg:mb-10">
                        <p className="text-xl md:text-3xl font-bold ">250 m</p>
                        <p className="lg:hidden text-xs  mt-3">of Powerful</p>
                        <p className="lg:hidden text-xs ">Visual Processing</p>
                        <p className="hidden lg:block text-xs ">Powerful visual processing at up to 250</p>
                        <p className="hidden lg:block text-xs ">meters of range</p>
                    </motion.div>
                    <motion.div  variants={variant3} initial='hidden' animate={TopicControls} >
                        <svg xmlns= 'http://www.w3.org/2000/svg' className='w-[25px] h-[25px] md:hidden'>
                            <circle fill='black' stroke="black" strokeWidth={'1px'} r="7" cx="15" cy="15"> </circle>
                            <circle fill='white' stroke="white" strokeWidth={'1px'} r="2" cx="12" cy="12"> </circle>            
                            <circle fill='none' stroke="black" strokeWidth={'1px'} r="10" cx="15" cy="15"> </circle>
                            <circle fill='white' stroke="white" strokeWidth={'1px'} r="1" cx="20" cy="20"> </circle>
                        </svg>  
                        <svg xmlns= 'http://www.w3.org/2000/svg' className='hidden w-[50px] h-[50px] md:block'>
                            <circle fill='black' stroke="black" strokeWidth={'1px'} r="15" cx="25" cy="25"> </circle>
                            <circle fill='white' stroke="white" strokeWidth={'1px'} r="5" cx="20" cy="20"> </circle>            
                            <circle fill='none' stroke="black" strokeWidth={'1px'} r="20" cx="25" cy="25"> </circle>
                            <circle fill='white' stroke="white" strokeWidth={'1px'} r="3" cx="30" cy="30"> </circle>
                        </svg>   
                        <p className="lg:hidden text-xs mt-3">Tesla</p> 
                        <p className="lg:hidden text-xs ">Vision</p> 
                        <p className="hidden lg:block text-xs ">Tesla Vision detects nearby cars, helps</p>
                        <p className="hidden lg:block text-xs ">prevent potential collisions and assists</p>
                        <p className="hidden lg:block text-xs ">with parking</p>
                    </motion.div>
                </div>
            </div>
            
        </div>
        <div className="lg:flex my-5">
            <div className="ml-10 my-8 lg:ml-[100px]  mr-[100px]" ref={TopicRef}>
                <motion.p className="text-[22px]"
                 variants={variant1} initial='hidden' animate={TopicControls}>
                    Autopilot
                </motion.p>
                <motion.p className='font-bold mt-2 mb-4 text-3xl'
                 variants={variant2} initial='hidden' animate={TopicControls}>
                    Future of Driving
                </motion.p> 
                <motion.div  variants={variant4} initial='hidden' animate={TopicControls}
                 className="mt-4 hidden lg:block lg:w-[250px] text-center border-gray-800  border-[4px] rounded-full py-1  hover:bg-gray-800 hover:text-white ">
                    ORDER NOW
                </motion.div>               
            </div>
            <div className="ml-10  max-w-4xl lg:my-auto lg:pr-5 text-base">
                <motion.p
                 variants={variant3} initial='hidden' animate={TopicControls}>
                    Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.
                </motion.p>
            </div>
            <motion.div  variants={variant4} initial='hidden' animate={TopicControls}
             className="my-6 mx-auto w-[90%] text-center border-gray-800  border-[4px] rounded-full py-1 hover:bg-gray-800 hover:text-white md:w-[200px] md:ml-10 lg:hidden">
                ORDER NOW
            </motion.div>
        </div>
        </>
    );
}
 
export default Autopilot;