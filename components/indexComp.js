import Image from "next/image";
import { useEffect , useRef } from 'react'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function IndexComp({photo , model , order }) {
    
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

    useEffect(()=>{
        if(inView1){
            controls.start('visible')
         }
         if(!inView1){
            controls.start('hidden')
         }
         
    },[ inView1])
    return (
        <>
        <div className='relative z-1 h-screen' ref={ref1}>
            <Image src={photo} layout='fill' objectFit='cover' />
            
        <motion.div variants={GeneralVariants} initial='hidden' animate={controls}
        className=' px-5 py-2  absolute top-[15%] w-full '>
            <h1 className="font-bold text-center  ">{model}</h1>
            <p className={order ? 'text-center  text-lg' : 'hidden'}>Order online for <a>Touchless Delivery</a></p>
            <p className={model === 'Solar Panels'? 'text-center text-lg' : 'hidden' }>Lowest cost Solar Panels in America</p>
            <p className={model === 'Solar Roof'?  'text-center  text-lg' : 'hidden' }>Produce Clean Energy From Your Roof</p>
        </motion.div>
        <div className="bottom-[20%] sm:bottom-[15%] absolute w-full  flex flex-col md:flex-row md:px-[200px] md:justify-between">
            <div className="py-2 text-center mx-auto w-5/6 px-5 rounded-full bg-gray-900 text-white md:w-[200px] lg:w-2/5">
                Custom Order
            </div>
            <div className="py-2 text-center mx-auto mt-3 w-5/6 px-5 rounded-full text-gray-900 bg-white md:mt-0 md:w-[200px] lg:w-2/5">
                Existing Inventory
            </div>
        </div>

        </div>
        
        </>
        
        
    );
}

export default IndexComp;