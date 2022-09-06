import { useState , useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

function ImageSelect() {
    const [image , setImage ] = useState('/modelX/X3.jpg')
   
    const { ref , inView  } = useInView()

    useEffect(()=>{

        const interval = setInterval(()=>{
            if (inView && image === '/modelX/X3.jpg'){
                setImage('/modelX/X4.jpg')
            }
            if (inView && image === '/modelX/X4.jpg'){
                setImage('/modelX/X5.jpg')
            }
            if(inView && image === '/modelX/X5.jpg'){
                setImage('/modelX/X6.jpg')
            }
            if (inView && image === '/modelX/X6.jpg'){
                setImage('/modelX/X3.jpg')
            }
        },2000)

        return () =>{
            clearInterval(interval);   
        } 
    },[inView , image])
    return (
        <div className="relative bg-black w-full pt-[20%]" ref={ref}>
            <div className={image === '/modelX/X3.jpg' ? "w-full relative " : 'hidden'}>
                <div className='flex justify-center' ref={ref}>
                    <Image src={'/modelX/X3.jpg'} width='1000px' height={'500px'}
                    className=" rounded-3xl "/>
                </div>
                             
            </div>
            <div className={image === '/modelX/X4.jpg' ? "w-full  relative " : 'hidden'}>
                <div className='flex justify-center'>
                    <Image src={'/modelX/X4.jpg'} width='1000px' height={'500px'}
                    className=" rounded-3xl" />  
                </div>
                              
            </div>
            <div className={image === '/modelX/X5.jpg' ? "w-full  relative " : 'hidden'}>
                <div className='flex justify-center'>
                    <Image src={'/modelX/X5.jpg'} width='1000px' height={'500px'}
                    className=" rounded-3xl" />
                </div>
                
            </div>
            <div className={image === '/modelX/X6.jpg' ? "w-full  relative" : 'hidden'}>
                <div className='flex justify-center'>
                    <Image src={'/modelX/X6.jpg'} width='1000px' height={'500px'}
                    className=" rounded-3xl" />  
                </div>
              
            </div>
            <div className='mx-10 md:ml-[400px] pb-[100px] '>
            <div className="flex mt-10  w-[150px] h-[30px] ">
                <svg className="w-[150px] h-[16px]">
                <circle className="cursor-pointer " fill={image === '/modelX/X3.jpg' ? 'white' : 'gray'} stroke="gray" r='6' cx='10' cy='8' 
                onClick={()=>setImage('/modelX/X3.jpg')}/>
                <circle className="cursor-pointer " fill={image === '/modelX/X4.jpg' ? 'white' : 'gray'} stroke="gray" r='6' cx='30' cy='8' 
                onClick={()=>setImage('/modelX/X4.jpg')}/>
                <circle className="cursor-pointer" fill={image === '/modelX/X5.jpg' ? 'white' : 'gray'} stroke="gray" r='6' cx='50' cy='8'
                onClick={()=>setImage('/modelX/X5.jpg')} />
                <circle className="cursor-pointer" fill={image === '/modelX/X6.jpg' ? 'white' : 'gray'} stroke="gray" r='6' cx='70' cy='8' 
                onClick={()=>setImage('/modelX/X6.jpg')}/>
                </svg>
            </div>
        
            <div className={image === '/modelX/X3.jpg' ? 'mt-5 ' : 'hidden'}>
                <p className='my-3 text-white  font-bold tracking-widest '>Cinematic Experience</p>
                <p className='text-white text-sm'>A 17&quot; touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
            </div>
            <div className={image === '/modelX/X4.jpg' ? 'mt-5  max-w-[1000px]' : 'hidden'}>
                <p className='my-3 text-white font-bold tracking-widest '>Yoke Steering</p>
                <p className='text-white text-sm'>A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.</p>
            </div>
            <div className={image === '/modelX/X5.jpg' ? 'mt-5  max-w-[1000px]' : 'hidden'}>
                <p className='my-3 text-white font-bold tracking-widest '>Perfect Environment</p>
                <p className='text-white text-sm'>Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.</p>
            </div>
            <div className={image === '/modelX/X6.jpg' ? 'mt-5   max-w-[1000px]' : 'hidden'}>
                <p className='my-3 text-white font-bold tracking-widest'>Redesigned Second Row</p>
                <p className='text-white text-sm'>Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.</p>
            </div>
            </div>                      
        </div>
    );
}

export default ImageSelect;