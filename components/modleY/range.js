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
        <div className="lg:flex ">
            <div className="relative">
                <video src='/modelY/Yv1_.mp4' autoPlay loop defaultmuted='true' width='840px' />
                <div className="absolute bottom-5 lg:bottom-20 w-full">
                    <div className="text-center flex px-10 justify-between text-white lg:px-20" ref={ref}>
                        <motion.div  variants={variant1} initial='hidden' animate={Controls}>
                            <p className='text-2xl font-bold'>405 mi</p>
                            <p className="text-sm">Range</p><p className="text-sm"> (EPA est)</p>
                        </motion.div>
                        <motion.div  variants={variant2} initial='hidden' animate={Controls}>
                            <p className='text-2xl font-bold'>15 min</p>
                            <p className="text-sm">Recharge</p><p className="text-sm"> up to 200 mi</p>
                        </motion.div>
                        <motion.div  variants={variant3} initial='hidden' animate={Controls}>
                            <p className='text-2xl lfont-bold'>35,000+</p>
                            <p className="text-sm">Global</p><p className="text-sm"> Superchargers</p>
                        </motion.div>
                    </div>
                </div>                
            </div> 
            <motion.div variants={variant1} initial='hidden' animate={TopicControls}
             className="lg:flex-col ">
                <div className="ml-10 my-8 " ref={TopicRef}>
                    <p className="font-light">Range</p>
                    <h2 className="font-bold">Go Anywhere</h2> 
                    <div className="mt-4 hidden  xl:hidden lg:w-[250px] text-center border-gray-800  border-[4px] rounded-full py-1  hover:bg-gray-800 hover:text-white ">
                        ORDER NOW
                    </div>               
                </div>
                <div className="ml-10 mr-10  max-w-4xl lg:w-[300px] ">
                    <p className="text-sm">With up to 405 miles of estimated range and access to the world&apos;s largest and most powerful fast charging network, you&apos;ll spend less time plugged in and more time on the road.</p>
                </div>
                <div className="my-3 ml-10 w-[250px] text-center border-gray-800 lg:mt-[250px]  border-[4px] rounded-full py-1 hover:bg-gray-800 hover:text-white md:w-[200px] md:ml-10 lg:block">
                    ORDER NOW
                </div>
            </motion.div>
        </div>
        
    )
}
export default Range