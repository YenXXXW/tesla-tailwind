import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs'
import { useState } from 'react';

const Navbar = ({fill , position }) => {

    const router =useRouter()
    const [menu ,setMenu] = useState(false)

    return (        
        <div className={`z-10 flex w-full xl:grid justify-between xl:grid-cols-4 pt-4 h-8 ${position}`}>
            <div className="pl-1 sm:pl-15 h-3 pt-2">
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
            <div className="hidden xl:col-span-2 xl:flex justify-between xl:items-center
             xl:px-10  lg:font-semibold">
                <Link href='/modelS' ><p className='no-underline cursor-pointer'>
                    Model S</p>
                </Link>
                <Link href='/model3'><p className='no-underline cursor-pointer'>
                    Model 3</p>
                </Link>
                <Link href='/modelX'><p className='no-underline cursor-pointer'>
                    Model X</p>
                </Link>
                <Link href='/modelY'><p className='no-underline cursor-pointer'>
                    Model Y</p>
                </Link>
                <Link href='/solarPanels'><p className='no-underline cursor-pointer'>
                    Solar Panels</p>
                </Link>
                <Link href='/solarRoof'><p className='no-underline cursor-pointer'>
                    Solar Roof</p>
                </Link>
            </div>
            <div className='hidden  pr-20 xl:pl-[140px] xl:pr-5 xl:flex  justify-between items-center font-semibold cursor-pointer'>
                <p>Shop</p>
                <p>Account</p>
                <p onClick={()=>setMenu(true)}>Menu</p>
            </div>
            <div className='ml-auto w-[85px] pr-3 ' >
                <div className=' xs:mr-0 xl:hidden font-bold  h-8 pt-1 px-4 rounded-xl cursor-pointer  bg-[#e0e2e7] ' onClick={()=>setMenu(true)}>
                    Menu
                </div>
            </div>
            
            {/* Blur */}
            <div className={menu ? ' fixed top-0 right-0 h-screen w-full backdrop-blur-sm bg-black/30' : ''} />
            
            {/* Drawer */}
            <div className={menu ? 'fixed top-0 right-0 h-screen w-[300px] bg-white ease-in duration-500 ':
                            'fixed right-[100%] top-0 ease-out duration-500 '}>
                <div className='pt-10 ml-[250px]' onClick={()=>setMenu(false)}>
                    <AiOutlineClose size={20} className='cursor-pointer'/>
                </div>
                <div className='flex flex-col ml-10 text-lg font-bold xl:hidden'>
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
                <div className='flex flex-col ml-10 text-lg font-bold'>
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