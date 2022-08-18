import Image from "next/image"

const Last =() =>{
    return(
        <>
        <div className="pt-10 ml-9 text-center md:flex lg:text-start bg-white">
            <div className="mx-auto lg:w-2/5">
                <p className=" text-2xl font-bold mt-7 mb-4 ">Model S</p>
                <div className="flex flex-col lg:flex-row ">
                    <button className=" w-5/6 rounded-full text-lg font-bold border-[4px] border-gray-800 hover:bg-gray-800 hover:text-white hover:font-normal md:w-[250px] lg:w-[250px] lg:mr-20">ORDER NOW</button>
                    <button className=" w-5/6 rounded-full text-lg font-bold border-[4px] mt-4 border-gray-800 hover:bg-gray-800 hover:text-white hover:font-normal md:w-[250px] lg:mt-0 lg:w-[250px]">Compare</button>
                </div>
                
            </div>
            <div className="lg:w-2/5">
                <div className="relative mt-[100px] md:mt-0 xl:hidden">
                    <Image src='/modelS/S12.jpg' width='400px' height={'200px'}/>
                </div>
                <div className="hidden relative mt-[100px] md:mt-0 xl:block">
                    <Image src='/modelS/S12.jpg' width='500px' height={'200px'}/>
                </div>
            </div>            
        </div>
        <div className="max-w-3xl text-gray-600 text-sm text-center mx-auto">
            Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change.<a href="/"> Learn more about Standard Connectivity and any limitations.</a>
            <div className="my-20 flex flex-col md:flex-row justify-between">
            <a className="no-underline">Tesla © 2022</a>
            <a className="no-underline">Privacy & Legal</a>
            <a className="no-underline">Vehicle Recalls</a>
            <a className="no-underline">Contact</a>
            <a className="no-underline">Carrers</a>
            <a className="no-underline">News</a>
            <a className="no-underline">Engage</a>
            <a className="no-underline">Locations</a>
            </div>
        </div>
        </>
    )
}

export default  Last