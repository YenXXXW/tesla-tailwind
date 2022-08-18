import Image from "next/image";
import { useState } from "react";
function ElectricPowerTrain() {

    const [image , setImage] = useState('/modelS/S14.jpg')

    return (
        <>
        <div className="mt-[100px] mx-10 lg:ml-[100px] xl:ml-[150px]">
            <h2 className="font-bold">Electric Powertrain</h2>
            <div className="max-w-4xl my-10">
            Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.
            </div>
        </div>
        <div className={image === '/modelS/S14.jpg' ? " relative h-[300px] lg:h-[400px] xl:h-[500px] mx-auto " : 'hidden'}>
            <Image src='/modelS/S14.jpg' layout="fill" objectFit="cover"/>
        </div>
        <div className={image === '/modelS/S6.jpg' ? " relative h-[300px] lg:h-[400px] xl:h-[500px] mx-auto " : 'hidden'}>
            <Image src='/modelS/S6.jpg' layout="fill" objectFit="cover"/>
        </div>
        <div className="w-[650px] md:w-full flex  lg:mx-40  mx-4 mb-5 ">
            <div className="w-[350px] sm:w-[350px] border-t-2 border-black bg-red-300 md:w-[500px]">
                <h3 className="mt-2">Model S</h3>
                <p className="max-w-xl">Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum contols.</p>
                <div className="my-3 flex justify-between md:w-3/4">
                    <div>
                        <p>3.1s</p>
                        <p>0-60mph</p>
                    </div>
                    <div>
                        <p>405 mi</p>
                        <p>Range (EPA est*)</p>
                    </div>
                    <div>
                        <p>670hp</p>
                        <p>Peak Power</p>
                    </div>
                </div>
            </div>
            <div className="w-[350px] ml-4 md:ml-[150px] border-t-2 border-black md:w-[500px] bg-red-500">
                <h3 className="mt-2">Model S Plaid</h3>
                <p className="max-w-xl">Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.</p>
                <div className="my-3 flex justify-between md:w-3/4">
                    <div>
                        <p>1.99s*</p>
                        <p>0-60mph</p>
                    </div>
                    <div>
                        <p>396 mi</p>
                        <p>Range (EPA est*)</p>
                    </div>
                    <div>
                        <p>670hp</p>
                        <p>Peak Power</p>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default ElectricPowerTrain;