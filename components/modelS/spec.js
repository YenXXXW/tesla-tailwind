import Image from 'next/image'
import { useState , useEffect} from 'react';
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Specs = () => {

    const [model , setModel ] = useState('S')

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

    const specControls1 = useAnimation()
    const { ref : specRef1 , inView : specInView1  } = useInView()
    const specControls2 = useAnimation()
    const { ref : specRef2 , inView : specInView2  } = useInView()

    useEffect(()=>{
        if (specInView1){
            specControls1.start("visible")
        }
        if(!specInView1){
            specControls1.start('hidden')
        }
        if (specInView2){
            specControls2.start("visible")
        }
        if(!specInView2){
            specControls2.start('hidden')
        }
       
    },[ specInView1 , specInView2])

    return (
        <>
        <div className='bg-black lg:flex sm:h-screen'>
            <div className='flex m-auto h-[450px] lg:w-2/5 '>
                <Image src='/modelS/spec.jpg' width='600px' height={'450px'}/>
            </div>
            <div className='text-white ml-10 mt-6 lg:w-1/2 xl:w-2/5' ref={specRef1}>
                <motion.div variants={variant1} initial='hidden' animate={specControls1}>
                    <span className='text-3xl font-bold '>Model S </span>
                    <span className='text-3xl'>Specs</span>
                </motion.div>
                
                <motion.button className={model === 'S' ? 'text-sm sm:text-lg w-[150px] py-1 border-[3px] border-white mt-2 rounded-full xs:w-[200px]'
                :'text-sm sm:text-lg w-[150px] py-1 border-[3px] border-gray-700 mt-2 rounded-full xs:w-[200px]'}onClick={()=>setModel('S')}
                 variants={variant2} initial='hidden' animate={specControls1}>
                    Model S Plaid
                </motion.button>
                <motion.button className={model === 'SP' ? 'text-sm sm:text-lg ml-4 w-[150px] py-1 border-[3px] border-white rounded-full xs:w-[200px] xs:ml-20'
                :'text-sm sm:text-lg ml-4 w-[150px] py-1 border-[3px] border-gray-700 rounded-full xs:w-[200px] xs:ml-20'}onClick={()=>setModel('SP')}
                variants={variant2} initial='hidden' animate={specControls1}>
                    Model S
                </motion.button>
                <motion.div className={model === 'S' ? 'flex flex-row text-white pb-8' : 'hidden'}  variants={variant3} initial='hidden' animate={specControls1}>
                    <div className='w-[240px]'>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Range (EPA est.)</p>
                        <p className='text-sm sm:text-lg'>396 mi</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>1/4 mile</p>
                        <p className='text-sm sm:text-lg'>9.23@155 mph trap speed</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Peak Power</p>
                        <p className='text-sm sm:text-lg'>1,020 hp</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Wheels</p>
                        <p className='text-sm sm:text-lg'>19&quot; or 21&quot;</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Cargo</p>
                        <p className='text-sm sm:text-lg'>28 cu ft</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Weight</p>
                        <p className='text-sm sm:text-lg'>4,766 lbs</p>
                    </div>
                    <div className='w-[270px] pl-10'>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>*Acceleration</p>
                        <p className='text-sm sm:text-lg'>1.99 s 0-60 mph</p>
                        <p className='text-sm sm:text-lg italic'>with rollout subtracted</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>†Top Speed</p>
                        <p className='text-sm sm:text-lg'>200 mph</p>
                        <p className='text-sm sm:text-lg italic'>when equipped with paid</p>
                        <p className='text-sm sm:text-lg italic'>hardware upgrades</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Drag Coefficient</p>
                        <p className='text-sm sm:text-lg'>0.208 </p><p className='text-sm sm:text-lg italic'>Cd</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Powertrain</p>
                        <p className='text-sm sm:text-lg'>Tri Motor</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Supercharging Max</p>
                        <p className='text-sm sm:text-lg'>250 kW</p>                   
                    </div>
                </motion.div>
                <motion.div className={model === 'SP' ? 'flex flex-row text-white pb-8' : 'hidden'}  variants={variant3} initial='hidden' animate={specControls2}>
                    <div className='w-[240px]' ref={specRef2}>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Range (EPA est.)</p>
                        <p className='text-sm sm:text-lg'>405 mi</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Peak Power</p>
                        <p className='text-sm sm:text-lg'>670 hp</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Wheels</p>
                        <p className='text-sm sm:text-lg'>19&quot; or 21&quot;</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Cargo</p>
                        <p className='text-sm sm:text-lg'>28 cu ft</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Acceleration</p>
                        <p className='text-sm sm:text-lg'>3.1 s 0-60 mph</p>
                    </div>
                    <div className='w-[270px] pl-10'>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Top Speed</p>
                        <p className='text-sm sm:text-lg'>155 mph</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Drag Coefficient</p>
                        <p className='text-sm sm:text-lg'>0.208 </p><p className='text-sm sm:text-lg italic'>Cd</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Weight</p>
                        <p className='text-sm sm:text-lg'>4,561 lbs</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Powertrain</p>
                        <p className='text-sm sm:text-lg'>Dual Mortor</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-lg font-bold'>Supercharging Max</p>
                        <p className='text-sm sm:text-lg'>250 kW</p>                   
                    </div>
                </motion.div>
            </div>    
        </div>
        </>
    );
}
 
export default Specs;