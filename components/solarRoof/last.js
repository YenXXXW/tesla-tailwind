import Link from "next/link";

const Last = () => {
    return (
        <div className="h-screen flex flex-col text-white bg-black">
            <div className="h-[65vh] sm:h-[90vh] w-full justify-center flex">
                <div className=" flex flex-col justify-center sm:w-[300px]">
                    <p className="text-3xl text-center">Transform your Roof</p>
                    <p className="text-sm  text-center my-3">Order now or chat with an Energy Advisor for more information</p>
                    <button className="border-white border-[3px] rounded-xl mt-2"> ORDER NOW</button>
                    <button className="border-white border-[3px] rounded-xl mt-3">Chat with Energy Advisor </button>
                    <a href="#" className="text-center text-xs mt-2">Get Energy Updates</a>
                </div>
            </div>
            <div className="w-full flex justify-center ">
                <div className=" text-xs flex flex-col  sm:flex-row sm:w-[600px] justify-between ">
                    <p className="cursor-pointer">Tesla © 2022</p>
                    <p className="cursor-pointer">Privacy & Legal</p>
                    <p className="cursor-pointer">Vechicle Recalls</p>
                    <p className="cursor-pointer">Contact</p>
                    <p className="cursor-pointer">Carriers</p>
                    <p className="cursor-pointer">News</p>
                    <p className="cursor-pointer">Engage</p>
                    <p className="cursor-pointer">Locations</p>
                </div>                
            </div>
        </div>
    );
}
 
export default Last;