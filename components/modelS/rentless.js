import Image from "next/image";
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const  Rentless =()=>{

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
        <>
        <div className="bg-black relative text-white pt-[100px] pb-[50px]">
            <div className="flex flex-col-reverse md:flex-row" ref={ref1}>
                <motion.div  variants={variant1} initial='hidden' animate={Controls2}
                 className="pb-14 pl-10 md:w-[600px] lg:pl-[100px] xl:pl-[150px] md:my-auto">
                    <p ref={ref2} className="pt-2 pb-3  font-bold  md:text-lg">Rentless Performance</p>
                    <p className="text-sm md:text-base">Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                </motion.div>
                <motion.div className="md:ml-[100px] lg:hidden" variants={variant} initial='hidden' animate={Controls1}>
                    <Image src='/modelS/S8.jpg' width='540px' height={'300px'} />
                </motion.div>                
                <motion.div className="hidden md:ml-[100px] lg:block" variants={variant} initial='hidden' animate={Controls1}>
                    <Image src='/modelS/S8.jpg' width='600px' height={'350px'} />
                </motion.div>                
            </div>
            <div className="flex flex-col md:flex-row" ref={ref3}>
                <motion.div className="md:ml-[100px] lg:hidden" variants={variant} initial='hidden' animate={Controls3}>
                    <Image src='/modelS/S9.jpg' width='540px' height={'300px'} />
                </motion.div>                
                <motion.div className="hidden md:ml-[100px] lg:block" variants={variant} initial='hidden' animate={Controls3}>
                    <Image src='/modelS/S9.jpg' width='600px' height={'350px'}/>
                </motion.div>   
                <motion.div variants={variant1} initial='hidden' animate={Controls4}
                 className="pb-14  pl-10 md:w-[600px] lg:pl-[100px] md:my-auto xl:pl-[150px] ">
                    <p ref={ref4} className="pt-2 pb-3  font-bold md:text-lg">Optimized Aerodynamics</p>
                    <p className="text-sm md:text-base">Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                </motion.div>             
            </div>
            <div className="flex flex-col-reverse md:flex-row" ref={ref5}>
                <motion.div variants={variant1} initial='hidden' animate={Controls6}
                 className="pb-14  pl-10 md:w-[600px] lg:pl-[100px] xl:pl-[150px] md:my-auto">
                    <p ref={ref6} className="pt-2 pb-3 font-bold  md:text-lg">Refined Styling</p>
                    <p className="text-sm md:text-base">An iconic silhouette meets refreshed, elegant proportions.</p>
                </motion.div>
                <motion.div className="md:ml-[100px] lg:hidden" variants={variant} initial='hidden' animate={Controls5}>
                    <Image src='/modelS/S10.jpg' width='540px' height={'300px'} />
                </motion.div >                
                <motion.div className="hidden md:ml-[100px] lg:block" variants={variant} initial='hidden' animate={Controls5}>
                    <Image src='/modelS/S10.jpg' width='600px' height={'350px'} />
                </motion.div>                
            </div>
        </div>
        
        </>
    )
}
export default Rentless;