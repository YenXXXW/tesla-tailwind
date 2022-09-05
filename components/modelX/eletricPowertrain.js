import Image from "next/image";
import { useEffect, useState } from "react";
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

function ElectricPowerTrain() {

    const [image , setImage] = useState("/modelS/S14.jpg")

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

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (image === '/modelS/S14.jpg'){
                setImage('/modelS/S6.jpg')
            }else{
                setImage('/modelS/S14.jpg')
            }
        },2900)

        return () => clearInterval(interval);
    },[image])

    return (
        <>
        <motion.div className="mt-[100px] mx-10 lg:ml-[100px] xl:ml-[150px]"
         variants={variant} initial='hidden' animate={Controls}>
            <p className="font-bold text-3xl" ref={ref}>Electric Powertrain</p>
            <p className=" max-w-4xl my-3 md:text-base">
            Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.
            </p>
        </motion.div>
        <div className={image === '/modelS/S14.jpg' ? " relative h-[300px] lg:h-[400px] xl:h-[500px] mx-auto " : 'hidden'}>
            <Image src='/modelS/S14.jpg' layout="fill" objectFit="cover"/>
        </div>
        <div className={image === '/modelS/S6.jpg' ? " relative h-[300px] lg:h-[400px] xl:h-[500px] mx-auto " : 'hidden'}>
            <Image src='/modelS/S6.jpg' layout="fill" objectFit="cover"/>
        </div>
        <div className="pb-6">
            <div className="relative flex 2xs:hidden overflow-x-hidden overflow-y-auto">
                <div className={image === '/modelS/S14.jpg' ? "border-t-4 border-black pl-3 relative left-[0%] w-[250px] ease-in duration-500 cursor-pointer"
                : "border-t-2 border-black pl-3 absolute -left-[42%] w-[250px] ease-in duration-500 opacity-40 cursor-pointer"}  onClick={()=>setImage('/modelS/S14.jpg')}>
                    <h4 className='font-bold mt-3'>Model X</h4>
                    <p className="text-sm max-w-xl my-3">Dual Motor All-Wheel Drive platform has the longest range, and now delivers incredible power and acceleration.</p>
                    <div>
                        <div className="my-2">
                            <p className="text-xl font-bold tracking-wider">3.8s</p>
                            <p className="text-xs">0-60mph</p>
                        </div>
                        <div className="my-2">
                            <p className="text-xl font-bold tracking-wider">348 mi</p>
                            <p className="text-xs">Range (EPA est*)</p>
                        </div>
                        <div className="my-2">
                            <p className="text-xl font-bold tracking-wider">670hp</p>
                            <p className="text-xs">Peak Power</p>
                        </div>
                    </div>
                
                </div>
                <div className={image === '/modelS/S6.jpg' ? "border-t-4 border-black pl-3 relative left-[30%] w-[250px] ease-in duration-500 cursor-pointer" : 
                "border-t-2 border-black pl-3 absolute left-[73%] w-[250px] ease-in duration-500 opacity-40 cursor-pointer"} onClick={()=>setImage('/modelS/S6.jpg')}>
                    <h4 className='font-bold mt-3'>Model X Plaid</h4>
                    <p className="text-sm max-w-xl my-3">Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon fiber-sleeved rotor that maintains peak power output all the way to top speed.</p>
                    <div>
                        <div className="my-2">
                            <p className="text-xl font-bold tracking-wider">2.55 s*</p>
                            <p className="text-xs">0-60mph</p>
                        </div>
                        <div className="my-2">
                            <p className="text-xl font-bold tracking-wider">333 mi</p>
                            <p className="text-xs">Range (EPA est*)</p>
                        </div>
                        <div className="my-2">
                            <p className="text-xl font-bold tracking-wider">1,020hp</p>
                            <p className="text-xs">Peak Power</p>
                        </div>
                    </div> 
                </div>
                </div>
            <div className=" hidden 2xs:block mb-5 w-full text-center ">
                <div className="flex justify-center text-sm">
                    <div className={image === '/modelS/S14.jpg' ? " px-4 border-t-4 border-black  md:w-[450px] mr-[70px]  cursor-pointer" :
                    "px-4 border-t-2 border-red  md:w-[450px] mr-[70px] opacity-40 cursor-pointer"} onClick={()=>{setImage('/modelS/S14.jpg')}}>
                        <h3 className="mt-6 text-start text-xl font-bold my-4">Model X</h3>
                        <p className="max-w-xl  text-start ">Dual Motor All-Wheel Drive platform has the longest range, and now delivers incredible power and acceleration.</p>
                        <div className="my-6 flex justify-between md:w-3/4">
                            <div>
                                <p className="text-xl md:text-3xl font-bold tracking-wider">3.8s</p>
                                <p className="text-xs md:text-sm">0-60mph</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-3xl font-bold tracking-wider">348 mi</p>
                                <p className="text-xs md:text-sm">Range (EPA est*)</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-3xl font-bold tracking-wider">670hp</p>
                                <p className="text-xs md:text-sm">Peak Power</p>
                            </div>
                        </div>
                    </div>
                    <div className={image === '/modelS/S6.jpg' ? "px-4 border-t-4 border-black  md:w-[450px] cursor-pointer" :
                    "px-4 border-t-2 border-black  md:w-[450px] opacity-40 cursor-pointer"} onClick={()=>{setImage('/modelS/S6.jpg')}}>
                        <h3 className="text-start mt-6 text-xl font-bold my-4">Model X Plaid</h3>
                        <p className="max-w-xl text-start">Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon fiber-sleeved rotor that maintains peak power output all the way to top speed.</p>
                        <div className="my-6 flex justify-around">
                            <div>
                                <p className="text-xl md:text-3xl font-bold tracking-wider">2.5s*</p>
                                <p className="text-xs md:text-sm">0-60mph</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-3xl font-bold tracking-wider">333 mi</p>
                                <p className="text-xs md:text-sm">Range (EPA est*)</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-3xl font-bold tracking-wider">670hp</p>
                                <p className="text-xs md:text-sm">Peak Power</p>
                            </div>
                        </div>

                    </div>
                </div>
    
            </div>
        </div>
        
        </>
    );
}

export default ElectricPowerTrain;