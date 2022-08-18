import Image from "next/image"

const Exterior =()=>{
    return(
        <>
        <div className="relative h-[400px]">
            <Image src={'/modelS/S7.jpg'} layout='fill' objectFit="cover"/>
        </div>
        <div className="bg-black text-white pl-10 lg:pl-[100px] xl:pl-[150px] tracking-wider">
            <p className="text-xl pt-[50px] pb-1">Exterior</p>
            <p className="text-3xl font-bold pb-4">Designed for Efficiency</p>
            <p className="max-w-4xl">With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.</p>
            <button className="mt-3 mb-10 border-[4px] py-1 border-white rounded-full mx-2 w-5/6 hover:text-gray-800 hover:bg-white  sm:w-[250px] sm:mx-0">
                ORDER NOW
            </button>
        </div>
        </>
    )
}
export default Exterior