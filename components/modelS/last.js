import Image from "next/image"
import Link from "next/link"
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Last =() =>{

    
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

    const TopicControls = useAnimation()        
    const { ref : TopicRef , inView : TopicInView  } = useInView()

    const Controls = useAnimation()
    const { ref , inView   } = useInView()

    useEffect(()=>{
        if (TopicInView){
            TopicControls.start("visible")
        }
        if(!TopicInView){
            TopicControls.start('hidden')
        }
        if (inView){
            Controls.start("visible")
        }
        if(!inView){
            Controls.start('hidden')
        }
       
    },[TopicInView , inView])

    return(
        <div className="pt-10">
        <div className="pt-10 ml-9 text-center md:flex lg:text-start bg-white">
            <div className="mx-auto lg:w-2/5" ref={TopicRef}>
                <motion.p className="text-start xs:text-center text-2xl font-bold mt-7 mb-4 "
                 variants={variant1} initial='hidden' animate={TopicControls}>
                    Model S
                </motion.p>
                <div className="flex flex-col lg:flex-row ">
                    <motion.button  variants={variant2} initial='hidden' animate={TopicControls}
                     className=" w-5/6 rounded-full text-lg font-bold border-[4px] border-gray-800 hover:bg-gray-800 hover:text-white hover:font-normal md:w-[250px] lg:w-[250px] lg:mr-20"
                    >
                        ORDER NOW
                    </motion.button>
                    <motion.button  variants={variant3} initial='hidden' animate={TopicControls}
                     className=" w-5/6 rounded-full text-lg font-bold border-[4px] mt-4 border-gray-800 hover:bg-gray-800 hover:text-white hover:font-normal md:w-[250px] lg:mt-0 lg:w-[250px]"
                    >
                        Compare
                    </motion.button>
                </div>
                
            </div>
            <div className="lg:w-2/5" ref={ref}>
                <motion.div className="relative mt-[100px] md:mt-0 xl:hidden"
                 variants={variant4} initial='hidden' animate={Controls}>
                    <Image src='/modelS/S12.jpg' width='400px' height={'200px'}/>
                </motion.div>
                <motion.div className="hidden relative mt-[100px] md:mt-0 xl:block"
                 variants={variant4} initial='hidden' animate={Controls}>
                    <Image src='/modelS/S12.jpg' width='500px' height={'200px'}/>
                </motion.div>
            </div>            
        </div>
        <div className="mt-10 max-w-3xl text-gray-600 text-sm text-center mx-auto">
            Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change.<Link href="/"><a> Learn more about Standard Connectivity and any limitations.</a></Link>
            <div className="my-20 flex flex-col md:flex-row justify-between">
            <Link href={'/'}><a className="no-underline">Tesla © 2022</a></Link>
            <Link href={'/'}><a className="no-underline">Privacy & Legal</a></Link>
            <Link href={'/'}><a className="no-underline">Vehicle Recalls</a></Link>
            <Link href={'/'}><a className="no-underline">Contact</a></Link>
            <Link href={'/'}><a className="no-underline">Carrers</a></Link>
            <Link href={'/'}><a className="no-underline">News</a></Link>
            <Link href={'/'}><a className="no-underline">Engage</a></Link>
            <Link href={'/'}><a className="no-underline">Locations</a></Link>
            </div>
        </div>
        </div>
    )
}

export default  Last