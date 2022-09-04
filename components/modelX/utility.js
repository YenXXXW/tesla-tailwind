import Image from "next/image";
import { useEffect } from "react";
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
    

    
    return (
        <div className="w-full flex flex-col lg:flex-row-reverse pb-10">
            <div className="w-full lg:w-[70%] relative" ref={ref}>
                <div className="absolute bottom-5  z-40 w-full flex justify-around text-white text-center lg:bottom-10">
                    <motion.div variants={variant1} initial='hidden' animate={Controls}>
                        <p className="text-lg md:text-2xl font-bold ">92ft³</p>
                        <p className="hidden text-xs md:block">Up to 92 ft³ of storage</p>
                        <p className="text-xs md:hidden">Up to 92 ft³ </p>
                        <p className="text-xs md:hidden">of storage</p>
                    </motion.div>
                    <motion.div variants={variant2} initial='hidden' animate={Controls}>
                        <p className="text-lg md:text-2xl font-bold ">5,000 lbs</p>
                        <p className="hidden text-xs md:block">Tow up to 5,000 lbs</p>
                        <p className="text-xs md:hidden">Tow up to</p>
                        <p className="text-xs md:hidden">5,000 lbs</p>
                    </motion.div>
                    <motion.div variants={variant3} initial='hidden' animate={Controls}>
                        <svg xmlns= 'http://www.w3.org/2000/svg' className=' w-[80px] h-[50px] mx-auto' >
                            <path 
                            d="M48.44 20.56c.17.31.36.56.65.73.1.06.2.12.28.2.36.32.73.64 1.07.98.89.9 1.44 1.99 1.76 3.21.03.14.09.27.14.4.25.58.41 1.19.53 1.81.11.58.19 1.16.24 1.75.01.08.01.17.01.25v10.87c.05.05.15.06.13.17H4.85c0-.05-.01-.1-.01-.15V30.02c0-.16.02-.31.12-.44.04-.04.03-.12.04-.18.07-.49.13-.99.21-1.48.11-.6.27-1.18.55-1.72.07-.14.12-.27.16-.42.2-.83.51-1.62 1-2.33.36-.52.77-1.01 1.29-1.38.2-.15.39-.33.58-.49.06-.05.12-.1.19-.13.33-.17.59-.41.8-.74-.05 0-.09-.01-.13-.01-.5-.01-1-.01-1.49-.02-.58-.02-1.16-.06-1.73-.17-.34-.07-.66-.2-.96-.38-.25-.15-.35-.35-.27-.63.1-.36.18-.72.33-1.06.19-.42.48-.69.9-.84.28-.1.56-.15.85-.21.54-.1 1.08-.22 1.62-.32.27-.05.54-.12.83-.11.08 0 .17.01.25.03.35.08.55.3.56.67.01.15 0 .3 0 .45 0 .45.01.91 0 1.36-.01.31.28.65.65.64 1.51-.05 3.03-.08 4.54-.11 1.7-.04 3.4-.08 5.09-.1 2.55-.03 5.11-.07 7.66-.08 2.02-.01 4.03.02 6.05.04 2.02.02 4.03.06 6.05.1 1.9.04 3.8.09 5.69.13.31.01.63 0 .94.02.35.02.64-.31.64-.62-.01-.56 0-1.11 0-1.67 0-.04-.01-.09-.01-.13-.04-.28.07-.49.33-.61.24-.11.49-.13.74-.1.27.03.53.08.79.13.67.12 1.34.25 2.01.38.18.04.37.1.54.18.11.05.2.14.29.22.08.07.13.17.13.29 0 .14.05.27.1.4.07.17.14.34.2.52.03.09.06.19.08.28.05.27-.03.46-.27.61-.3.18-.62.31-.96.38-.6.12-1.2.16-1.8.17-.48.01-.96.01-1.43.02a.378.378 0 0 0-.15 0zM9.11 36.8c.07 0 .12.01.17.01l9.91.06c2.11.01 4.22.03 6.33.05 1.22.01 2.44.03 3.66.03 2-.01 3.99-.03 5.99-.05 3.01-.03 6.01-.05 9.02-.07 1.5-.01 3-.01 4.5-.02h.18c-.04-.04-.06-.05-.07-.06-.61-.42-1.22-.85-1.83-1.27-.19-.13-.41-.23-.64-.29-.39-.11-.78-.15-1.19-.15H12.85c-.26 0-.52.02-.77.06-.42.06-.82.19-1.18.44-.55.39-1.11.78-1.67 1.17-.03.01-.07.04-.12.09zm32.02-8.86c-.05-.07-.08-.13-.13-.17-.12-.1-.24-.2-.38-.27-.2-.1-.42-.19-.63-.26-.81-.26-1.64-.38-2.48-.47-.77-.08-1.54-.14-2.3-.18-1-.05-2-.09-3-.11-2.44-.04-4.88-.04-7.32.03-.72.02-1.44.05-2.16.1-.88.05-1.75.13-2.62.25-.62.09-1.23.2-1.83.38-.29.09-.57.2-.82.37-.12.08-.23.18-.31.32.06.01.1.03.15.04.49.05.99.11 1.49.14.76.05 1.52.07 2.28.1 1.12.05 2.23.09 3.35.14.57.03 1.14.07 1.71.11.22.02.44.06.66.06.2 0 .38.05.53.17.19.14.37.29.53.46.41.43.8.88 1.2 1.33.03.04.07.08.1.12.05-.06.09-.1.13-.15.4-.48.81-.95 1.26-1.39.16-.16.35-.29.54-.42.08-.06.19-.09.28-.11.22-.03.44-.04.65-.06.78-.05 1.56-.11 2.34-.14 1.26-.06 2.53-.09 3.79-.15.82-.04 1.65-.1 2.47-.15.15-.02.32-.06.52-.09zm.57-1.48c.13.1.24.2.37.28.49.31.99.63 1.49.93.49.29 1.03.44 1.61.41.57-.03 1.14-.08 1.71-.12.61-.05 1.22-.1 1.82-.17.52-.06 1.05-.13 1.57-.21.31-.05.6-.16.86-.36a1 1 0 0 0 .36-.54.56.56 0 0 0-.02-.36c-.31-.74-.61-1.48-.91-2.22-.02-.05-.05-.1-.07-.17-.13.02-.25.03-.37.05-.82.17-1.64.33-2.47.5-.85.17-1.7.35-2.55.52-.22.05-.45.08-.68.12-.38.06-.74.18-1.08.35-.58.28-1.1.63-1.64.99zm-25.17.01c-.02-.02-.03-.04-.04-.04-.46-.31-.93-.63-1.44-.87-.37-.18-.76-.32-1.17-.4-.58-.11-1.16-.21-1.74-.33-1.27-.26-2.55-.53-3.82-.79-.18-.04-.36-.06-.54-.09-.02.03-.04.05-.04.07-.32.79-.65 1.58-.96 2.37-.02.05-.03.11-.02.17.02.22.12.41.28.57.12.12.26.21.41.28.24.11.49.18.74.2.33.03.67.04 1.01.06.68.04 1.35.08 2.03.1.61.02 1.22.03 1.83.04.06 0 .13-.01.19-.01.09 0 .19-.02.28-.01.31.04.6-.03.88-.17.13-.06.25-.13.37-.2.57-.31 1.15-.63 1.75-.95z"
                            fill="white" />
                            <path
                            d="m47.48 19.08-1.19-.03-4-.09c-1.28-.03-2.56-.05-3.84-.08-4.13-.08-8.26-.13-12.39-.09-2.11.02-4.23.05-6.34.08-1.79.03-3.57.08-5.36.12-1.13.03-2.26.06-3.4.08-.11 0-.19.06-.29.14 0-.21-.02-.4.05-.58.6-1.52 1.29-2.99 2.14-4.38.54-.88 1.15-1.72 1.87-2.47.33-.34.67-.65 1.06-.92.12-.08.24-.15.36-.23.13-.09.27-.11.43-.12.29-.01.57-.05.86-.08.44-.04.87-.09 1.31-.13.53-.05 1.07-.1 1.6-.14.46-.04.92-.07 1.39-.1.67-.04 1.33-.07 2-.11.32-.02.63-.03.95-.03 1.77 0 3.54-.01 5.32 0 .58 0 1.15.04 1.73.07.55.02 1.09.05 1.64.08.73.03 1.45.06 2.18.1.55.03 1.09.06 1.64.1.54.04 1.09.09 1.63.13l1.31.12c.4.04.81.09 1.21.13.04 0 .09.01.13.01.16-.02.3.04.44.12.52.32.98.71 1.4 1.15.78.81 1.43 1.72 2 2.68.8 1.34 1.45 2.75 2.02 4.2.06.08.1.17.14.27zM27.8 8.72c-1.08.01-2.14.15-3.21.15-.01-.06-.01-.1-.02-.14-.05-.78-.08-1.56-.14-2.34-.03-.35-.1-.7-.16-1.06-.07-.39-.16-.77-.29-1.15-.24-.69-.67-1.18-1.38-1.41-.15-.05-.3-.09-.45-.12-.51-.11-1.02-.14-1.54-.14-.4 0-.81.01-1.21.02-.79.03-1.58.07-2.37.12l-2.2.15c-.55.03-1.09.07-1.64.1-.66.04-1.32.09-1.99.13-.38.02-.76.05-1.14.07-.52.04-1.06.07-1.59.11-.4.03-.81.05-1.21.07l-2.21.12c-.03 0-.07.01-.1.02-.15.02-.27-.03-.34-.17a.606.606 0 0 1-.06-.24c-.02-.17.05-.3.21-.38 1.08-.57 2.18-1.11 3.3-1.61.78-.35 1.57-.69 2.38-.98.08-.03.17-.04.26-.04.65 0 1.3-.01 1.95 0 .89.01 1.78.05 2.66.07.62.02 1.25.03 1.87.05.23.01.46.01.69.02.43.02.87 0 1.3-.03.31-.02.62-.02.94-.02.81.02 1.63.05 2.44.08.69.03 1.37.12 2.05.25.06.01.12.03.17.03.24 0 .46.08.68.15.06.02.12.07.17.11.19.16.34.35.48.55.4.6.7 1.25.96 1.92.02.05.02.09.03.14.1.7.19 1.4.29 2.1.09.67.19 1.34.28 2.01.05.36.09.72.13 1.07 0 .08.01.14.01.22zM33.8 9.02c-1.07-.15-2.13-.15-3.21-.15.01-.09.01-.18.02-.26.1-.83.18-1.66.29-2.49.1-.8.22-1.6.34-2.4.09-.56.32-1.09.57-1.59.14-.28.31-.54.48-.8.08-.13.19-.24.3-.36.12-.13.27-.2.45-.25.55-.14 1.11-.23 1.67-.3.64-.08 1.29-.11 1.94-.11.79 0 1.57.01 2.36 0C40.03.3 41.06.27 42.08.25c.57-.01 1.13-.02 1.7-.04 1.23-.04 2.46-.05 3.69-.05.14 0 .28.02.41.07.91.34 1.79.72 2.67 1.12.99.45 1.96.93 2.91 1.43.19.1.25.21.21.4-.04.2-.18.35-.37.37-.05.01-.1 0-.15 0-.49-.04-.98-.07-1.47-.11l-1.31-.09c-.68-.05-1.35-.1-2.03-.14l-1.48-.09c-.75-.05-1.49-.09-2.24-.14l-1.13-.06c-.7-.04-1.39-.08-2.09-.11-.51-.03-1.01-.05-1.52-.07l-1.74-.06c-.54-.01-1.07 0-1.61.06-.39.04-.77.11-1.14.25-.46.18-.79.49-1.01.93-.19.38-.3.79-.38 1.21-.08.45-.15.9-.23 1.36.03.03.03.09.03.14v2.39z"
                            fill="white" />
                            <path 
                            d="M19 3.88c.69-.03 1.44-.05 2.2-.02.27.01.53.04.79.11.37.1.64.32.78.67.08.2.15.41.19.63.05.25-.04.47-.22.65-.07.07-.17.12-.27.13l-1.43.12c-.53.04-1.06.09-1.59.13-.52.04-1.04.09-1.56.13-.53.04-1.06.09-1.59.13-.42.03-.84.07-1.25.1-.52.04-1.04.09-1.56.13-.4.03-.8.07-1.2.1-.54.06-1.08.11-1.62.16-.41.03-.82.07-1.23.1-.52.04-1.04.09-1.57.13-.78.06-1.55.15-2.33.12-.16-.01-.32-.05-.48-.09l-2.73-.63a.693.693 0 0 0-.2-.03c-.25.01-.47-.05-.68-.16-.22-.12-.43-.25-.64-.39-.23-.15-.46-.33-.68-.5a.29.29 0 0 1-.12-.32.33.33 0 0 1 .28-.25c.21-.02.43-.03.64-.05.79-.06 1.59-.12 2.38-.17.48-.03.96-.06 1.45-.1.68-.04 1.36-.09 2.04-.13l1.48-.09c.74-.05 1.47-.09 2.21-.14.36-.02.71-.04 1.07-.07.63-.04 1.26-.08 1.88-.11l1.17-.06c.67-.04 1.34-.07 2.02-.11l1.33-.06c.32-.03.65-.04 1.04-.06zM39.49 4.04c.51.02 1.31.05 2.12.09l2.82.15 2.62.15 3.11.18 2.03.12c.93.05 1.86.11 2.79.16.65.04 1.31.07 1.96.1.31.02.61.03.92.05.3.02.54.44.39.71-.01.02-.04.05-.06.06-.48.36-.99.68-1.55.9-.15.06-.31.09-.47.11-.27.03-.53.09-.79.14l-2.3.42c-.09.01-.19.02-.28.02-.22 0-.45.01-.67 0L51 7.34c-.45-.03-.9-.07-1.36-.1-.62-.05-1.25-.09-1.87-.14-.42-.04-.85-.07-1.28-.1-.63-.05-1.26-.09-1.88-.14l-1.28-.09c-.63-.05-1.26-.09-1.88-.14-.44-.03-.89-.06-1.33-.1-.61-.05-1.22-.09-1.82-.14l-1.27-.09-1.26-.09c-.21-.02-.36-.12-.43-.32a.78.78 0 0 1-.04-.5c.06-.22.11-.44.18-.65.13-.38.41-.6.8-.66.18-.03.36-.05.54-.06.78-.03 1.58-.02 2.67.02zM4.99 41.98h8.17c0 .04.01.08.01.11v1.08c-.01.58-.44 1.01-1.03 1.02H6.07c-.12 0-.25-.01-.36-.04-.42-.13-.68-.43-.71-.87-.03-.42-.01-.85-.01-1.3zM53.11 42.13c0 .05.01.09.01.14 0 .33.01.65 0 .98 0 .13-.02.26-.05.39-.12.41-.49.68-.92.7h-6.13c-.12 0-.24-.01-.35-.04-.4-.1-.7-.43-.73-.84-.03-.44-.01-.88-.01-1.33h8.18z"
                            fill="white" />
                        </svg>
                        <p className="text-xs">Falcon wing doors</p>
                    </motion.div>
                </div>
                <div className="w-full h-[60vh] relative lg:hidden">
                    <Image src='/modelX/X11.jpg' layout="fill" objectFit="cover"/>
                </div>
                <div className="hidden w-full h-screen relative lg:block">
                    <Image src='/modelX/X11.jpg' layout="fill" objectFit="cover"/>
                </div>
            </div>
            <div className="ml-8 flex flex-col sm:flex-row lg:flex-col lg:w-[29%] pt-3 h-[40vh] lg:h-screen">
                <div className="min-w-[250px] sm:my-auto lg:my-0">
                    <motion.p  variants={variant1} initial='hidden' animate={Controls}>Utility</motion.p>
                    <motion.p  variants={variant2} initial='hidden' animate={Controls}
                    className="text-xl md:text-3xl font-bold lg:mb-3">Even More Capable</motion.p>
                    <motion.button  variants={variant4} initial='hidden' animate={Controls}
                     className="hidden sm:block lg:hidden border-[3px]  mt-5 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                        ORDER NOW
                    </motion.button>
                </div>
                <div className="sm:my-auto lg:my-0 pr-6">
                    <motion.p  variants={variant3} initial='hidden' animate={Controls}
                    className="text-sm ">With up to 348 miles of estimated range and access to the world&apos;s largest and most powerful fast charging network, you&apos;ll spend less time plugged in and more time on the road.</motion.p>
                    <motion.button variants={variant4} initial='hidden' animate={Controls}
                     className="sm:hidden lg:block lg:mt-[340px] border-[3px]  mt-3 border-gray-800 h-8 rounded-full w-[200px] hover:text-white hover:bg-gray-800">
                        ORDER NOW
                    </motion.button>
                </div>
                
            </div>
        </div>

    );
}
 
export default Utility;