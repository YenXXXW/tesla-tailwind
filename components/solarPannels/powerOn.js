import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PowerOn= () => {

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
        <div className="w-full my-10  ">
            <div className="w-full  relative" ref={ref}>
                <video src='/solarPannel/SPv2.mp4' autoPlay loop defaultmuted='true' />
            </div>
            <div className=" pl-10 w-full">
                <div className="mx-auto  flex flex-col sm:flex-row max-w-[900px] pt-3 h-[50vh] md:h-[40vh] lg:h-[30vh] ">
                    <div className="lg:min-w-[350px] sm:my-auto mr-20" ref={ref}>
                        <motion.p variants={variant1} initial='hidden' animate={Controls}
                         className="font-thin">Power On</motion.p>
                        <motion.p variants={variant2} initial='hidden' animate={Controls}
                         className="text-xl md:text-3xl font-bold lg:mb-3">Order and Insatallation</motion.p>
                        <motion.button variants={variant4} initial='hidden' animate={Controls}
                         className="hidden sm:block  border-[3px]  mt-5 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                            ORDER NOW
                        </motion.button>
                    </div>
                    <div className="sm:my-auto pr-6">
                        <motion.p variants={variant3} initial='hidden' animate={Controls}
                         className="text-sm ">From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with an energy advisor to ask any questions about going solar with Tesla.</motion.p>
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
 
export default PowerOn;