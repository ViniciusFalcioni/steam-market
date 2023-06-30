import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import { CarrinhoProvider } from './Componentes/Context/CarrinhoContext';
import { FilterProvider } from './Componentes/Context/FilterContext.jsx';
import PaymentPage from './Pages/PaymentPage';
import Header from './Componentes/Header/Header';

export default function AppRoutes() {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (jogo) => {
        setCarrinho([...carrinho, jogo]);
    }

    const removerDoCarrinho = (jogo) => {
        const novoCarrinho = carrinho.filter((item) => item !== jogo);
        setCarrinho(novoCarrinho);
    }

    return (
        <>
            <BrowserRouter>
                <CarrinhoProvider
                    carrinho={carrinho}
                    adicionarAoCarrinho={adicionarAoCarrinho}
                    removerDoCarrinho={removerDoCarrinho}
                >
                    <FilterProvider>
                        <Routes>
                            <Route exact path='/' element={<HomePage />} />
                            <Route path='/cart' element={<CartPage />} />
                            <Route path='/payment' element={<PaymentPage />} />
                        </Routes>
                    </FilterProvider>
                </CarrinhoProvider>
            </BrowserRouter >
        </>
    );
}
