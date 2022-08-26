import Image from "next/image";
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InteriorTheFuture = () => {
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

   const { ref , inView} = useInView()
   const Controls = useAnimation()

   useEffect(()=>{
        if(inView){
            Controls.start('visible')
        }else{
            Controls.start("hidden")
        }
   },[inView])

    return (
        <>
        <div className="w-full h-[200px] relative bg-black">
            <div className="top-[100px] absolute w-full font-bold text-white " ref={ref}>
                <motion.p className="text-center text-3xl" variants={variant} initial='hidden' animate={Controls}>
                    Interior of the Future
                </motion.p>
            </div>
        </div>
        <div className="w-full h-screen relative">
            <Image src='/modelS/S2.jpg' layout="fill" objectFit="cover" />
        </div>
        </>
        
    );
}
 
export default InteriorTheFuture;