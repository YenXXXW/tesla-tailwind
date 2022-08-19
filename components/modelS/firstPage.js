import Image from "next/image";

const FirstPage = () => {
    return (
        <>
        <div className="h-screen relative bg-red-400">
            <Image src={'/modelS/S1.jpg'} layout='fill' objectFit="cover"/>
            <div className="w-full absolute top-[15%]">
                <h1 className="text-center">Model S</h1>
                <p className="text-center text-xl">Plaid</p>
            </div>
            <div className="absolute w-full bottom-[20%] xs:bottom-[15%] text-white font-bold  tracking-wide flex flex-col
             px-3 lg:flex-row lg:px-48">
                <div className="flex justify-around md:w-[70%] md:mx-auto">
                    <div>
                        <p className="text-center text-lg sm:text-2xl xl:text-4xl ">396mi</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm">Range (EPA est.)</p>
                    </div>
                    <div>
                        <p className="text-center text-xl xs:text-2xl xl:text-4xl ">1.99s</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm ">0-60 mph*</p>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-center text-xl xs:text-2xl xl:text-4xl ">200mph</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm ">Top Speed†</p>
                    </div>
                    <div>
                        <p className="text-center text-xl xs:text-2xl xl:text-4xl ">1,020 hp</p>
                        <p className="text-center mt-2 text-xs font-normal lg:text-sm ">Peak Power</p>
                    </div>
                </div>
                <button className="mt-3 border-[4px] rounded-full md:mx-auto md:w-[25%] hover:text-gray-800 hover:bg-white">ORDER NOW</button>
            </div>
        </div>
        </>
    );
}
 
export default FirstPage;