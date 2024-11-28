'use client';

import Link from "next/link";
import Container from "../Container";
import { products } from "@/utils/products";

import Image from "next/image";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import Categories from "./Categories";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importando o ícone de "X"

const redressed = Redressed({ subsets: ['latin'], weight: ["400"] });

const NavBar = ({ currentUser }: { currentUser: any }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fecha os resultados ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".search-bar-container")) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="
        sticky 
        top-0
        w-full
        bg-slate-200
        z-30
        shadow-sm
      "
    >
      <div className="py-2 border-b-[1px]">
        <Container>
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              md:gap-0
            "
          >
            {/* Logo e Nome */}
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

            {/* Barra de Pesquisa */}
            <div className="relative search-bar-container">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowResults(true);
                  }}
                  placeholder="Pesquisar produtos..."
                  className="
                    px-4
                    py-2
                    rounded-lg
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-slate-500
                    transition
                    duration-300
                    focus:border-transparent
                    w-[200px]
                    md:w-[300px]
                  "
                />
                {/* Botão para limpar a barra de pesquisa */}
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setShowResults(false);
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                )}
              </div>
              {showResults && (
                <div className="bg-white absolute top-full left-0 right-0 p-4 shadow-md z-10">
                  <h2 className="text-lg font-semibold">Resultados:</h2>
                  {filteredProducts.length > 0 ? (
                    <ul>
                      {filteredProducts.map((product) => (
                        <li key={product.id} className="py-2 border-b">
                          <Link href={`/product/${product.id}`}>
                            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                              <Image
                                src={product.images[0].image}
                                alt={product.name}
                                width={50}
                                height={50}
                                className="h-auto w-auto"
                              />
                              <span className="text-gray-700">{product.name}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Nenhum produto encontrado.</p>
                  )}
                </div>
              )}
            </div>

            {/* Carrinho e Menu do Usuário */}
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
