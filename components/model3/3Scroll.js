import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

const Scroll = () => {

    const router = useRouter()

    const [Yheight , setYheight] = useState(0)
    useEffect(()=>{
        const handleScroll=()=>{
            setYheight(window.innerHeight)
            console.log(window.scrollY)
        }
        window.addEventListener('scroll' , handleScroll)
        return()=>window.removeEventListener('scroll' , handleScroll)
    },)
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

    const [ page ,setPage ] = useState('model3')
    return (
        <div className="hidden text-white text-2xxs md:flex fixed left-[1%] z-50 h-screen flex-col justify-center">
            
            <div className="flex flex-row ">
                <Link href='/model3/#intro'>
                    <svg className=" w-[16px] h-[16px] cursor-pointer"
                    onMouseOver={()=>setName({
                        ...name,
                        name1:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name1:false
                    })}
                    onClick={()=>setPage('model3')}>
                        <path d='M8 0 v16' stroke={page === 'model3' ? 'red' : '#cfc6c6'} />
                    </svg>
                </Link >
                <p className={name.name1 === true ? 'block' : 'hidden'}>Model 3</p>
            </div>
                        
            <div className="flex mt-2">
                <Link href='/model3/#safety'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name2:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name2:false
                    })}
                    onClick={()=>setPage('safety')}>
                
                        <path d='M8 0 v16' stroke={page === 'safety' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name2 === true ? 'block' : 'hidden'}>Safety</p>
            </div>
        
        
            <div className="flex mt-2">
                <Link href={'/model3/#performance'}>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name3:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name3:false
                    })}
                    onClick={()=>setPage('performance')}>
                        <path d='M8 0 v16' stroke={page === 'performance' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name3 === true ? 'block' : 'hidden'}>PERFORMANCE</p>
            </div>
            <div className="flex mt-2">
                <Link href='/model3/#allwheel'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name4:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name4:false
                    })}
                    onClick={()=>setPage('allwheel')}>
                        <path d='M8 0 v16' stroke={page === 'allwheel' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                
                <p className={name.name4 === true ? 'block' : 'hidden'}>ALL WHEEL-DRIVE</p>
            </div>
            <div className="flex mt-2">
                <Link href='/model3/#range'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name5:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name5:false
                    })}
                    onClick={()=>setPage('range')}>
                        <path d='M8 0 v16' stroke={page === 'range' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>                    
                <p className={name.name5 === true ? 'block' : 'hidden'}>RANGE</p>
            </div>
            <div className="flex mt-2">
                <Link href='/model3/#autopilot'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name6:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name6:false
                    })}
                    onClick={()=>setPage('autopilot')}>
                        <path d='M8 0 v16' stroke={page === 'autopilot' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>                    
                <p className={name.name6 === true ? 'block' : 'hidden'}>AUTOPILOT</p>
            </div>
            
            <div className="flex mt-2">
                <Link href='/model3/#interior'>
                    <svg className="w-[16px] h-[16px] cursor-pointer" 
                    onMouseOver={()=>setName({
                        ...name,
                        name7:true
                    })}
                    onMouseOut={()=>setName({
                        ...name ,
                        name7:false
                    })}
                    onClick={()=>{setPage('interior')}}>
                        <path d='M8 0 v16'  stroke={page === 'interior' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name7 === true ? 'block' : 'hidden'}>INTERIOR</p>
            </div>
            
            
            <div className="flex mt-2">
                <Link href='model3/#specs'>
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
                        <path d='M8 0 v16'  stroke={page === 'specs' ? 'red ': '#cfc6c6' } strokeWidth='1px'/>
                    </svg>
                </Link>
                <p className={name.name8 === true ? 'block' : 'hidden'}>SPECS</p>
            </div>
                
                    
            <div className="flex mt-2">
                <Link href='model3/#order'>
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
 
export default Scroll;