import { useEffect, useState } from "react"
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

function Features() {

    const variant1 = {
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
    const variant2 = {
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

   const { ref , inView} = useInView()
   const Controls = useAnimation()

   useEffect(()=>{
        if(inView){
            Controls.start('visible')
        }else{
            Controls.start("hidden")
        }
   },[inView])

    const a = '/modelS/Xv1.mp4'
    const b = '/modelS/Xv2.mp4'
    const c = '/modelS/Xv3.mp4'
    const d = '/modelS/Xv4.mp4'

    const [width , setWidth ] = useState(undefined)
        
    const [video,setVideo] = useState(a)

    useEffect(()=>{
        const interval1 = setInterval(()=>{
            if (video === a){
                setVideo(b)
            }
        },15000)

        const interval2 = setInterval(()=>{
            if (video === b){
                setVideo(c)
            }
        },9000)

        const interval3 = setInterval(()=>{
            if (video === c){
                setVideo(d)
            }
        },4000)

        const interval4 = setInterval(()=>{
            if (video === d){
                setVideo(a)
            }
        },10000)

        return () =>{
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        } 
    },[video])


    useEffect(()=>{
        const handleResize =()=>{
            setWidth( window.innerWidth)
        }
        window.addEventListener('resize' , handleResize)
        return()=> window.removeEventListener('resize' , handleResize)
    },[])


    return (
        <div className="py-10">
        <div className="max-w-4xl ml-8 md:ml-28  lg:ml-[100px] px-4" ref={ref}>
            <motion.p className=" font-bold text-2xl my-4 "  variants={variant1} initial='hidden' animate={Controls}>Features</motion.p>
            <motion.p
             className="text-sm"  variants={variant2} initial='hidden' animate={Controls}
            >Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, includi
            </motion.p>
        </div>

        <div className={video === a ? "flex justify-center" : 'hidden'}>            
            <video src={a} loop autoPlay defaultmuted='true' width='1000px' />        
        </div>
        <div className={video === b ? "flex justify-center" : 'hidden'}>            
            <video src={b} loop autoPlay defaultmuted='true' width='1000px' />        
        </div>
        <div className={video === c ? "flex justify-center" : 'hidden'}>            
            <video src={c} loop autoPlay defaultmuted='true' width='1000px' />        
        </div>
        <div className={video === d ? "flex justify-center" : 'hidden'}>            
            <video src={d} loop autoPlay defaultmuted='true' width='1000px' />        
        </div>

        <div className="relative h-[200px]  sm:hidden overflow-x-hidden ">
            <div className={video === a && "absolute  flex  text-center md:hidden left-[3%] ease-in duration-500" ||
            video === b && "absolute  flex sm:hidden text-center md:hidden -left-[20%] ease-in duration-500" || 
            video === c && "absolute  flex sm:hidden text-center md:hidden -left-[50%] ease-in duration-500" || 
            video === d && width === undefined && "absolute  flex sm:hidden text-center md:hidden -left-[80%] ease-in duration-500" ||
            video === d && width <= 372 && "absolute  flex sm:hidden text-center md:hidden -left-[80%] ease-in duration-500" ||
            video === d && width >372   &&  "absolute  flex sm:hidden text-center md:hidden -left-[60%] ease-in duration-500" }>
                <div className={video === a ? " w-[150px] border-t-4 border-black cursor-pointer"
                :" w-[150px] border-t-2 border-black cursor-pointer opacity-40"} onClick={()=>setVideo(a)}>
                    <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Navigate on Autopilot</p>
                    <p className="text-xs text-start">Active guidance from on-ramp to off-ramp</p>
                </div>
                <div className={video === b ? " w-[150px] border-t-4 border-black cursor-pointer mx-5"
                : " w-[150px] border-t-2 border-black cursor-pointer mx-5 opacity-40"} onClick={()=>setVideo(b)}>
                    <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Auto Lane Change</p>
                    <p className="text-xs text-start">Automatically change lanes while driving on the highway</p>
                </div>
                <div className={video === c ? " w-[150px] border-t-4 border-black cursor-pointer mr-5"
                :" w-[150px] border-t-2 border-black cursor-pointer mr-5 opacity-40"} onClick={()=>setVideo(c)}>
                    <p className="text-top py-3 text-sm sm:text-base font-bold text-start">Summon</p>
                    <p className="text-xs text-start">Automatically retrive your car</p>
                </div>
                <div className={video === d ? " w-[150px] border-t-4 border-black cursor-pointer "
                : " w-[150px] border-t-2 border-black cursor-pointer opacity-40"} onClick={()=>setVideo(d)}>
                    <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Autopark</p>
                    <p className="text-xs text-start">Parallel and perpendicular parking with a single touch</p>
                </div>
            </div>

        </div>

        <div className="hidden sm:block overflow-x-hidden text-center md:hidden">
            <div className={video === a ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer"
             :"inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer opacity-40"} onClick={()=>setVideo(a)}>
                <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Navigate on Autopilot</p>
                <p className="text-xs text-start">Active guidance from on-ramp to off-ramp</p>
            </div>
            <div className={video === b ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer mx-5"
            : "inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer mx-5 opacity-40"} onClick={()=>setVideo(b)}>
                <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Auto Lane Change</p>
                <p className="text-xs text-start">Automatically change lanes while driving on the highway</p>
            </div>
            <div className={video === c ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer mr-5"
             :"inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer mr-5 opacity-40"} onClick={()=>setVideo(c)}>
                <p className="text-top py-3 text-sm sm:text-base font-bold text-start">Summon</p>
                <p className="text-xs text-start">Automatically retrive your car</p>
            </div>
            <div className={video === d ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer "
             : "inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer opacity-40"} onClick={()=>setVideo(d)}>
                <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Autopark</p>
                <p className="text-xs text-start">Parallel and perpendicular parking with a single touch</p>
            </div>

        </div>
        
        <div className="hidden md:block w-full text-center ">
            <div className={video === a ? "inline-block align-text-top w-[150px] lg:w-[200px] text-start pb-3 border-t-4 border-black  cursor-pointer"
            : "inline-block align-text-top w-[150px] lg:w-[200px] text-start pb-3 border-t-2 border-black opacity-40  cursor-pointer"} onClick={()=>setVideo(a)}>
                <p className="text-top py-3 text-lg font-bold  ">Navigate on Autopilot</p>
                <p>Active guidance from on-ramp to off-ramp</p>
            </div>
            <div className={video === b ? "inline-block  align-text-top w-[150px] lg:w-[200px] text-start mx-12  border-t-4 border-black  cursor-pointer" :
               "inline-block  align-text-top w-[150px] lg:w-[200px] text-start mx-12  border-t-2 border-black opacity-40  cursor-pointer" } onClick={()=>setVideo(b)}>
                <p className="py-3 text-lg font-bold">Auto Lane Change</p>
                <p>Automatically change lanes while driving on the highway</p>
            </div>
            <div className={video === c ? "inline-block  align-text-top w-[150px] lg:w-[200px] text-start  border-t-4 border-black  cursor-pointer" : 
            "inline-block  align-text-top w-[150px] lg:w-[200px] text-start  border-t-2 border-black opacity-40  cursor-pointer"} onClick={()=>setVideo(c)}>
                <p className="py-3 text-lg font-bold">Summon</p>
                <p>Automatically retrive your car</p>
            </div>
            <div className={ video === d ? "inline-block  align-text-top w-[150px] lg:w-[200px] text-start ml-12 border-t-4 border-black cursor-pointer" 
             : "inline-block  align-text-top w-[150px] lg:w-[200px] text-start ml-12 border-t-2 border-black opacity-40  cursor-pointer"} onClick={()=>setVideo(d)}>
                <p className="py-3 text-lg font-bold">Autopark</p>
                <p>Parallel and perpendicular parking with a single touch</p>
            </div>
        </div>
        
        </div>
        
        
    );
}

export default Features;