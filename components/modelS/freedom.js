import Image from "next/image";
import { useEffect, useState } from 'react'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

function Freedom() {

    const a = '/modelS/Smap1.jpg'
    const b = '/modelS/Smap2.jpg'
    const c = '/modelS/Smap3.jpg'
    const d = '/modelS/Smap4.jpg'

    const [map ,setMap] = useState(a)

    const [width , setWidth ] = useState(undefined)

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

    const Svgvariant = {
        hidden : {
            opacity : 0 , pathLength : 0
        },
        visible : {
            opacity : 1 , pathLength :1,
            transition : {
                delay : 0.4 ,duration:1.5,   ease : "easeInOut" 
            }
        }
    }
 

    const { ref , inView } = useInView()
    const Controls = useAnimation()

    const { ref : mapRef1, inView :mapinView1 } = useInView()
    const mapControls1 = useAnimation()

    const { ref : mapRef2, inView :mapinView2 } = useInView()
    const mapControls2 = useAnimation()

    const { ref : mapRef3, inView :mapinView3 } = useInView()
    const mapControls3 = useAnimation()

    const { ref : mapRef4, inView :mapinView4 } = useInView()
    const mapControls4 = useAnimation()

    useEffect(()=>{
        if(inView){
            Controls.start('visible')
        }
        if(!inView){
            Controls.start('hidden')
        }
        if(mapinView1){
            mapControls1.start("visible")
        }
        if(!mapinView1){
            mapControls1.start("hidden")
        }
        if(mapinView2){
            mapControls2.start("visible")
        }
        if(!mapinView2){
            mapControls2.start("hidden")
        }
        if(mapinView3){
            mapControls3.start("visible")
        }
        if(!mapinView3){
            mapControls3.start("hidden")
        }
        if(mapinView4){
            mapControls4.start("visible")
        }
        if(!mapinView4){
            mapControls4.start("hidden")
        }
    },[inView , mapinView1 , mapinView2 , mapinView3 , mapinView4])

    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize' , handleResize)
        return ()=>window.removeEventListener('resize' , handleResize)
    },[])

    return (
        <div className="py-10">
            <div className="my-10 md:my-14 ml-8 md:ml-[150px]" ref={ref}>
                <motion.h2 className="my-3 font-bold"
                 variants={variant} initial='hidden' animate={Controls}
                 >Freedom to Travel</motion.h2>
                <motion.p variants={variant1} initial='hidden' animate={Controls}
                >Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.</motion.p>
            </div>        
            <div className="relative my-5">
                <div className={map === a ? "block" : "hidden"}>
                    <div className="w-full  absolute z-30  ">
                        <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 1225 562" className="absolute " ref={mapRef1}>                        
                            <motion.path variants={Svgvariant} initial = 'hidden' animate={mapControls1} 
                             d="M254 78.5L256 83V87.5V93L260 97.5L264 100.5L266 103V107L269 109.5L275 113.5L281.5 117.5L287.5 120L292.5 121L297.5 122.5L302.5 124.5L307.5 127.5L311.5 131.5L316 134.5L319.5 138.5L322.5 144.5L332.5 152.5L341.5 156.5H347L355.5 148H363.5L371 140L376 144.5L381.5 151.5L384.5 158L388 164.5L393.5 172L399 179L403.5 187L407 194.5L412.5 200L419.5 209L425.5 216L428 223L433.5 228L440.5 233.5L444.5 241V244.5L448.5 248V250.5L450 252.5L453 257L459.5 261.5L464.5 266L470.5 271L475 275.5L481.5 278.5L483.5 281L486.5 289L488 296L488.5 300L490 301.5L491.5 303.5V309L492.5 311.5L495.5 313L497.5 315L501 317L506.5 319.5L508 323L511 324.5L512.5 327.5L515 330.5L520 333L523 335.5L526.5 338.5L531.5 342.5L535.5 346.5L539.5 351L545 355L547 359L551 362V365.5L552.5 370L554 375L557.5 379L558.5 381.5V385.5L561.5 388.5L563 392.5L565 394.5L566.5 397L569 402L571.5 407L574.5 412L577 417L580 422L582.5 425.5L584 427.5L587.5 429.5V432L588.5 434.5L590.5 437L593.5 439.5L595.5 443L597.5 446.5L601.5 448.5L604.5 451L607.5 452.5L611 455.5L612 458.5L612.5 461.5L617 467" fill="none" stroke="black"  strokeWidth="3px" />
                        </svg> 
                    </div>                    
                    <span>
                        <Image src='/modelS/Smap1.jpg' height={'694px'} width='1517px' className="rounded-2xl"/>
                    </span>
                </div>
                <div  className={map === b ? "block" : "hidden"}>
                    <div className="w-full absolute z-30  ">
                        <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 1225 562" className="absolute " ref={mapRef2}>                        
                            <motion.path variants={Svgvariant} initial = 'hidden' animate={mapControls2} 
                            d="M467,446.1l0.1-3.5l-2-3.2l0.1-3.1l-2.5-11.3l2-2l1.8-5.2l6.3-3.5l7.3-10.3l4-2.9l0.1-4.5l-1.1-3.1v-10l4.5-11.7l7-5.4l7.5-8.6l0.5-0.3l13.1-7.4l8.2-11.7l0.4-6.7l3.6-6.7l7.5-3.3l44.6-45.4l9-5.6l34.9-8.8l4.3-9l9-6.5h16.3l4.2-2.7h3.8l21.5-25.9l2.7-5.9l25.7-25.5l1-4.8l9-3.3l6.1-7.7l1.9-6.1l6.3-6.9l4.8-7.5l1-5.2l2.3-2.1l1.7-9l4.4-9.8l2.9-9.8l2.5-2.9h2.5l7.3-4.8v-2.7l9.4-5.4l3.8-4.2h3.6l8.4-8.4v-2.5l5.6-4l1.7-2.5l1.7-3.3l6.9-3.1l2.3-2.5l10.5-3.3l6.1-4.4h2.9l8.4,6.7l3.1-0.2l1.5-1.9h11.9l8.6-2.7l8.4-0.6l5.6-3.8h6.7l3.6,3.1l2.1-1l2.9,1.5l4.6-1.5l4,1.9l5.2,0.8v7.1v5.4l-1.5,5.9l3.6,11.7v2.9l1,1.9v3.6l1.9,2.5h8.4"  fill="none" stroke="black"  strokeWidth="3px" />
                        </svg> 
                    </div>
                    
                    <span className="h-[694px] bg-[#ebeb3">
                        <Image src='/modelS/Smap2.jpg' height={'694px'} width='1517px' className="rounded-2xl"/>
                    </span>
                </div>
                <div  className={map === c ? "block" : "hidden"}>
                    <div className="w-full absolute z-30  ">
                        <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 1225 562"  className="absolute " ref={mapRef3}>                        
                            <motion.path variants={Svgvariant} initial = 'hidden' animate={mapControls3} 
                             d="M257.3,476.5l-0.2-6.3l4.4-6.3l0.7-7.2l3.2-3.5l3.7-3.8l0.8-2.7l2.4-1.1l1.8-1l1.3-6.5l2-1.1l6.4,2.1c0,0,3.2,1.7,4.2-0.4c1.1-2.1,1.4-3,2-3.4s1.1-3.8,1.1-3.8l4.7-3.8l3.8-1.7c0,0,5.8-5,6.6-8.4c0,0,1.1-3,3.4-3.5s5.6-2.2,5.8-4.3c0.1-2.1-0.8-4.7-0.5-5.4c0.3-0.7,2-5.8,3.9-7c2-1.2,4.3-2.2,4.9-1.2c0.6,1.1,4.8-0.4,6-1.2c1.2-0.8,2.5-0.9,4.5-1.1c2-0.1,5.5-2.6,7.1-3.3c1.6-0.7,3.8-1.1,6.2-0.8s4.6,0.4,5.8-0.8c1.2-1.2,3.4-3.4,6-4.3c2.6-0.9,7.3-2.9,8.9-4.2c1.6-1.3,6.2-2.1,8.7-2.8c2.5-0.7,5.9-2.6,6.8-3.3c0.9-0.7,3.7-3.2,5.4-3.8c1.7-0.7,5.1-3.5,6.4-5.9s4.5-4.2,11.2-5.1c6.7-0.9,11.4-0.3,12.9-0.7s9.1-2.1,9.8-2.8c0.8-0.7,7.9-8.9,8.5-10.4c0.7-1.4,0.3-4.7,1.7-5.4s5.3-2.2,6.4-3.5c1.2-1.3,4.5-5.1,5.3-5.9c0.8-0.8,3-2.5,5.1-3.3c2.1-0.8,12.7-7.1,13.8-9.7c1.1-2.6,3-7,3.8-9.2c0.8-2.2,5.1-12.1,5.1-12.1s5.4-5.1,6.3-6.2c0.9-1.1,3.2-4,3.2-4s1.1-3.9,4-6.8c2.9-2.9,3.1-4.9,4.7-6.1c1.6-1.2,4.2-8.1,4.6-8.5l3.5-7.4l3.1-3.9l1.3-4.9l4.1-7c0,0,0.9-6.6-2-9.7c-2.9-3.1-0.5-6,1.7-7.4c2.2-1.3,9.2-3.2,11.4-3.7c2.2-0.5,5.6-6.3,6-6.7c0.4-0.4,6.4-3.3,6.4-3.3l3.8-3.2l7.9-2.3l5.8-5.8c0,0,5.8-0.8,6.8-0.8c1.1,0,2.2,1.7,4.1,0.1c1.8-1.6,12.7-7.4,12.7-7.4s7.1-4.6,8.9-8.2s8.5-5.8,9.4-6.5c0.9-0.7,4.6-6.1,6.6-10.3s4.6-9.2,5.4-9.7c0.8-0.5,4.5-4.7,5.2-5.8c0.8-1.1,6.4-13.3,7.1-14.2c0.7-0.9,3.5-7.7,6-9.1l1.3-0.8c0,0,3.6-2.1,5.3-2.7c1.7-0.7,6.4-2.2,8.8-2.8s5.8-2.5,7.2-3.7s6.4-3.4,8-4.1c1.6-0.7,13.3-5,15.1-5.3c1.8-0.3,9.9-2.9,12.9-4.8c0,0,7.6-0.7,8-0.7c0.4,0,3.7-1.3,3.7-1.3s8.3-0.7,10.5,0s2.8,0,5-1.3s5.8-3.8,5.8-4.2c0-0.4,3.3-4.7,3.3-4.7s5.9-2.1,9.5-3.6s6.1-1.1,6.7-2.4c0.6-1.3,1.7-2.6,3.5-3.1c1.8-0.5,6.4-2,7.9-2.9s4.2-0.9,6-0.8s6.8,0.8,8.7-0.7c1.9-1.4,7.8-3.8,8.7-4.1c0.9-0.3,5.9-1.3,5.9-1.3s6.7-2.6,8.3-2.6c1.6,0,8.5-2,8.5-2s9.1-0.8,10.1-0.8c1.1,0,4.2,2,5,2.4c0.8,0.4,8.8,1.2,9.9-2.5l3.5-3.3c0,0,1.2,0.4,1.5,0c0.3-0.4,2.4-3.3,2.4-3.3l3-5.5l0.5-3.8l-3.5-2.6" fill="none" stroke="black"  strokeWidth="3px" />
                        </svg> 
                    </div>
                    
                    <span className="h-[694px] bg-[#ebeb3">
                        <Image src='/modelS/Smap3.jpg' height={'694px'} width='1517px' className="rounded-2xl"/>
                    </span>
                </div>
                <div  className={map === d ? "block" : "hidden"}>
                    <div className="w-full  absolute z-30  ">
                        <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 1225 562"  className="absolute " ref={mapRef4}>                        
                            <motion.path variants={Svgvariant} initial = 'hidden' animate={mapControls4} 
                             d="M783.8,488.9v-3.9l2.8-6.4v-2.2l1.9-3.3v-5.4l1.4-2.6v-4l1.9-3.8V446l3.7-4v-11.5l2.9-7.2l0.3-11.5l-0.3-15.5l1.2-4.1L796,387v-6.3l-1.8-3.3v-10.3l-4.2-7.4l-3.7-10l-6.7-9.4l-6.8-6.7v-4.6l-3.7-8.6l-3.7-4l-7-12.8l-2.6-9.2l-3.4-6.4v-2.8l-0.4-7.6l-4.1-9.9l-2.9-3.6l-1.6-4l-3.9-3.9l-1.5-0.7h-15l-6.5-7.9l-5.7-4.7h-18.3l-4.9-1.8l-9.8-14.9l-4.9-4.3l-0.7-5.4l-16.1-16.9l-1.2-9l-9.1-12.8L636,167l-5.7-2.7L615,151l-1.5-2.1l-3.1-9.7l-1.1-8.8l-2.7-3.6l-1.8-8.4l-4.3-5.4l-3.9-9.1l-0.3-9.4l-7.9-9.7l-0.4-2l4.4-4.8l4.7-0.5l1.1-4.2" fill="none" stroke="black"  strokeWidth="3px" />
                        </svg> 
                    </div>
                    
                    <span className="h-[694px] ">
                        <Image src='/modelS/Smap4.jpg' height={'694px'} width='1517px' className="rounded-2xl"/>
                    </span>
                </div>
            </div>
   
        
            <div className="mt-10">
                <div className="relative h-[200px]  sm:hidden overflow-x-hidden">
                    <div className={map === a && "absolute  flex  text-center md:hidden left-[3%] ease-in duration-500" ||
                    map === b && "absolute  flex sm:hidden text-center md:hidden -left-[20%] ease-in duration-500" || 
                    map === c && "absolute  flex sm:hidden text-center md:hidden -left-[50%] ease-in duration-500" || 
                    map === d && width === undefined && "absolute  flex sm:hidden text-center md:hidden -left-[80%] ease-in duration-500" ||
                    map === d && width <= 372 && "absolute  flex sm:hidden text-center md:hidden -left-[80%] ease-in duration-500" ||
                    map === d && width >372   &&  "absolute  flex sm:hidden text-center md:hidden -left-[60%] ease-in duration-500" }>
                        <div className={map === a ? "w-[150px] border-t-4 border-black cursor-pointer"
                        :" w-[150px] border-t-2 border-black cursor-pointer opacity-40"} onClick={()=>setMap(a)}>
                            <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Navigate on Autopilot</p>
                            <p className="text-xs text-start">Active guidance from on-ramp to off-ramp</p>
                        </div>
                        <div className={map === b ? " w-[150px] border-t-4 border-black cursor-pointer mx-5"
                        : " w-[150px] border-t-2 border-black cursor-pointer mx-5 opacity-40"} onClick={()=>setMap(b)}>
                            <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Auto Lane Change</p>
                            <p className="text-xs text-start">Automatically change lanes while driving on the highway</p>
                        </div>
                        <div className={map === c ? " w-[150px] border-t-4 border-black cursor-pointer mr-5"
                        :" w-[150px] border-t-2 border-black cursor-pointer mr-5 opacity-40"} onClick={()=>setMap(c)}>
                            <p className="text-top py-3 text-sm sm:text-base font-bold text-start">Summon</p>
                            <p className="text-xs text-start">Automatically retrive your car</p>
                        </div>
                        <div onClick={()=>setMap(d)} className={map === d ? " w-[150px] border-t-4 border-black cursor-pointer "
                        : " w-[150px] border-t-2 border-black cursor-pointer opacity-40"} >
                            <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Autopark</p>
                            <p className="text-xs text-start">Parallel and perpendicular parking with a single touch</p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block overflow-x-hidden text-center md:hidden">
                    <div className={map === a ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer"
                    :"inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer opacity-40"} onClick={()=>setMap(a)}>
                        <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Navigate on Autopilot</p>
                        <p className="text-xs text-start">Active guidance from on-ramp to off-ramp</p>
                    </div>
                    <div className={map === b ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer mx-5"
                    : "inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer mx-5 opacity-40"}  onClick={()=>setMap(b)}>
                        <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Auto Lane Change</p>
                        <p className="text-xs text-start">Automatically change lanes while driving on the highway</p>
                    </div>
                    <div className={map === c ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer mr-5"
                    :"inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer mr-5 opacity-40"}  onClick={()=>setMap(c)}>
                        <p className="text-top py-3 text-sm sm:text-base font-bold text-start">Summon</p>
                        <p className="text-xs text-start">Automatically retrive your car</p>
                    </div>
                    <div className={map === d ? "inline-block align-text-top w-[120px] border-t-4 border-black cursor-pointer "
                    : "inline-block align-text-top w-[120px] border-t-2 border-black cursor-pointer opacity-40"}  onClick={()=>setMap(d)}>
                        <p className="text-top py-3 text-sm sm:text-base font-bold text-start ">Autopark</p>
                        <p className="text-xs text-start">Parallel and perpendicular parking with a single touch</p>
                    </div>
                </div>

                <div className="hidden md:block w-full text-center ">
                    <div className={map === a ? "inline-block align-text-top w-[150px] lg:w-[200px] text-start pb-3 border-t-4 border-black  cursor-pointer"
                    : "inline-block align-text-top w-[150px] lg:w-[200px] text-start pb-3 border-t-2 border-black opacity-40  cursor-pointer"} onClick={()=>setMap(a)}>
                        <p className="text-top py-3 text-lg md:text-xl font-bold  ">San Francisco to Los Angeles</p>
                        <p className="text-xl md:text-4xl font-bold">383 miles</p>
                    </div>
                    <div className={map === b ? "inline-block  align-text-top w-[150px] lg:w-[200px] text-start mx-12  border-t-4 border-black  cursor-pointer" :
                    "inline-block  align-text-top w-[150px] lg:w-[200px] text-start mx-12  border-t-2 border-black opacity-40  cursor-pointer" } onClick={()=>setMap(b)}>
                        <p className="py-3 text-lg md:text-xl font-bold">Berkeley to Lake Tahoe</p>
                        <p className="text-xl md:text-4xl font-bold">178 miles</p>
                    </div>
                    <div className={map === c ? "inline-block  align-text-top w-[150px] lg:w-[200px] text-start  border-t-4 border-black  cursor-pointer" : 
                    "inline-block  align-text-top w-[150px] lg:w-[200px] text-start  border-t-2 border-black opacity-40  cursor-pointer"} onClick={()=>setMap(c)}>
                        <p className="py-3 text-lg md:text-xl font-bold">Manhattan to Boston</p>
                        <p className=" relative text-xl md:text-4xl font-bold">211 miles</p>
                    </div>
                    <div className={ map === d ? "inline-block  align-text-top w-[150px] lg:w-[200px] text-start ml-12 border-t-4 border-black cursor-pointer" 
                    : "inline-block  align-text-top w-[150px] lg:w-[200px] text-start ml-12 border-t-2 border-black opacity-40  cursor-pointer"} onClick={()=>setMap(d)}>
                        <p className="py-3 text-lg md:text-xl font-bold">Fort Lauderdale to Orlando</p>
                        <p className="text-xl md:text-4xl font-bold">195 miles</p>
                    </div>
                </div>
            </div> 
        

        </div>
    );
}

export default Freedom
