import { useState } from "react";
import Link from "next/link";

const SPScroll = () => {
    const [name , setName ] = useState({
        name1 : false ,
        name2 : false ,
        name3 : false ,
        name4 : false ,
        name5 : false ,
        name6 : false ,
        name7 : false ,
        name8 : false ,
        name9 : false ,
    })

    const [ page ,setPage ] = useState('solarPanels')
    return (
        <div className="hidden text-red-500 text-2xxs lg:flex fixed left-[1%]  z-50 bottom-[18%] flex-col ">
            
            <div className="flex flex-row ">
                <Link href='/solarPanels/#intro'>
                    <svg className=" w-[16px] h-[16px] cursor-pointer"
                    onMouseOver={()=>setName({
                        ...name,
                        name1:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name1:false
                    })}
                    onClick={()=>setPage('solarPanels')}>
                        <path d='M8 0 v16' stroke={page === 'solarPanels' ? 'red' : '#cfc6c6'} />
                    </svg>
                </Link >
                <p className={name.name1 === true ? 'block' : 'hidden'}>SOLAR PANELS</p>
            </div>
                        
            <div className="flex mt-2">
                <Link href='/solarPanels/#savings'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name2:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name2:false
                    })}
                    onClick={()=>setPage('savings')}>
                
                        <path d='M8 0 v16' stroke={page === 'savings' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name2 === true ? 'block' : 'hidden'}>SAVINGS</p>
            </div>
        
        
            <div className="flex mt-2">
                <Link href={'/solarPanels/#design'}>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name3:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name3:false
                    })}
                    onClick={()=>setPage('design')}>
                        <path d='M8 0 v16' stroke={page === 'design' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name3 === true ? 'block' : 'hidden'}>DESIGN</p>
            </div>
            <div className="flex mt-2">
                <Link href='/solarPanels/#powerwall'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name4:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name4:false
                    })}
                    onClick={()=>setPage('powerwall')}>
                        <path d='M8 0 v16' stroke={page === 'powerwall' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                
                <p className={name.name4 === true ? 'block' : 'hidden'}>POWERWALL</p>
            </div>
            <div className="flex mt-2">
                <Link href='/solarPanels/#poweron'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name5:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name5:false
                    })}
                    onClick={()=>setPage('poweron')}>
                        <path d='M8 0 v16' stroke={page === 'poweron' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>                    
                <p className={name.name5 === true ? 'block' : 'hidden'}>POWERON</p>
            </div>
            <div className="flex mt-2">
                <Link href='/solarPanels/#efficiency'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name6:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name6:false
                    })}
                    onClick={()=>setPage('efficiency')}>
                        <path d='M8 0 v16' stroke={page === 'efficiency' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>                    
                <p className={name.name6 === true ? 'block' : 'hidden'}>EFIICIENCY</p>
            </div>
            
            <div className="flex mt-2">
                <Link href='/solarPanels/#experience'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name7:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name7:false
                    })}
                    onClick={()=>{setPage('experience')}}>
                        <path d='M8 0 v16'  stroke={page === 'experience' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name7 === true ? 'block' : 'hidden'}>EXPERIENCE</p>
            </div>
            
            
            <div className="flex mt-2">
                <Link href='solarPanels/#specs'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name8:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name8:false
                    })}
                    onClick={()=>setPage('specs')}>
                        <path d='M8 0 v16'  stroke={page === 'specs' ? 'red': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name8 === true ? 'block' : 'hidden'}>SPECS</p>
            </div>
                
                    
            <div className="flex mt-2">
                <Link href='solarPanels/#order'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name9:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name9:false
                    })}
                    onClick={()=>setPage('last')}>
                        <path d='M8 0 v16' stroke={page === 'last' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>                
                <p className={name.name9 === true ? 'block' : 'hidden'}>ORDER</p>
            </div>
    
        </div>
    );
}
 
export default SPScroll;