import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

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
                    <Link href="#">Quânticos</Link>
                    <Link href="#">Manipulados</Link>
                    <Link href="#">Shakes</Link>
                    <Link href="#">Géis</Link>
                    <Link href="#">Vitaminas</Link>
                </FooterList>
            </div>
        </Container>
    </footer> ;
}
 
export default Footer;