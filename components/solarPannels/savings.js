import Link from "next/link";
import { IoIosArrowUp } from 'react-icons/io'
import { useEffect } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Savings = () => {

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
        <div className="w-full mt-2 flex flex-col lg:flex-row-reverse relative pb-10" id='savings'>
            <div className="absolute right-[2%] top-[2%] z-30">
                <Link href='/solarPanels/#intro'>
                    <IoIosArrowUp size='25' className="text-black cursor-pointer"/>
                </Link>
            </div>
            <div className="w-full lg:w-[70%] " ref={ref}>
                <video src='/solarPannel/SPv1.mp4'  autoPlay loop defaultmuted='true' width='940px'/>
            </div>
            <div className="ml-8 flex flex-col sm:flex-row lg:flex-col lg:w-[29%] pt-3  lg:h-screen">
                <div className="min-w-[250px] sm:my-auto lg:my-0">
                    <motion.p  variants={variant1} initial='hidden' animate={Controls}  className="font-thin text-xl">Savings</motion.p>
                    <motion.p  variants={variant2} initial='hidden' animate={Controls}
                    className="text-2xl md:text-3xl mb-3">Electricity For Less</motion.p>
                    <motion.button  variants={variant4} initial='hidden' animate={Controls}
                     className="hidden sm:block lg:hidden border-[3px]  mt-5 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                        See your Savings
                    </motion.button>
                </div>
                <div className="sm:my-auto lg:my-0 pr-6">
                    <motion.p  variants={variant3} initial='hidden' animate={Controls}
                    className="sm:text-sm ">Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla&apos;s price match guarantee and take control of your monthly electricity bill. Learn more about your potential savings in our Design Studio.</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={Controls}
                     className="sm:hidden lg:block lg:mt-[280px] border-[3px]  mt-5 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                        See your Savings
                    </motion.button>
                </div>
                
            </div>
        </div>

    );
}
 
export default Savings;