import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Range =()=>{

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
        <div className="xl:flex ">
            <div className="relative">
                <video src='/modelS/Sv7.mp4' autoPlay loop defaultmuted='true' width='1110px' />
                <div className="absolute bottom-5 lg:bottom-20 w-full">
                    <div className="text-center flex px-10 justify-between text-white md:px-[200px]" ref={ref}>
                        <motion.div  variants={variant1} initial='hidden' animate={Controls}>
                            <p className='text-xl md:text-3xl font-bold'>405 mi</p>
                            <p className="text-xs">Range</p><p className="text-xs"> (EPA est)</p>
                        </motion.div>
                        <motion.div  variants={variant2} initial='hidden' animate={Controls}>
                            <p className='text-xl md:text-3xl font-bold'>15 min</p>
                            <p className="text-xs">Recharge</p><p className="text-xs"> up to 200 mi</p>
                        </motion.div>
                        <motion.div  variants={variant3} initial='hidden' animate={Controls}>
                            <p className='text-xl md:text-3xl font-bold'>35,000+</p>
                            <p className="text-xs">Global</p><p className="text-xs"> Superchargers</p>
                        </motion.div>
                    </div>
                </div>                
            </div> 
            <motion.div variants={variant1} initial='hidden' animate={TopicControls}
             className="lg:flex xl:flex-col xl:w-1/4">
                <div className="ml-10 mt-3 md:my-8 lg:ml-[100px] xl:ml-10 " ref={TopicRef}>
                    <p className="font-light text-xl">Range</p>
                    <h2 className="text-2xl md:text-3xl mb-5">Go Anywhere</h2> 
                    <div className="mt-4 hidden lg:block xl:hidden lg:w-[250px] text-center border-gray-800  border-[4px] rounded-full py-1  hover:bg-gray-800 hover:text-white ">
                        ORDER NOW
                    </div>               
                </div>
                <div className=" pl-8  max-w-4xl lg:my-auto xl:my-2 xl:pr-0 pr-5">
                    <p className="sm:text-sm">With up to 405 miles of estimated range and access to the world&apos;s largest and most powerful fast charging network, you&apos;ll spend less time plugged in and more time on the road.</p>
                </div>
                    <button 
                     className="ml-8  mx-auto justify-center md:mx-0  border-[4px] border-gray-700 
                    w-5/6 md:w-[250px] rounded-full hover:text-white hover:bg-gray-700 md:hidden mt-5 lg:flex lg:mt-[250px] xl:mt-[330px]">ORDER NOW</button>
            </motion.div>
        </div>
        
    )
}
export default Range