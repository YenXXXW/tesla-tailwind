import Navbar from "../components/navbar";
import Head from 'next/head'
import Image from "next/image";
import VideoSelect from "../components/modelS/videoSelect";
import StayConnected from "../components/modelS/stayconnected";
import BeyondLudicrious from "../components/modelS/beyondLudicrous";
import ElectricPowerTrain from "../components/modelS/electricPowertrain";
import Exterior from "../components/modelS/exterior";
import Rentless from "../components/modelS/rentless";
import Range from "../components/modelS/range";
import Autopilot from "../components/modelS/autopilot";
import Specs from "../components/modelS/spec";
import Last from "../components/modelS/last";
import Safety from "../components/modelS/safety";
import Test from "../components/modelS/test";

function ModelS() {
    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Model S | Tesla</title>
                <meta name="description" content="Tesla clone by wai" />
                <link rel="icon" href="/tesla-logo-red.png" />
            </Head>
            <Navbar fill='black' position={'absolute'}/>
            <div className="h-screen relative">
                <Image src={'/ModelS/S1.jpg'} layout='fill' objectFit="cover"/>
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
            <div className="w-full h-[200px] relative bg-black">
                <div className="top-[100px] absolute w-full font-bold text-white ">
                    <p className="text-center text-3xl">Interior of the Future</p>
                </div>
            </div>
            <div className="w-full h-screen relative">
                <Image src='/modelS/S2.jpg' layout="fill" objectFit="cover" />
            </div>
            <VideoSelect />
            <StayConnected />
            <BeyondLudicrious />
            <ElectricPowerTrain />
            <Exterior />
            <Rentless />
            <Range />
            <Safety />
            <Autopilot />
            <Specs />
            <Last />
            
        </div>
    );
}

export default ModelS;