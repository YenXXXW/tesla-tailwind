import Image from "next/image";

function StayConnected() {
    return ( 
        <div className="bg-black relative w-full">
            <div className="flex flex-col md:flex-row">
                <div className="h-[300px] md:w-1/2 md:ml-[200px]">
                    <Image src='/modelS/S3.jpg' width={'600px'} height='300px'/>
                </div>
                <div className="flex flex-col my-10 text-white ml-10 md:ml-0 md:w-1/2 ">
                    <p className="my-3 font-bold">Stay Connected</p>
                    <p className="w-[70%]">Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
                <div className="h-[250px] md:w-1/2 md:ml-[100px]">
                    <video src='/modelS/Sv6.mp4' autoPlay loop defaultmuted='true' width='600px'/>
                </div>
                <div className="flex flex-col md:pt-[100px] my-11 text-white ml-10 bg-black md:w-1/2  md:ml-0">
                    <p className='md:ml-[200px] my-3 font-bold'>Immersive Sound</p>
                    <p className="w-[70%] md:ml-[200px]">A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="h-[300px] md:w-1/2 md:ml-[200px]">
                    <Image src='/modelS/S4.jpg' width={'600px'} height='300px'/>
                </div>
                <div className="flex flex-col my-10 ml-10 text-white md:pt-[100px] md:w-1/2 md:h-[310px]">
                    <p className="my-3 font-bold">Stay Connected</p>
                    <p className="w-[70%]">Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                </div>
            </div>
        </div>
    );
}

export default StayConnected;
