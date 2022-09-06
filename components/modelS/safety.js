import Image from "next/image";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Safety = () => {

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
                delay : 0.3
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
                delay : 0.4
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
                delay : 0.5
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
    const Svgvariant1 = {
        hidden : {
            opacity : 0 
        },
        visible : {
            opacity : 1 ,
            transition : {
                delay : 1.9 ,duration:0.2
            }
        }
    }

    const Controls1 = useAnimation()  
    const Controls2 = useAnimation()        
    const Controls3 = useAnimation()        
    const Controls4 = useAnimation()         
    const SvgControls = useAnimation()
    const SvgControls1 = useAnimation()
    const SvgControls2 = useAnimation()
        

    const { ref :TopicRef , inView :TopicinView } = useInView()
    const { ref : SvgRef , inView : SvginView } = useInView()
    const { ref : SvgRef1 , inView : SvginView1 } = useInView()
    const { ref : SvgRef2, inView : SvginView2 } = useInView()
    

    useEffect(()=>{
        if (TopicinView){
            Controls1.start("visible")
            Controls2.start('visible')
            Controls3.start('visible')
            Controls4.start('visible')
        }else{
            Controls1.start('hidden')
            Controls2.start('hidden')
            Controls3.start('hidden')
            Controls4.start('hidden')
        }
        if(SvginView){
            SvgControls.start("visible")
        }else{
            SvgControls.start("hidden")
        }
        if(SvginView1){
            SvgControls1.start("visible")
        }else{
            SvgControls1.start("hidden")
        }
        if(SvginView2){
            SvgControls2.start("visible")
        }else{
            SvgControls2.start("hidden")
        }

    },[TopicinView , SvginView , SvginView1 , SvginView2])


    return (
        <div className="ml-10 mt-[40px]  flex flex-col lg:flex-row-reverse mb-16 justify-between bg-white">
            <div className="relative lg:w-[65%] mt-24 xs:mt-0 " >              
                
                <div className="absolute hidden h-[500px] z-30 w-full top-[30px] xl:block">
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls}
                     className="absolute z-40 text-base font-bold top-[32%] left-[19%]">Front Impact Protectin</motion.p>
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls}
                     className="absolute z-40 text-base font-bold top-[10%] left-[53%]">Side Impact Protection</motion.p>
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls}
                     className="absolute z-40 text-base font-bold bottom-[-10%] left-[49%]">Rollover Protection</motion.p>
                    <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 500 700" >
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="90" cy="200" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={SvgControls}
                            stroke="black" strokeWidth={'2px'} d="M90 196 v-100" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="260" cy="80" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={SvgControls}
                            stroke="black" strokeWidth={'2px'} d="M260 77 v-47" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="240" cy="230" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={SvgControls}  
                            stroke="black" strokeWidth={'2px'} d="M240 233 v60" />
                    </svg>     
                </div> 
                <div className="absolute hidden h-[450px] z-30 w-[85%] top-[110px] left-[40px] md:top-[70px] sm:block xl:hidden ">
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls1}
                     className="absolute z-40 text-sm font-bold top-[32%] left-[19%]">Front Impact Protectin</motion.p>
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls1}
                     className="absolute z-40 text-sm font-bold top-[10%] left-[53%]">Side Impact Protection</motion.p>
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls1}
                     className="absolute z-40 text-sm font-bold bottom-[-10%] left-[23%]">Rollover Protection</motion.p>
                    <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 500 700" >
                        <circle fill='white' stroke="black" strokeWidth={'1px'} r="2" cx="107" cy="225" />
                        <motion.path  variants={Svgvariant} initial='hidden' animate={SvgControls1}
                            stroke="black" strokeWidth={'1px'} d="M106 225 v-80" />
                        <circle fill='white' stroke="black" strokeWidth={'1px'} r="2" cx="220" cy="140" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={SvgControls1}
                            stroke="black" strokeWidth={'1px'} d="M220 139 v-70" />
                        <circle fill='white' stroke="black" strokeWidth={'1px'} r="2" cx="240" cy="245" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={SvgControls1} 
                            stroke="black" strokeWidth={'1px'} d="M240 246 v80" />
                    </svg>     
                </div> 
                <div className="absolute h-[500px] z-30 w-[85%] -top-[100px] left-[40px] sm:hidden ">
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls2}
                     className="absolute z-40 text-[0.70rem] font-bold top-[23%] left-[16%]">Front Impact Protectin</motion.p>
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls2}
                     className="absolute z-40 text-[0.70rem] font-bold top-[12%] left-[53%]">Side Impact Protection</motion.p>
                    <motion.p variants={Svgvariant1} initial='hidden' animate={SvgControls2}
                     className="absolute z-40 text-[0.70rem] font-bold bottom-[43%] left-[64%]">Rollover Protection</motion.p>                    
                    <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 500 700" className="bottom-[100px] " >
                        <circle fill='white' stroke="black" strokeWidth={'3px'} r="3" cx="70" cy="380" />
                        <motion.path  variants={Svgvariant} initial='hidden' animate={SvgControls2}
                            stroke="black" strokeWidth={'3px'} d="M70 377 v-150" />
                        <circle fill='white' stroke="black" strokeWidth={'3px'} r="3" cx="330" cy="217" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={SvgControls2}  
                            stroke="black" strokeWidth={'3px'} d="M330 214 v-70" />
                        <circle fill='white' stroke="black" strokeWidth={'3px'} r="3" cx="330" cy="400" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={SvgControls2}  
                            stroke="black" strokeWidth={'3px'} d="M330 403 v80" />
                    </svg>     
                </div>                
                    
                
                <div className=" relative sm:hidden ml-10" ref={SvgRef2}>
                    <Image src='/modelS/S13-mod.jpg' width='300px' height={'200px'} />
                </div>
                <div className="hidden relative sm:block xl:hidden mx-[100px] mt-[200px]"  ref={SvgRef1}>
                    <Image src='/modelS/S13.jpg' width='500px' height={'320px'} />
                </div>
                <div className="hidden relative xl:block mx-[50px] mt-[120px] " ref={SvgRef}>
                    <Image src='/modelS/S13.jpg' width='800px' height={'450px'} />
                </div>  
            </div>
            
            
            <div className="lg:w-[30%] mt-5 flex flex-col md:flex-row lg:flex-col" ref={TopicRef}>
                <div className="min-w-[300px]" >
                    <motion.p className="font-light text-xl"
                     variants={variant1} initial='hidden' animate={Controls1}
                    >Safety</motion.p>
                    <motion.p className="text-2xl md:text-3xl mb-3"
                     variants={variant2} initial='hidden' animate={Controls2}
                    >High Impact Protection</motion.p>
                    <motion.button  variants={variant4} initial='hidden' animate={Controls4}
                     className="hidden  mx-auto justify-center md:mx-0  border-[4px] border-gray-700 
                    w-5/6 md:w-[230px] rounded-full hover:text-white hover:bg-gray-700 md:flex mt-4 lg:hidden ">ORDER NOW</motion.button>
                </div>
                <div>
                    <motion.p  variants={variant3} initial='hidden' animate={Controls3}
                     className="mt-4 text-xs sm:text-sm xl:text-lg max-w-4xl md:text-lg">Model S is built from the ground up as an electric vehicle,
                    with a high-strength architecture and floor-mounted battery pack for
                    incredible occupant protection and low rollover risk. Every new Model S
                    includes Tesla&apos;s latest active safety features, such as Automatic Emergency Braking, at no extra cost.</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={Controls4}
                     className="  mx-auto justify-center md:mx-0  border-[4px] border-gray-700 
                    w-5/6 md:w-[250px] rounded-full hover:text-white hover:bg-gray-700 md:hidden mt-4 lg:flex lg:mt-[250px] xl:mt-[330px]">ORDER NOW</motion.button>
                </div>
                
            </div>
        </div>
    )
}
 
export default Safety;