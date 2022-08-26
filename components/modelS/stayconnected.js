import Image from "next/image";
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function StayConnected() {

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

    return ( 
        <div className="bg-black relative w-full py-24">
            <div className="flex flex-col md:flex-row" ref={ref1}>
                <motion.div className="md:w-1/2 md:ml-[200px] " 
                variants={variant} initial='hidden' animate={Controls1}>
                    <Image src='/modelS/S3.jpg' width={'600px'} height='300px'/>
                </motion.div>
                <motion.div variants={variant1} initial='hidden' animate={Controls2} 
                className=" pb-14 text-white ml-8 md:ml-0 md:w-1/2 md:pb-0  flex flex-col my-auto ">
                    <p className="mb-3 mt-2 font-bold " ref={ref2}>Stay Connected</p>
                    <p className="w-[90%]">Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row-reverse"  ref={ref3}>
                <motion.div variants={variant} initial='hidden' animate={Controls3} 
                 className=" md:w-1/2 md:ml-[100px]">
                    <video src='/modelS/Sv6.mp4' autoPlay loop defaultmuted='true' width='600px' />
                </motion.div>
                
                <motion.div variants={variant1} initial='hidden' animate={Controls4} 
                className=" pb-14 text-white ml-8 md:ml-0 md:w-1/2 md:pb-0  flex flex-col my-auto ">
                    <p className='md:ml-[200px] mt-2 mb-3 font-bold' ref={ref4}>Immersive Sound</p>
                    <p className=" md:ml-[200px] w-[90%]">A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                </motion.div>
                
                
            </div>
            <div className="flex flex-col md:flex-row" ref={ref5}>
                <motion.div variants={variant} initial='hidden' animate={Controls5} 
                 className=" md:w-1/2 md:ml-[200px]">
                    <Image src='/modelS/S4.jpg' width={'600px'} height='300px'/>
                </motion.div>
                <motion.div variants={variant1} initial='hidden' animate={Controls6} 
                 className="pb-14 text-white ml-8 md:ml-0 md:w-1/2 md:pb-0  flex flex-col my-auto ">
                    <p className="mt-2 mb-3 font-bold" ref={ref6}>Stay Connected</p>
                    <p className="w-[90%]">Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                </motion.div>
            </div>
        </div>
    );
}

export default StayConnected;
