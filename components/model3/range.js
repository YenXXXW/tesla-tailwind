import Image from "next/image";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


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
        <div className="mt-5 h-screen  flex flex-col lg:flex-row" ref={ref}>
            <div className="relative h-[60vh] w-full lg:h-[568px] lg:w-[70vw]">
                <div className="flex w-full justify-around absolute bottom-10 text-white z-30 text-center">
                    <motion.div variants={variant1} initial='hidden' animate={modelControls}>
                        <p className="text-xl xs:text-2xl xl:text-3xl">358 mi</p>
                        <p className="text-xs md:hidden">Range</p>
                        <p className="text-xs md:hidden">(EPA est.)</p>
                        <p className="hidden md:block text-xs">Go anywhere with up to 358 mi of</p>
                        <p className="hidden md:block text-xs">estimated range on a single charge</p>
                    </motion.div>
                    <motion.div variants={variant2} initial='hidden' animate={modelControls}>
                        <p className="text-xl xs:text-2xl xl:text-3xl">15 min</p>
                        <p className="text-xs md:hidden">Recharge up to</p>
                        <p className="text-xs md:hidden">175 mi</p>
                        <p className="hidden md:block text-xs">Recharge up to 175 mi in 15 minutes at</p>
                        <p className="hidden md:block text-xs">Supercharger locations</p>                        
                    </motion.div>
                    <motion.div variants={variant3} initial='hidden' animate={modelControls}>
                        <p className="text-xl xs:text-2xl xl:text-3xl">35,000+</p>
                        <p className="text-xs md:hidden">Global</p>
                        <p className="text-xs md:hidden">Superchargers</p>
                        <p className="hidden md:block text-xs">Superchargers placed along well-traveled</p>
                        <p className="hidden md:block text-xs">routes around the world</p>                        
                    </motion.div>
                </div>
                <Image src='/model3/35.jpg' layout='fill' objectFit="cover"/>
            </div>
            <div className="ml-8 py-5 max-w-[1100px] flex flex-col md:flex-row lg:flex-col lg:w-[27vw] ">
                <div className="xs:min-w-[250px] lg:w-auto">
                    <motion.p variants={variant1} initial='hidden' animate={modelControls}
                     className="font-light mt-2">Range</motion.p>
                    <motion.p variants={variant2} initial='hidden' animate={modelControls}
                     className="text-3xl font-bold">Go Anywhere</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={modelControls}
                     className="hidden w-[250px] border-[3px] border-gray-800 rounded-full  mt-6 py-1  hover:bg-gray-800 hover:text-white"
                    >ORDER NOW</motion.button>
                </div>
                <div>
                    <motion.p variants={variant3} initial='hidden' animate={modelControls}
                     className="text-sm lg:pt-3">Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week.</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={modelControls}
                     className=" w-[250px] border-[3px] border-gray-800 rounded-full  mt-6 py-1 lg:mt-[200px] hover:bg-gray-800 hover:text-white "
                    >ORDER NOW</motion.button>
                </div>                
            </div>
        </div>
    );
}
 
export default Range;
