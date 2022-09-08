import Image from "next/image";
import { useEffect } from "react";
import { motion , useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { IoIosArrowDown } from 'react-icons/io'

function IndexComp({photo , model , order , arrow}) {
    
    const controls =useAnimation()
    const{ ref : ref1 , inView : inView1 } = useInView()

    const GeneralVariants={
        hidden:{
            opacity:0 , y :40
        },visible:{
            opacity : 1 , y:0,
            transition:{
                delay:0.7
            }
        }
      }

      const Variant1={
        hidden:{
            opacity:0 , y :40
        },visible:{
            opacity : 1 , y:0,
            transition:{
                delay:1
            }
        }
      }

      const Variant2={
        hidden:{
            opacity:0 , y :40
        },visible:{
            opacity : 1 , y:0,
            transition:{
                delay:1.5
            }
        }
      }

      const LeftVariants={
        hidden:{
            opacity:0 , x :-60
        },visible:{
            opacity : 1 , x:0,
            transition:{
                delay:0.7,
                
            }
        }
      }

      const RightVariants={
        hidden:{
            opacity:0 , x :60
        },visible:{
            opacity : 1 , x:0,
            transition:{
                delay:0.7,
                
            }
        }
      }

      const ArrowVariant = {
        hidden:{
            y :0 ,
        },visible:{
            y : [ 0 ,5 ,5 ,0 ],
            transition:{
                delay:0.7, repeat: Infinity ,
                
            }
        }
      }

    useEffect(()=>{
        if(inView1){
            controls.start('visible')
         }
         if(!inView1){
            controls.start('hidden')
         }
         
    },[ inView1])
    return (        
            <div className='relative z-1 h-screen' >
                <Image src={photo} layout='fill' objectFit='cover' />                
                <motion.div variants={GeneralVariants} initial='hidden' animate={controls}
                className=' px-5 py-2  absolute top-[16%] w-full '>
                    <p className="text-center text-4xl " ref={ref1}>{model}</p>
                    <p className={order ? 'text-center text-sm' : 'hidden'}>Order online for <a>Touchless Delivery</a></p>
                    <p className={model === 'Solar Panels'? 'text-center text-sm' : 'hidden' }>Lowest cost Solar Panels in America</p>
                    <p className={model === 'Solar Roof'?  'text-center text-sm' : 'hidden' }>Produce Clean Energy From Your Roof</p>
                </motion.div>
                <div className="hidden  bottom-[15%] absolute w-full  md:flex flex-row justify-center">
                    <div className="w-[55%] flex justify-around">
                        <motion.div variants={LeftVariants} initial='hidden' animate={controls}
                        className="bg-slate-800 w-[45%] py-1 rounded-sm text-center text-sm  text-white">
                            Custom Order
                        </motion.div>
                        <motion.div variants={RightVariants} initial='hidden' animate={controls}
                        className=" w-[45%] py-1 rounded-sm text-center text-slate-800 text-sm bg-white ">
                            Existing Inventory
                        </motion.div>
                    </div>
                </div>
                <div className="flex md:hidden  bottom-[20%] sm:bottom-[15%] absolute w-full  flex-col ">
                    <motion.div variants={Variant1} initial='hidden' animate={controls}
                    className="py-1 text-center mx-auto w-4/6 px-5 rounded-full bg-gray-600 text-white font-light">
                        Custom Order
                    </motion.div>
                    <motion.div  variants={Variant2} initial='hidden' animate={controls}
                    className="py-1 text-center mx-auto mt-3 w-4/6 px-5 rounded-full text-gray-600 bg-white">
                        Existing Inventory
                    </motion.div>
                </div>
                <motion.div variants={ArrowVariant} initial='hidden' animate={controls}
                 className={arrow ? "absolute bottom-[5%] w-full" : 'hidden'}>
                    <IoIosArrowDown size={25} className="mx-auto"/>
                </motion.div>
            </div>
        
        
        
        
    );
}

export default IndexComp;