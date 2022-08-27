import { useState , useEffect } from 'react'

function VideoSelect() {
    const [video , setVideo ] = useState('/modelS/Sv1.mp4')

    useEffect(()=>{
        const interval1 = setInterval(()=>{
            if (video === '/modelS/Sv1.mp4'){
                setVideo('/modelS/Sv2.mp4')
            }
        },16000)

        const interval2 = setInterval(()=>{
            if (video === '/modelS/Sv2.mp4'){
                setVideo('/modelS/Sv3.mp4')
            }
            if(video === '/modelS/Sv3.mp4'){
                setVideo('/modelS/Sv4.mp4')
            }
            
        },7000)
        
        const interval3 = setInterval(()=>{
            if (video === '/modelS/Sv3.mp4'){
                setVideo('/modelS/Sv4.mp4')
            }
            if(video === '/modelS/Sv4.mp4'){
                setVideo('/modelS/Sv5.mp4')
            }
        },6000)

        const interval4 = setInterval(()=>{
            if (video === '/modelS/Sv5.mp4'){
                setVideo('/modelS/Sv1.mp4')
            }
        },12000)

        return () =>{
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);      
            clearInterval(interval4);    
        } 
    },[video])
    return (
        <div className="relative bg-black">
            <div className={video === '/modelS/Sv1.mp4' ? "flex justify-center pt-[100px]" : 'hidden'}>
                <video src={'/modelS/Sv1.mp4'} layout='fill'  autoPlay loop defaultmuted='true'
                className=" rounded-3xl"></video>                
            </div>
            <div className={video === '/modelS/Sv2.mp4' ? "flex justify-center pt-[100px]" : 'hidden'}>
                <video src={'/modelS/Sv2.mp4'} layout='fill'  autoPlay loop defaultmuted='true'
                className=" rounded-3xl"></video>                
            </div>
            <div className={video === '/modelS/Sv3.mp4' ? "flex justify-center pt-[100px]" : 'hidden'}>
                <video src={'/modelS/Sv3.mp4'} layout='fill'  autoPlay loop defaultmuted='true'
                className=" rounded-3xl"></video>                
            </div>
            <div className={video === '/modelS/Sv4.mp4' ? "flex justify-center pt-[100px]" : 'hidden'}>
                <video src={'/modelS/Sv4.mp4'} layout='fill'  autoPlay loop defaultmuted='true'
                className=" rounded-3xl"></video>                
            </div>
            <div className={video === '/modelS/Sv5.mp4' ? "flex justify-center pt-[100px]" : 'hidden'}>
                <video src={'/modelS/Sv5.mp4'} layout='fill'  autoPlay loop defaultmuted='true'
                className=" rounded-3xl"></video>                
            </div>
            <div className='mx-10 md:ml-[400px] pb-[100px] '>
            <div className="flex mt-10  w-[150px] h-[30px] sm:hidden">
                <svg className="w-[150px] h-[16px]">
                <circle className="cursor-pointer " fill={video === '/modelS/Sv1.mp4' ? 'white' : 'gray'} stroke="gray" r='5' cx='10' cy='8' 
                onClick={()=>setVideo('/modelS/Sv1.mp4')}/>
                <circle className="cursor-pointer " fill={video === '/modelS/Sv2.mp4' ? 'white' : 'gray'} stroke="gray" r='5' cx='25' cy='8' 
                onClick={()=>setVideo('/modelS/Sv2.mp4')}/>
                <circle className="cursor-pointer" fill={video === '/modelS/Sv3.mp4' ? 'white' : 'gray'} stroke="gray" r='5' cx='40' cy='8'
                onClick={()=>setVideo('/modelS/Sv3.mp4')} />
                <circle className="cursor-pointer" fill={video === '/modelS/Sv4.mp4' ? 'white' : 'gray'} stroke="gray" r='5' cx='55' cy='8' 
                onClick={()=>setVideo('/modelS/Sv4.mp4')}/>
                <circle className="cursor-pointer" fill={video === '/modelS/Sv5.mp4' ? 'white' : 'gray'} stroke="gray" r='5' cx='70' cy='8' 
                onClick={()=>setVideo('/modelS/Sv5.mp4')}/>
                </svg>
            </div>
            <div className="hidden sm:flex mt-10  w-[150px] h-[30px] ">
                <svg className="w-[150px] h-[16px]">
                <circle className="cursor-pointer " fill={video === '/modelS/Sv1.mp4' ? 'white' : 'gray'} stroke="gray" r='7' cx='10' cy='8' 
                onClick={()=>setVideo('/modelS/Sv1.mp4')}/>
                <circle className="cursor-pointer " fill={video === '/modelS/Sv2.mp4' ? 'white' : 'gray'} stroke="gray" r='7' cx='35' cy='8' 
                onClick={()=>setVideo('/modelS/Sv2.mp4')}/>
                <circle className="cursor-pointer" fill={video === '/modelS/Sv3.mp4' ? 'white' : 'gray'} stroke="gray" r='7' cx='60' cy='8'
                onClick={()=>setVideo('/modelS/Sv3.mp4')} />
                <circle className="cursor-pointer" fill={video === '/modelS/Sv4.mp4' ? 'white' : 'gray'} stroke="gray" r='7' cx='85' cy='8' 
                onClick={()=>setVideo('/modelS/Sv4.mp4')}/>
                <circle className="cursor-pointer" fill={video === '/modelS/Sv5.mp4' ? 'white' : 'gray'} stroke="gray" r='7' cx='110' cy='8' 
                onClick={()=>setVideo('/modelS/Sv5.mp4')}/>
                </svg>
            </div>
            <div className={video === '/modelS/Sv1.mp4' ? 'mt-5 ' : 'hidden'}>
                <p className='my-3 text-white text-xl font-bold tracking-widest '>Cinematic Experience</p>
                <p className='text-white'>A 17&quot; touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
            </div>
            <div className={video === '/modelS/Sv2.mp4' ? 'mt-5  max-w-[1000px]' : 'hidden'}>
                <p className='my-3 text-white text-xl font-bold tracking-widest '>Yoke Steering</p>
                <p className='text-white'>A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.</p>
            </div>
            <div className={video === '/modelS/Sv3.mp4' ? 'mt-5  max-w-[1000px]' : 'hidden'}>
                <p className='my-3 text-white text-xl  font-bold tracking-widest '>Perfect Environment</p>
                <p className='text-white'>Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.</p>
            </div>
            <div className={video === '/modelS/Sv4.mp4' ? 'mt-5   max-w-[1000px]' : 'hidden'}>
                <p className='my-3 text-white text-xl font-bold tracking-widest'>Redesigned Second Row</p>
                <p className='text-white'>Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.</p>
            </div>
            <div className={video === '/modelS/Sv5.mp4' ? 'mt-5  max-w-[1000px]' : 'hidden'}>
                <p className='my-3 text-white text-xl font-bold tracking-widest '>Console-Grade Gaming</p>
                <p className='text-white'>Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.</p>
            </div>
            </div>
            
        </div>
    );
}

export default VideoSelect;