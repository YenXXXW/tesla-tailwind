import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Design = () => {
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
        <div className="w-full my-10 h-screen">
            <div className="w-full h-[30vh] md:h-[60vh] lg:h-[70vh] relative" ref={ref}>
                <Image src='/solarRoof/SR2.jpg' layout='fill' objectFit='cover'/>
            </div>
            <div className="pl-10 w-full">
                <div className="mx-auto flex flex-col sm:flex-row max-w-[900px] pt-3 h-[50vh] md:h-[40vh] lg:h-[30vh] ">
                    <div className="lg:min-w-[350px] lg:my-auto mr-20" ref={ref}>
                        <motion.p variants={variant1} initial='hidden' animate={Controls}
                         className="font-thin">Design</motion.p>
                        <motion.p variants={variant2} initial='hidden' animate={Controls}
                         className="text-xl md:text-3xl font-bold lg:mb-3">Complement Your Home&apos;s Aesthetic</motion.p>
                        <motion.button variants={variant4} initial='hidden' animate={Controls}
                         className="hidden sm:block  border-[3px]  mt-5 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                            ORDER NOW
                        </motion.button>
                    </div>
                    <div className="lg:my-auto pr-6">
                        <motion.p variants={variant3} initial='hidden' animate={Controls}
                         className="text-sm ">Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home&apos;s natural styling. Chat with an Energy Advisor to ask any questions about installing solar with Tesla.</motion.p>
                        <motion.button variants={variant4} initial='hidden' animate={Controls}
                         className="sm:hidden   border-[3px]  mt-3 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                            ORDER NOW
                        </motion.button>
                    </div>                    
                </div>
            </div>
            
        </div>
    );
}
 
export default Design;