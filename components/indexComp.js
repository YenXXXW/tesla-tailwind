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
        <div className='relative z-1 h-[720px] w-screen' ref={ref1}>
            <Image src={photo} layout='fill' objectFit='cover' />
            
        <motion.div variants={GeneralVariants} initial='hidden' animate={controls}
        className=' px-5 py-2  absolute top-[100px] w-full '>
            <h1 className="font-bold text-center  ">{model}</h1>
            <p className={order ? 'text-center  text-lg' : 'hidden'}>Order online for <a>Touchless Delivery</a></p>
            <p className={model === 'Solar Panels'? 'text-center text-lg' : 'hidden' }>Lowest cost Solar Panels in America</p>
            <p className={model === 'Solar Roof'?  'text-center  text-lg' : 'hidden' }>Produce Clean Energy From Your Roof</p>
        </motion.div>
        
        </div>
        
        </>
        
        
    );
}

export default IndexComp;