import Image from "next/image"
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const BeyondLudicrious =()=>{

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
                delay : 0.4
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
                delay : 0.6
            }
        }
    }

    const Controls = useAnimation()        
    const { ref , inView  } = useInView()

    const TopicControls = useAnimation()
    const { ref : TopicRef , inView : TopicinView } = useInView()

    useEffect(()=>{
        if (inView){
            Controls.start("visible")
        }
        if(!inView){
            Controls.start('hidden')
        }
        if (TopicinView){
            TopicControls.start("visible")
        }
        if(!TopicinView){
            TopicControls.start('hidden')
        }
    },[inView , TopicinView])

    return(
        <>
        <div className="h-[500px] relative ">
            <Image src='/modelX/X10.jpg' layout='fill' objectFit="contain"/>
            <div className="absolute bottom-20 w-full">
                <div className="flex justify-around text-white xl:mx-40  lg:mx-52"  ref={ref}>
                    <motion.div className="text-center" 
                     variants={variant1} initial='hidden' animate={Controls}>
                        <p className="text-xl md:text-2xl font-bold">1,020hp</p>
                        <p>Peak Power</p>
                    </motion.div>
                    <motion.div className="text-center"
                     variants={variant2} initial='hidden' animate={Controls}>
                        <p className="text-xl md:text-2xl font-bold">9.23s</p>
                        <p>@155 mph 1/4 mile</p>
                    </motion.div>
                    <motion.div className="text-center"
                     variants={variant3} initial='hidden' animate={Controls}>
                        <p className="text-xl md:text-2xl font-bold">1.99s</p>
                        <p>0-60 mph*</p>
                    </motion.div>
                </div>
            </div>
        </div>
        <motion.div variants={variant1} initial='hidden' animate={TopicControls} className="lg:flex">
            <div className="ml-10 my-8 lg:ml-[100px] xl:ml-[150px] mr-[100px]" ref={TopicRef}>
                <p className="font-light text-lg">Plaid</p>
                <p className="text-2xl md:text-3xl mb-3">BeyondLudicrious</p> 
                <div className="mt-4 hidden lg:block lg:w-[250px] text-center border-gray-800  border-[4px] rounded-full py-1  hover:bg-gray-800 hover:text-white ">
                    ORDER NOW
                </div>               
            </div>
            <div className="ml-10 mr-3  max-w-4xl lg:my-auto ">
                <p className="sm:text-sm">Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
            </div>
            <div className="mt-10 mx-auto w-[90%] text-center border-gray-800  border-[4px] rounded-full py-1 hover:bg-gray-800 hover:text-white md:w-[200px] md:ml-10 lg:hidden">
                ORDER NOW
            </div>
        </motion.div>
        
        </>
    )
}
export default BeyondLudicrious