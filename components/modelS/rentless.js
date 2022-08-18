import Image from "next/image";

const  Rentless =()=>{
    return(
        <>
        <div className="bg-black relative text-white pt-[100px] pb-[50px]">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="mt-6 mb-9 pl-10 md:w-[600px] lg:pl-[100px] xl:pl-[150px] md:my-auto">
                    <p className="py-3  font-bold">Rentless Performance</p>
                    <p>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                </div>
                <div className="md:ml-[100px] lg:hidden">
                    <Image src='/modelS/S8.jpg' width='540px' height={'300px'} />
                </div>                
                <div className="hidden md:ml-[100px] lg:block">
                    <Image src='/modelS/S8.jpg' width='600px' height={'350px'} />
                </div>                
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="md:ml-[100px] lg:hidden">
                    <Image src='/modelS/S9.jpg' width='540px' height={'300px'} />
                </div>                
                <div className="hidden md:ml-[100px] lg:block">
                    <Image src='/modelS/S9.jpg' width='600px' height={'350px'} />
                </div>   
                <div className="mt-6 mb-9 pl-10 md:w-[600px] lg:pl-[100px] md:my-auto xl:pl-[150px] ">
                    <p className="py-3  font-bold">Optimized Aerodynamics</p>
                    <p>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                </div>             
            </div>
            <div className="flex flex-col-reverse md:flex-row">
                <div className="mt-6 mb-9 pl-10 md:w-[600px] lg:pl-[100px] xl:pl-[150px] md:my-auto">
                    <p className="py-3 font-bold ">Refined Styling</p>
                    <p>An iconic silhouette meets refreshed, elegant proportions.</p>
                </div>
                <div className="md:ml-[100px] lg:hidden">
                    <Image src='/modelS/S10.jpg' width='540px' height={'300px'} />
                </div>                
                <div className="hidden md:ml-[100px] lg:block">
                    <Image src='/modelS/S10.jpg' width='600px' height={'350px'} />
                </div>                
            </div>
        </div>
        
        </>
    )
}
export default Rentless;