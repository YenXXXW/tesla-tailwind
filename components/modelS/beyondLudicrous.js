import Image from "next/image"

const BeyondLudicrious =()=>{
    return(
        <>
        <div className="h-[500px] relative">
            <Image src='/modelS/S5.jpg' layout='fill' objectFit='cover'/>
            <div className="absolute bottom-20 w-full">
                <div className="flex justify-around text-white xl:mx-40">
                    <div>
                        <p className="text-4xl">1,020hp</p>
                        <p>Peak Power</p>
                    </div>
                    <div>
                        <p className="text-4xl">9.23s</p>
                        <p>@155 mph 1/4 mile</p>
                    </div>
                    <div>
                        <p className="text-4xl">1.99s</p>
                        <p>0-60 mph*</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex">
            <div className="ml-10 my-8 lg:ml-[100px] xl:ml-[150px] mr-[100px]">
                <p className="font-light text-[22px]">Plaid</p>
                <h2 className="font-bold">BeyondLudicrious</h2> 
                <div className="mt-4 hidden lg:block lg:w-[250px] text-center border-gray-800  border-[4px] rounded-full py-1  hover:bg-gray-800 hover:text-white ">
                    ORDER NOW
                </div>               
            </div>
            <div className="mx-10 text-[18px] max-w-4xl lg:my-auto">
                <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
            </div>
            <div className="my-3 mx-auto w-[90%] text-center border-gray-800  border-[4px] rounded-full py-1 hover:bg-gray-800 hover:text-white md:w-[200px] md:ml-10 lg:hidden">
                ORDER NOW
            </div>
        </div>
        
        </>
    )
}
export default BeyondLudicrious