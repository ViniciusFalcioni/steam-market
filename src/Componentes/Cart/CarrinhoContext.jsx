import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (jogo) => {
        const jogoExistente = carrinho.find((item) => item.name === jogo.name);
        if (jogoExistente) {
            return;
        }

        setCarrinho([...carrinho, jogo]);
    }

    const removerDoCarrinho = (jogo) => {
        const novoCarrinho = carrinho.filter((item) => item !== jogo);
        setCarrinho(novoCarrinho);
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>

    );
};