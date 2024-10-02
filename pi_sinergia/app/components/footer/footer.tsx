import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex  flex-col md-flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Produtos manipulados</h3>
                    <Link href="#">Quânticos</Link>
                    <Link href="#">Manipulados</Link>
                    <Link href="#">Shakes</Link>
                    <Link href="#">Géis</Link>
                    <Link href="#">Vitaminas</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Serviços</h3>
                    <Link href="#">Fale conosco</Link>
                    <Link href="#">Sobre nós</Link>
                    <Link href="#">Termos de uso</Link>
                    <Link href="#">Devoluções</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Minha conta</h3>
                    <Link href="#">Meu perfil</Link>
                    <Link href="#">Meus pedidos</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Acompanhe nossas redes</h3>
                    <div className="flex gap-2">
                        <Link href="#">
                            <AiFillLinkedin size={24}/>
                        </Link>
                        <Link href="#">
                            <AiFillInstagram size={24}/>
                        </Link>
                    </div>
                </FooterList>
            </div>
        </Container>
    </footer> ;
}
 
export default Footer;