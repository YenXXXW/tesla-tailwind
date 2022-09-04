import Image from "next/image";
import { useEffect, useState } from "react";
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Utility = () => {

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
                delay : 0.35
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
                delay : 0.50
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
                delay : 0.65
            }
        }
    }

    const Controls = useAnimation()        
    const { ref , inView  } = useInView()

    useEffect(()=>{
        if (inView){
            Controls.start("visible")
        }
        if(!inView){
            Controls.start('hidden')
        }
       
    },[inView])

    const a = '/modelY/Y2.jpg'
    const b = '/modelY/Y3.jpg'
    const [ image , setImage ] = useState(a)

    useEffect(()=>{        
        const handleChange=setInterval(()=>{
            if (image === a){
                setImage(b)
            }else{
                setImage(a)
            }
        },2000)
        return()=>clearInterval(handleChange)
    },[image])
        
    return (
        <div className="w-full pb-10">
            <div className="w-full flex flex-col  pb-6">  
                <div className="mx-auto flex flex-col sm:flex-row pt-3 h-[25vh] justify-center my-10 pl-8 pr-5" ref={ref}>
                    <div className="min-w-[250px]  mr-10">
                        <motion.p  variants={variant1} initial='hidden' animate={Controls} className='text-xl font-light'>Utility</motion.p>
                        <motion.p  variants={variant2} initial='hidden' animate={Controls}
                        className="text-2xl md:text-3xl mb-3">A Place for Everything</motion.p>
                        <motion.button  variants={variant4} initial='hidden' animate={Controls}
                        className="hidden sm:block border-[4px]  mt-5 border-gray-700 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-700">
                            ORDER NOW
                        </motion.button>
                    </div>
                    <div className=" max-w-[700px]">
                        <motion.p  variants={variant3} initial='hidden' animate={Controls}
                        className="sm:text-sm ">Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.</motion.p>
                        <motion.button variants={variant4} initial='hidden' animate={Controls}
                        className="sm:hidden  border-[4px]  mt-3 border-gray-700 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-700">
                            ORDER NOW
                        </motion.button>
                    </div>                
                </div>
                <div className="w-full  relative" ref={ref}>
                    <div className=" relative w-[90vw] h-[30vh] sm:w-[90vw] sm:h-[80vh] mx-auto mt-3 ">
                        <Image src={image} layout='fill' objectFit="cover" className="rounded-2xl"/>
                    </div>
                </div>
            </div>
            <div className="text-sm max-w-lg pl-8 mx-auto">  
                <div className="flex mt-10  w-[150px] h-[30px] ">
                    <svg className="w-[150px] h-[16px]">
                    <circle className="cursor-pointer " fill={image === a ? 'black' : 'gray'} stroke="none" r='6' cx='10' cy='8' 
                    onClick={()=>setImage(a)}/>
                    <circle className="cursor-pointer " fill={image === b ? 'black' : 'gray'} stroke="none" r='6' cx='30' cy='8' 
                    onClick={()=>setImage(b)}/>
                    </svg>
                </div>
                <p className={image === a ? "block text-base" : "hidden"}>Versatile seating and storage for cargo and passengers</p>
                <p className={image === b ? "block text-base" : "hidden"}>Room for up to seven with optional third row</p>
            </div>
        </div>
    );
}
 
export default Utility;