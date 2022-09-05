import Image from "next/image";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Safety = ({bottom}) => {

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

    
    const Controls = useAnimation()  
    const { ref , inView } = useInView() 

    useEffect(()=>{
        if (inView){
            Controls.start("visible")
        }if(!inView){
            Controls.start('hidden')            
        }
       
    },[inView])  

    return (
        <div className="py-10 flex flex-col lg:flex-row " >
            <div className="bg-white flex justify-center">
                
                <div className="relative w-[300px] md:w-[400px] lg:w-[73vw] " >
                    <p className="absolute text-2xxs z-40 left-[52%] top-[10%] md:text-sm ">Rigid Structure</p>
                    <p className="absolute text-2xxs z-40 left-[8%] top-[30%] lg:left-[14%] lg:top-[37%] md:text-sm ">Impact Protection</p>
                    <p className="absolute text-2xxs z-40 left-[51%] bottom-[20%] md:text-sm ">{bottom}</p>
                    <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 904 568" className="z-40 absolute" >
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="250" cy="320" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={Controls}
                            stroke="black" strokeWidth={'2px'} d="M250 316 v-100" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="450" cy="340" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={Controls}
                            stroke="black" strokeWidth={'2px'} d="M450 344 v100" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="450" cy="160" />
                        <motion.path variants={Svgvariant} initial='hidden' animate={Controls}
                            stroke="black" strokeWidth={'2px'} d="M450 156 v-80" />
                    </svg>
                    
                    <Image src="/model3/32.jpg" width={'909px'} height={'568px'} />
                    
                
                </div>                        
            </div>
            <div className="text-base max-w-4xl pl-10 flex flex-col lg:pl-0 lg:pr-4 pt-5 pr-5">
                <div>
                    <motion.p variants={variant1} initial='hidden' animate={Controls}
                     className="font-light text-xl">Safety</motion.p>
                    <motion.p  variants={variant2} initial='hidden' animate={Controls}
                     className="text-2xl md:text-3xl font-bold">Built for Safety</motion.p>
                    
                </div>
                <motion.div  variants={variant3} initial='hidden' animate={Controls}>
                    <p ref={ref}>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.</p>
                    <p className="font-bold mt-5">5-Star Rating</p>
                    <p>Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                    <p className="font-bold mt-5">Top Safety Pick+</p>
                    <p>Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                    <motion.button variants={variant4} initial='hidden' animate={Controls}
                     className=" w-[250px] border-[3px] border-black rounded-full  mt-6 py-1 lg:mt-[150px]"
                    >ORDER NOW</motion.button>
                </motion.div>                
            </div>
        </div>
        
    );
}
 
export default Safety;