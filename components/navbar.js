import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs'
import { useState } from 'react';

const Navbar = ({fill , position }) => {

    const router =useRouter()
    const [menu ,setMenu] = useState(false)

    return (        
        <div className={`px-2 w-full text-sm pt-3 z-10 ${position} flex text-${fill}`}>
            <div className='mt-2 h-2 w-40 '>
                <svg xmlns= 'http://www.w3.org/2000/svg'  className='cursor-pointer'
                 onClick={()=>{router.push('/')}}>
                    <path fill={fill} d='M0 0 h14 l-2 2 h-4 v8 h-2 v-8 h-4 l-2 -2' />
                    <path fill={fill} d='M28 0 h14 l-2 2 h-10 l-2 -2'/>
                    <path fill={fill} d='M28 4 h14 l-2 2 h-10 l-2 -2'/>
                    <path fill={fill} d='M28 8 h14 l-2 2 h-10 l-2 -2'/>
                    <path fill={fill} d='M58 4 v-2 h10 l2 -2 h-14 v4 h14 v6
                    h-14 l2 -2 h10 v-2 h-12 v-2'/>
                    <path fill={fill} d='M84 0 h2 v8 h10 l-2 2 h-10'/>
                    <path fill={fill} d='M108 0 h14 l-2 2 h-10 l-2 -2'/>
                    <path fill={fill} d='M108 4 h14 v6 h-2 v-4 h-10 v4 h-2'/>
                </svg>
            </div>
            <div className='font-bold w-[70%] lg:hidden'></div>
                <div className='hidden lg:flex  w-[70%]  justify-around pl-[10%] pr-[5%] '>
                <Link href='/modelS' ><p className='font-bold no-underline cursor-pointer'>
                    Model S</p>
                </Link>
                <Link href='/model3'><p className='font-bold no-underline cursor-pointer'>
                    Model 3</p>
                </Link>
                <Link href='/modelX'><p className='font-bold no-underline cursor-pointer'>
                    Model X</p>
                </Link>
                <Link href='/modelY'><p className='font-bold no-underline cursor-pointer'>
                    Model Y</p>
                </Link>
                <Link href='/solarPanels'><p className='font-bold no-underline cursor-pointer'>
                    Solar Panels</p>
                </Link>
                <Link href='/solarRoof'><p className='font-bold no-underline cursor-pointer'>
                    Solar Roof</p>
                </Link>
            </div>
            <div className='font-bold flex justify-around w-[300px] '>
                <div className='w-[100px] lg:hidden'></div>
                <div className='hidden lg:flex justify-around w-[200px]'>
                    <p>Shop</p>
                    <p>Account</p>
                </div>
                <div className='bg-slate-400 rounded-lg px-4 py-1 lg:py-0 lg:bg-transparent cursor-pointer'
                onClick={()=>setMenu(true)}>
                    Menu
                </div>
            </div>
            {/* Blur */}
            <div className={menu ? ' fixed top-0 right-0 h-screen w-full backdrop-blur-sm bg-black/30' : ''} />
            
            {/* Drawer */}
            <div className={menu ? 'fixed top-0 right-0 h-screen w-[300px] bg-white ease-in duration-500 ':
                            'fixed  top-0 -right-[100%] ease-in duration-500 '}>
                <div className='pt-10 ml-[250px]' onClick={()=>setMenu(false)}>
                    <AiOutlineClose size={20} className='cursor-pointer text-black'/>
                </div>
                <div className='flex flex-col ml-10 text-lg font-bold text-black lg:hidden'>
                    <Link href={'/modelS'} >
                        <p className='no-underline  my-3 cursor-pointer'>Model S</p>
                    </Link>
                    <Link href={'/model3'}>
                        <p className='no-underline  my-3 cursor-pointer'>Model 3</p>
                    </Link>
                    <Link href={'/modelX'}>
                        <p className='no-underline my-3 cursor-pointer'>Model X</p>
                    </Link>
                    <Link href={'/modelY'}>
                        <p className='no-underline my-3 cursor-pointer'>Model Y</p>
                    </Link>
                    <Link href={'/solarPanels'}>
                        <p className='no-underline my-3 cursor-pointer'>Solar Panels</p>
                    </Link>
                    <Link href={'/solarRoof'}>
                        <p className='no-underline my-3 cursor-pointer'>Solar Roof</p>
                    </Link>
                </div>
                <div className='flex flex-col ml-10 text-lg text-black font-bold'>
                    <Link href='/'>
                        <p className='no-underline my-3 cursor-pointer'>Eisting Inventory</p>
                    </Link>
                    <Link href='/'>
                        <p className='no-underline my-3 cursor-pointer'>Used Inventory</p>
                    </Link>
                    <Link href='/'>
                        <p className='no-underline my-3 cursor-pointer'>Trade-In</p>
                    </Link>
                    <Link href='/'>
                        <p className='no-underline my-3 cursor-pointer'>Test Drive</p>
                    </Link>
                                  
                </div>
                <div className='ml-10 mt-5'>
                    <p className='flex items-center font-bold'>
                        < BsGlobe size={20} className='mr-3'/>United States
                    </p>
                    <p className='ml-[30px]'>English</p>
                </div>
            </div>
        </div>
        
        
    );
}
 
export default Navbar;