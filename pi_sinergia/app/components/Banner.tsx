import Image from "next/image";


const Banner = () => {
    return ( 
        <div className="relative bg-gradient-to-r from-green-500 to-green-700 mb-8">
            <div className="mx-auto px-8 py-12 flex
            flex-col gap-2 md:flex-row items-center
            justify-evently"> 
                <div className="m-8 md:mb-0 text-center">
                    <h1 className="text-4xl md:text-6xl
                    font-bold text-white mb-4">
                        REMEDINHO DO OTTON
                    </h1>
                    <p className="text-lg md:text-xl
                    text-white mb-2">
                        VEM COMPRAR VEM
                    </p>
                    <p className="text-2xl md:text-5xl text-yellow-400
                    font-bold">
                        REMEDINHO TOP
                    </p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image
                    src="/banner-image.png"
                    fill
                    alt="Banner Image"
                    className="object-contain"
                    />

                    
                </div>
            </div>
        </div>
    );
}
 
export default Banner;