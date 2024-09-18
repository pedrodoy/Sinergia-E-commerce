import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ['latin'], weight: ["400"] });

const NavBar = () => {
    return (
        <div className="
            sticky 
            top-0
            w-full
            bg-slate-200
            z-30
            shadow-sm
        ">
            <div className="py-2 border-b-[1px]">
                <Container>
                    <div className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    ">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/logo_sinergia-rmv.png"
                                    alt="Logo"
                                    width={60}
                                    height={60}
                                    className="h-auto w-auto"
                                />
                                <span className={`${redressed.className} font-bold text-2xl`}>
                                    Farmácia Sinergia
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">Buscar</div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <div>Carrinho</div>
                            <div>Seu perfil</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default NavBar;
