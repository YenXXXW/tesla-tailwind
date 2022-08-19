const FirstPage = () => {
    return (
        <>
                    <div className="h-screen relative">
                <Image src={'/modelS/S1.jpg'} layout='fill' objectFit="cover"/>
                <div className="w-full absolute top-[100px]">
                    <h1 className="text-center">Model S</h1>
                    <p className="text-center text-xl">Plaid</p>
                </div>
                <div className="w-full absolute bottom-[50px] text-white font-bold  tracking-widest flex justify-center ">
                    <div className='mx-[100px] lg:flex flex-row lg:w-[1000px] md:w-[800px]'>
                        <div className="flex justify-between lg:w-3/4 mb-6">
                            <div>
                                <p className="text-center text-2xl lg:text-4xl ">396mi</p>
                                <p className="text-center mt-2 text-xs font-normal lg:text-sm">Range (EPA est.)</p>
                            </div>
                            <div>
                                <p className="text-center text-2xl lg:text-4xl ">1.99s</p>
                                <p className="text-center mt-2 text-xs font-normal lg:text-sm ">0-60 mph*</p>
                            </div>
                            <div>
                                <p className="text-center text-2xl lg:text-4xl ">200mph</p>
                                <p className="text-center mt-2 text-xs font-normal lg:text-sm ">Top Speed†</p>
                            </div>
                            <div>
                                <p className="text-center text-2xl lg:text-4xl ">1,020 hp</p>
                                <p className="text-center mt-2 text-xs font-normal lg:text-sm ">Peak Power</p>
                            </div>
                        </div>
                        <div className="col-span-1 px-3 w-full  flex justify-center lg:w-1/4 items-center lg:ml-20">
                            <div className="w-[400px] text-center border-white  border-[4px] rounded-full py-2 hover:bg-white hover:text-gray-800">ORDER NOW</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default FirstPage;