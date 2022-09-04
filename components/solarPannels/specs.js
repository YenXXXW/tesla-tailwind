import Image from "next/image";

const Specs = () => {
    return ( 
        <div className="sm:h-screen bg-black flex flex-col sm:flex-row pb-5 pl-7 ">
            <div className=" flex  justify-center  sm:hidden ">
                <Image src='/solarPannel/SP6.jpg' width={'400px'} height={'200px'} className='align-middle '/>
            </div>
            <div className="w-1/2  flex-col justify-center hidden sm:flex">
                <Image src='/SolarPannel/SP6.jpg' width={'550px'} height={'300px'} className='align-middle '/>
            </div>
            <div className="text-white h-full text-sm  w-full sm:w-1/2 sm:grid sm:items-center">
                <div className="sm:w-full tracking-wide ">
                    <span className="text-xl md:text-3xl font-bold">Solar Roof </span>
                    <span className="text-xl md:text-3xl">Specs</span>
                    <div className="flex flex-row mt-2 md:mt-5">
                        <div className="w-1/2 sm:w-[200px]">
                            <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40' className="mt-3"/></svg>
                            <p className="text-sm font-bold">Tile and Power Warranty</p>
                            <p>25 years</p>
                            <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40' className="mt-3"/></svg>
                            <p className="text-sm font-bold">Solar Glass Tiles</p>
                            <p>72 W</p>
                            <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40' className="mt-3"/></svg>
                            <p className="text-sm font-bold">Steel Tiles</p>
                            <p>Corrosion and weather resistant</p>
                            <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40' className="mt-3"/></svg>
                            <p className="text-sm font-bold">Wind Rating</p>
                            <p>Class F (highest rating)</p>
                        </div>
                        <div>
                            <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40' className="mt-3"/></svg>
                            <p className="text-sm font-bold">Fire Rating</p>
                            <p>Class A (highest rating)</p>
                            <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40' className="mt-3"/></svg>
                            <p className="text-sm font-bold">Hail Rating</p>
                            <p>Class 3</p>
                            <svg className='w-[50px] h-[3px] mt-6 mb-2' xmlns= 'http://www.w3.org/2000/svg'><path stroke='white' strokeWidth={'1px'} d='M0 0 h40' className="mt-3"/></svg>
                            <p className="text-sm font-bold">Roof Pitch</p>
                            <p>≥ 2:12</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
 
export default Specs;