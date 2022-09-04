import Image from "next/image";
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const  NewWeels =()=>{

    const variant = {
        hidden : {
            y :50 , opacity : 0 ,
        },
        visible : {
            y : 0 , opacity : 1 ,
            transition : {
                delay : 0.2
            }
        }
    }
    const variant1 = {
        hidden : {
            y :50 , opacity : 0 ,
        },
        visible : {
            y : 0 , opacity : 1 ,
            transition : {
                delay : 0.4
            }
        }
    }

    const { ref : ref1, inView : inView1} = useInView()
    const { ref : ref2, inView : inView2} = useInView()
    const { ref : ref3, inView : inView3} = useInView()
    const { ref : ref4, inView : inView4} = useInView()
    const { ref : ref5, inView : inView5} = useInView()
    const { ref : ref6, inView : inView6} = useInView()

    const Controls1 = useAnimation()
    const Controls2 = useAnimation()
    const Controls3 = useAnimation()
    const Controls4 = useAnimation()
    const Controls5 = useAnimation()
    const Controls6 = useAnimation()
 
    useEffect(()=>{
        if(inView1){
            Controls1.start('visible')
        }if(!inView1){
            Controls1.start('hidden')
        }
        if(inView2){
            Controls2.start('visible')
        }if(!inView2){
            Controls2.start('hidden')
        }
        if(inView3){
            Controls3.start('visible')
        }if(!inView3){
            Controls3.start('hidden')
        }
        if(inView4){
            Controls4.start('visible')
        }if(!inView4){
            Controls4.start('hidden')
        }
        if(inView5){
            Controls5.start('visible')
        }if(!inView5){
            Controls5.start('hidden')
        }
        if(inView6){
            Controls6.start('visible')
        }if(!inView6){
            Controls6.start('hidden')
        }
    },[inView1, inView2 ,inView3 , inView4 , inView5 , inView6])

    return(
        <div className="bg-black text-white relative w-full py-24">
        <div className='flex flex-col md:flex-row-reverse md:px-[5%] lg:px-[10%]' ref={ref1}>
            <motion.div variants={variant} initial='hidden' animate={Controls1}
             className="md:w-1/2 ">
                <div className=" w-full relative">
                    <Image src='/modelX/X13.jpg' height={'300px'} width='600px' />
                </div>
            </motion.div>                
            <motion.div variants={variant1} initial='hidden' animate={Controls2} 
             className="pb-14 md:pb-0 md:w-1/2  my-auto ml-8 md:ml-0 md:grid md:justify-items-start ">
                <div className="w-[80%]  ">
                    <p className="mb-3 mt-2 font-bold " ref={ref2}>New Wheels and Tires</p>
                    <p className="text-sm">New performance tires deliver better handling and ride quality with lower rolling resistance and are paired with new aerodynamic wheels for an updated look.</p>
                </div>
                
            </motion.div>
        </div>

        <div className='flex flex-col md:flex-row md:px-[5%] lg:px-[10%]' ref={ref3}>
            <motion.div variants={variant} initial='hidden' animate={Controls3}
             className="md:w-1/2 ">
                <div className=" w-full relative">
                <Image src='/modelX/X14.jpg' height={'300px'} width='600px' />
                </div>
            </motion.div>                
            <motion.div variants={variant1} initial='hidden' animate={Controls4}
             className="pb-14 md:pb-0 md:w-1/2  my-auto ml-8 md:ml-0 md:grid md:justify-items-end">
                <div className="w-[80%]  ">
                    <p className="mb-3 mt-2 font-bold " ref={ref4}>Optimized Aerodynamics</p>
                    <p className="text-sm">Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.</p>
                </div>                    
            </motion.div>
        </div>

        <div className='flex flex-col md:flex-row-reverse md:px-[5%] lg:px-[10%]' ref={ref5}>
            <motion.div  variants={variant} initial='hidden' animate={Controls5} 
             className="md:w-1/2 ">
                <div className=" w-full relative">
                    <Image src='/modelX/X15.jpg' height={'300px'} width='600px' />
                </div>
            </motion.div>                
            <motion.div  variants={variant1} initial='hidden' animate={Controls6} 
             className="pb-14 md:pb-0 md:w-1/2  my-auto ml-8 md:ml-0 md:grid md:justify-items-start">
                <div className="w-[80%]  ">
                    <p className="mb-3 mt-2 font-bold " ref={ref6}>Refined Styling</p>
                    <p className="text-sm">Exterior design combines an iconic look with elegant proportions.</p>
                </div>                    
            </motion.div>
        </div>

    </div>
    )
}
export default NewWeels;