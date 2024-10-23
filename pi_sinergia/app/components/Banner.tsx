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
                        Black Friday
                    </h1>
                    <p className="text-lg md:text-xl
                    text-white mb-2">
                        Aqui você encontra os produtos certos para você 
                    </p>
                    <p className="text-2xl md:text-4xl text-yellow-400
                    font-bold">
                        50% OFF em todos os nossos produtos
                    </p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image
                    src="/banner-fisioquantic.png"
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