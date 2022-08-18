import Image from "next/image";

const Safety = () => {
    return (
        <div className="flex flex-col  bg-white xl:flex-row-reverse ">
            <div className="relative h-[600px] lg:w-3/5 xl:mx-[200px]">
                <div className="absolute  h-[500px] z-30 w-full top-[130px]">
                    <svg xmlns= 'http://www.w3.org/2000/svg' className='h-[500px] w-full'>
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="90" cy="200" />
                        <path 
                            stroke="black" strokeWidth={'2px'} d="M90 196 v-150" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="300" cy="47" />
                        <path  
                            stroke="black" strokeWidth={'2px'} d="M300 44 v-47" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="335" cy="250" />
                        <path  
                            stroke="black" strokeWidth={'2px'} d="M335 253 v120" />
                    </svg>     
                </div>     
                <div className="hidden relative mt-[100px] h-[400px] w-[650px] md:block">
                    <Image src='/modelS/S13.jpg' layout="fill" />
                </div>
                <div className=" relative mt-[100px] h-[400px] w-[600px] md:hidden">
                    <Image src='/modelS/S13-mod.jpg' layout="fill" />
                </div>        
                      
            </div> 
            <div className="lg:flex xl:flex-col xl:w-2/5">
                <div className="ml-10 my-8 lg:ml-[100px] xl:ml-10 ">
                    <p className="font-light text-[22px]">Range</p>
                    <h2 className="font-bold">Go Anywhere</h2> 
                    <div className="mt-4 hidden lg:block xl:hidden lg:w-[250px] text-center border-gray-800  border-[4px] rounded-full py-1  hover:bg-gray-800 hover:text-white ">
                        ORDER NOW
                    </div>               
                </div>
                <div className="ml-10 mr-10 text-[18px] max-w-4xl lg:my-auto xl:my-2 xl:mr-0">
                    <p>With up to 405 miles of estimated range and access to the world&apos;s largest and most powerful fast charging network, you&apos;ll spend less time plugged in and more time on the road.</p>
                </div>
                <div className="my-3 mx-auto w-[90%] text-center border-gray-800  border-[4px] rounded-full py-1 hover:bg-gray-800 hover:text-white md:w-[200px] md:ml-10 lg:hidden xl:block">
                    ORDER NOW
                </div>
            </div>
        </div>
    );
}
 
export default Safety;