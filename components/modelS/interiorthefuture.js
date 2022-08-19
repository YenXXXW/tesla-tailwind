const InteriorTheFuture = () => {
    return (
        <>
        <div className="w-full h-[200px] relative bg-black">
            <div className="top-[100px] absolute w-full font-bold text-white ">
                <p className="text-center text-3xl">Interior of the Future</p>
            </div>
        </div>
        <div className="w-full h-screen relative">
            <Image src='/modelS/S2.jpg' layout="fill" objectFit="cover" />
        </div>
        </>
        
    );
}
 
export default InteriorTheFuture;