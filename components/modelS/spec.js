import Image from 'next/image'
import { useState } from 'react';

const Specs = () => {

    const [model , setModel ] = useState('S')

    return (
        <>
        <div className='bg-black lg:flex'>
            <div className='flex m-auto h-[450px] lg:w-2/5 '>
                <Image src='/modelS/spec.jpg' width='600px' height={'450px'}/>
            </div>
            <div className='text-white ml-10 mt-6 lg:w-1/2 xl:w-2/5'>
                <span className='text-3xl font-bold '>Model S </span>
                <span className='text-3xl'>Specs</span>
                <div className='flex py-4 w-[450px] justify-between'>
                    <button className={model === 'S' ? 'border-[4px] border-white rounded-full cursor-pointer  font-bold text-lg w-[220px]'
                     : 'border-[4px] border-gray-700 rounded-full cursor-pointer  font-bold text-lg w-[220px]'} onClick={()=>setModel('S')}>Model S</button>
                    <button className={model === 'SP' ? 'border-[4px] border-white rounded-full cursor-pointer  font-bold text-lg w-[220px]'
                     : 'border-[4px] border-gray-700 rounded-full cursor-pointer  font-bold text-lg w-[220px]'} onClick={()=>setModel('SP')}>Model S Plaid</button>
                </div>
                <div className={model === 'S' ? 'flex flex-row text-white pb-8' : 'hidden'}>
                <div className='w-[240px]'>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Range (EPA est.)</p>
                    <p className='text-lg'>396 mi</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>1/4 mile</p>
                    <p className='text-lg'>9.23@155 mph trap speed</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Peak Power</p>
                    <p className='text-lg'>1,020 hp</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Wheels</p>
                    <p className='text-lg'>19&quot; or 21&quot;</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Cargo</p>
                    <p className='text-lg'>28 cu ft</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Weight</p>
                    <p className='text-lg'>4,766 lbs</p>
                </div>
                <div className='w-[270px] pl-10'>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>*Acceleration</p>
                    <p className='text-lg'>1.99 s 0-60 mph</p>
                    <p className='text-lg italic'>with rollout subtracted</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>†Top Speed</p>
                    <p className='text-lg'>200 mph</p>
                    <p className='text-lg italic'>when equipped with paid</p>
                    <p className='text-lg italic'>hardware upgrades</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Drag Coefficient</p>
                    <p className='text-lg'>0.208 </p><p className='text-lg italic'>Cd</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Powertrain</p>
                    <p className='text-lg'>Tri Motor</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Supercharging Max</p>
                    <p className='text-lg'>250 kW</p>                   
                </div>
            </div>
            <div className={model === 'SP' ? 'flex flex-row text-white pb-8' : 'hidden'}>
                <div className='w-[240px]'>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Range (EPA est.)</p>
                    <p className='text-lg'>405 mi</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Peak Power</p>
                    <p className='text-lg'>670 hp</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Wheels</p>
                    <p className='text-lg'>19&quot; or 21&quot;</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Cargo</p>
                    <p className='text-lg'>28 cu ft</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Acceleration</p>
                    <p className='text-lg'>3.1 s 0-60 mph</p>
                </div>
                <div className='w-[270px] pl-10'>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Top Speed</p>
                    <p className='text-lg'>155 mph</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Drag Coefficient</p>
                    <p className='text-lg'>0.208 </p><p className='text-lg italic'>Cd</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Weight</p>
                    <p className='text-lg'>4,561 lbs</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Powertrain</p>
                    <p className='text-lg'>Dual Mortor</p>
                    <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40'/></svg>
                    <p className='text-lg font-bold'>Supercharging Max</p>
                    <p className='text-lg'>250 kW</p>                   
                </div>
            </div>
            </div>    
        </div>
        </>
    );
}
 
export default Specs;