import Image from "next/image";

const Autopilot = () => {
    return (
        <>
        <div className="relative h-[460px]">
            <Image src='/modelS/36.jpg'layout="fill" objectFit="cover"/>
            <div className="absolute w-full bottom-10 lg:top-10">
                <div className="flex flex-row text-center justify-between w-1/2 mx-auto lg:flex-col lg:ml-10 lg:text-start">
                    <div className="lg:mb-10">
                        <p className="text-4xl">360°</p>
                        <p className="lg:hidden text-sm">Degrees</p>
                        <p className="lg:hidden text-sm">of Visibility</p>
                        <p className="hidden lg:block text-sm">Rear, side and forward-facing cameras</p>
                        <p className="hidden lg:block text-sm">provide maximum visibility</p>
                    </div>
                    <div className="lg:mb-10">
                        <p className="text-4xl">250 m</p>
                        <p className="lg:hidden text-sm">of Powerful</p>
                        <p className="lg:hidden text-sm">Visual Processing</p>
                        <p className="hidden lg:block text-sm">Powerful visual processing at up to 250</p>
                        <p className="hidden lg:block text-sm">meters of range</p>
                    </div>
                    <div>
                        <svg xmlns= 'http://www.w3.org/2000/svg' className='w-[50px] h-[50px]'>
                            <circle fill='black' stroke="black" strokeWidth={'1px'} r="15" cx="25" cy="25"> </circle>
                            <circle fill='white' stroke="white" strokeWidth={'1px'} r="5" cx="20" cy="20"> </circle>            
                            <circle fill='none' stroke="black" strokeWidth={'1px'} r="20" cx="25" cy="25"> </circle>
                            <circle fill='white' stroke="white" strokeWidth={'1px'} r="3" cx="30" cy="30"> </circle>
                        </svg>   
                        <p className="lg:hidden text-xs">Tesla</p> 
                        <p className="lg:hidden text-sm">Vision</p> 
                        <p className="hidden lg:block text-sm">Tesla Vision detects nearby cars, helps</p>
                        <p className="hidden lg:block text-sm">prevent potential collisions and assists</p>
                        <p className="hidden lg:block text-sm">with parking</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="lg:flex mb-5">
            <div className="ml-10 my-8 lg:ml-[100px] xl:ml-[150px] mr-[100px]">
                <p className="text-[22px]">Autopilot</p>
                <h2 className='font-bold mt-2 mb-4'>Future of Driving</h2> 
                <div className="mt-4 hidden lg:block lg:w-[250px] text-center border-gray-800  border-[4px] rounded-full py-1  hover:bg-gray-800 hover:text-white ">
                    ORDER NOW
                </div>               
            </div>
            <div className="ml-10 text-[18px] max-w-4xl lg:my-auto">
                <p>Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.</p>
            </div>
            <div className="my-6 mx-auto w-[90%] text-center border-gray-800  border-[4px] rounded-full py-1 hover:bg-gray-800 hover:text-white md:w-[200px] md:ml-10 lg:hidden">
                ORDER NOW
            </div>
        </div>
        </>
    );
}
 
export default Autopilot;