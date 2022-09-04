import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Durability = () => {

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
            <div className="w-full lg:w-[70%] relative " ref={ref}>                
                <div className="w-full flex justify-center">
                    <video src='/SolarRoof/SRv1_.mp4' autoPlay loop defaultmuted='true' width="820px" className="rounded-lg"/>
                </div>
            </div>
            <div className="ml-8 flex flex-col sm:flex-row lg:flex-col lg:w-[29%] pt-3 h-[40vh] lg:h-screen">
                <div className="min-w-[250px] sm:my-auto lg:my-0">
                    <motion.p  variants={variant1} initial='hidden' animate={Controls}>Durability</motion.p>
                    <motion.p  variants={variant2} initial='hidden' animate={Controls}
                    className="text-xl md:text-3xl font-bold lg:mb-3">Protection Against Outages</motion.p>
                    <div className="flex flex-col ">
                    <motion.button  variants={variant4} initial='hidden' animate={Controls}
                     className="hidden sm:block lg:hidden border-[2px]  mt-5 border-gray-800 h-8 rounded-full w-[200px]  hover:text-white hover:bg-gray-800">
                        ORDER NOW
                    </motion.button>
                    <motion.button  variants={variant4} initial='hidden' animate={Controls}
                     className="hidden sm:block lg:hidden border-[2px]  mt-5 border-gray-800 h-8 rounded-full w-[200px]  hover:text-white hover:bg-gray-800">
                        Learn More
                    </motion.button>
                    </div>
                </div>
                <div className="sm:my-auto lg:my-0 pr-6">
                    <motion.p  variants={variant3} initial='hidden' animate={Controls}
                    className="text-sm ">Powerwall is a compact home battery that can be bundled with solar, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.</motion.p>
                    <div className="flex lg:flex-col">
                    <motion.button variants={variant4} initial='hidden' animate={Controls}
                     className="sm:hidden lg:block mr-2 lg:mt-[210px] border-[2px]  mt-5 border-gray-800 h-8 rounded-full w-[200px]  lg:w-[80%] hover:text-white hover:bg-gray-800">
                        ORDER NOW
                    </motion.button>
                    <motion.button  variants={variant4} initial='hidden' animate={Controls}
                     className="sm:hidden lg:block border-[2px]  mt-5 border-gray-800 h-8 rounded-full w-[200px] lg:w-[80%] hover:text-white hover:bg-gray-800">
                        Learn More
                    </motion.button>
                    </div>
                </div>
                
            </div>
        </div>

    );
}
 
export default Durability;