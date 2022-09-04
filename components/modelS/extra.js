import Image from "next/image";

const Safety = () => {
    return (
        <div className="py-10  flex flex-col lg:flex-row overflow-x-hidden w-full">
            <div className="relative w-[904px] h-[568px]">
                
                <Image src="/model3/32.jpg" layout="fill" objectFit="cover" className="relative"/>
                <div className="absolute z-40 w-[904px] h-[568px]">
                    <svg xmlns= 'http://www.w3.org/2000/svg' viewBox="0 0 904 568" className="bg-red-300 absolute" >
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="90" cy="200" />
                        <path 
                            stroke="black" strokeWidth={'2px'} d="M90 196 v-100" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="260" cy="80" />
                        <path
                            stroke="black" strokeWidth={'2px'} d="M260 77 v-47" />
                        <circle fill='white' stroke="black" strokeWidth={'2px'} r="4" cx="240" cy="230" />
                        <path 
                            stroke="black" strokeWidth={'2px'} d="M240 233 v60" />
                    </svg>     
                </div>
            </div>
            
            <div className="max-w-4xl pl-8 md:pl-10 flex flex-col lg:w-[330px]">
                <div className="">
                    <p className="font-light">Safety</p>
                    <p className="text-3xl font-bold">Built for Safety</p>
                    <button className="hidden w-[250px] border-[3px] border-black rounded-full  mt-6 py-1 lg:block"
                    >ORDER NOW</button>
                </div>
                <div className="">
                    <p>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.</p>
                    <p className="font-bold mt-5">5-Star Rating</p>
                    <p>Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                    <p className="font-bold mt-5">Top Safety Pick+</p>
                    <p>Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
                    <button className=" w-[250px] border-[3px] border-black rounded-full  mt-6 py-1 lg:hidden"
                    >ORDER NOW</button>
                </div>                
            </div>
        </div>
    );
}
 
export default Safety;