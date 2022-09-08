import Image from 'next/image';
import Link from "next/link";
import { IoIosArrowUp } from 'react-icons/io';
import { useState , useEffect} from 'react';
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Specs() {
    
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
                delay : 0.650
            }
        }
    }

    const Controls = useAnimation()
    const { ref , inView  } = useInView()
    const specControls1 = useAnimation()
    const { ref : specRef1 , inView : specInView1  } = useInView()
    const specControls2 = useAnimation()
    const { ref : specRef2 , inView : specInView2  } = useInView()
    const specControls3 = useAnimation()
    const { ref : specRef3 , inView : specInView3  } = useInView()

    useEffect(()=>{
        if (inView){
            Controls.start("visible")
        }
        if(!inView){
            Controls.start('hidden')
        }
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
        if (specInView3){
            specControls3.start("visible")
        }
        if(!specInView3){
            specControls3.start('hidden')
        }
       
    },[inView , specInView1 , specInView2 , specInView3 ])
    return (
        <>
        <div className='bg-black md:flex mt-2 relative' ref={ref} id='specs'>
            <div className="absolute right-[2%] top-[2%] z-30">
                <Link href='/model3/#intro'>
                    <IoIosArrowUp size='25' className="text-white cursor-pointer"/>
                </Link>
            </div>
            <motion.div variants={variant1} initial='hidden' animate={Controls}
             className='flex m-auto h-[450px] lg:w-2/5 '>
                <Image src='/modelS/spec.jpg' width='600px' height={'450px'}/>
            </motion.div>
            <div className='text-white ml-10 pt-6 lg:w-1/2 xl:w-2/5'>
                <motion.div variants={variant1} initial='hidden' animate={Controls}>
                    <span className='text-2xl font-bold '>Model 3 </span>
                    <span className='text-2xl'>Specs</span>
                </motion.div>
                <div>
                    <motion.button className={model === 'S' ? ' text-sm w-[150px] h-7 border-[3px] border-white mt-2 rounded-full xs:w-[200px] cursor-pointer'
                    :'text-sm  w-[150px] h-7 border-[3px] border-gray-700 mt-2 rounded-full xs:w-[200px] cursor-pointer'}onClick={()=>setModel('S')}
                    variants={variant2} initial='hidden' animate={Controls}>
                        Performance
                    </motion.button>
                    <motion.button className={model === 'SP' ? 'text-sm  ml-4 w-[150px] h-7 border-[3px] border-white rounded-full xs:w-[200px] '
                    :'text-sm  ml-4 w-[150px] h-7 border-[3px] border-gray-700 rounded-full xs:w-[200px] '}onClick={()=>setModel('SP')}
                    variants={variant2} initial='hidden' animate={Controls}>
                        Long Range AWD
                    </motion.button>
                </div>
                
                
                <motion.button className={model === 'RW' ? 'text-sm  mt-1 w-[150px] h-7 border-[3px] border-white rounded-full xs:w-[200px]'
                :'text-sm  mt-1 w-[150px] h-7 border-[3px] border-gray-700 rounded-full xs:w-[200px] '}onClick={()=>setModel('RW')}
                variants={variant3} initial='hidden' animate={Controls}>
                    Rear-Wheel Drive
                </motion.button>
                <motion.button className={model === 'CP' ? 'text-sm  ml-4 w-[150px] h-7 border-[3px] border-white rounded-full xs:w-[200px] '
                :'text-sm  ml-4 w-[150px] h-7 border-[3px] border-gray-700 rounded-full xs:w-[200px] '}onClick={()=>setModel('CP')}
                variants={variant3} initial='hidden' animate={Controls}>
                    Comapre
                </motion.button>
                <motion.div variants={variant4} initial = 'hidden' animate={specControls1}
                 className={model === 'S' ? 'flex flex-row text-white pb-8 text-sm' : 'hidden'}>
                    <div className='w-[200px]' ref={specRef1}>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Range (EPA est.)</p>
                        <p className='text-xs sm:text-sm '>396 mi</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>1/4 mile</p>
                        <p className='text-sm '>9.23@155 mph trap speed</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Peak Power</p>
                        <p className='text-xs sm:text-sm '>1,020 hp</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Wheels</p>
                        <p className='text-xs sm:text-sm '>19&quot; or 21&quot;</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Cargo</p>
                        <p className='text-xs sm:text-sm '>28 cu ft</p>
                        
                    </div>
                    <div className='w-[200px] pl-10'>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>*Acceleration</p>
                        <p className='text-xs sm:text-sm '>1.99 s 0-60 mph</p>
                        <p className='text-sm italic'>with rollout subtracted</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>†Top Speed</p>
                        <p className='text-xs sm:text-sm '>200 mph</p>
                        <p className='text-sm  italic'>when equipped with paid</p>
                        <p className='text-sm italic'>hardware upgrades</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Drag Coefficient</p>
                        <p className='text-xs sm:text-sm '>0.208 </p><p className='text-sm sm:text-lg italic'>Cd</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Powertrain</p>
                        <p className='text-xs sm:text-sm '>Tri Motor</p>
                                         
                    </div>
                </motion.div>    
                <motion.div className={model === 'SP' ? 'flex flex-row text-white pb-8' : 'hidden'}
                  variants={variant1} initial='hidden' animate={specControls2}>
                    <div className='w-[200px]' ref={specRef2}>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Range (EPA est.)</p>
                        <p className='text-sm '>405 mi</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Peak Power</p>
                        <p className='text-sm '>670 hp</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Wheels</p>
                        <p className='text-sm '>19&quot; or 21&quot;</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Cargo</p>
                        <p className='text-sm '>28 cu ft</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Acceleration</p>
                        <p className='text-sm '>3.1 s 0-60 mph</p>
                    </div>
                    <div className='w-[270px] pl-10'>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Top Speed</p>
                        <p className='text-sm '>155 mph</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Drag Coefficient</p>
                        <p className='text-sm '>0.208 </p><p className='text-sm sm:text-lg italic'>Cd</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Weight</p>
                        <p className='text-sm '>4,561 lbs</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Powertrain</p>
                        <p className='text-sm '>Dual Mortor</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Supercharging Max</p>
                        <p className='text-sm '>250 kW</p>                   
                    </div>
                </motion.div>
                <motion.div className={model === 'RW' ? 'flex flex-row text-white pb-8' : 'hidden'}
                 variants={variant1} initial='hidden' animate={specControls3}>
                    <div className='w-[200px]' ref={specRef3}>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Battery</p>
                        <p className='text-sm '>Standard Range</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Acceleration</p>
                        <p className='text-sm '>5.8 s 0-60 mph</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Range</p>
                        <p className='text-sm '>272 miles (EPA est.)</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Drive</p>
                        <p className='text-sm '>Reae-Wheel Drive</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Seating</p>
                        <p className='text-sm '>5-Adults</p>
                    </div>
                    <div className='w-[270px] pl-10'>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Weight</p>
                        <p className='text-sm '>3,862 lbs</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Cargo</p>
                        <p className='text-sm '>0.23 cu ft </p><p className='text-sm sm:text-lg italic'>Cd</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Displays</p>
                        <p className='text-sm '>15&quot; Center Touchscreen</p>
                        <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                        <p className='text-sm sm:text-base font-bold'>Onboard Charger max</p>
                        <p className='text-sm '>7.6 kW max; Pay Per Use</p>                  
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    );
}

export default Specs;