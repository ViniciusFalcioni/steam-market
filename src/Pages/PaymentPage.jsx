import React from 'react'
import Header from '../Componentes/Header/Header'
import Footer from '../Componentes/Footer/Footer'
import Payment from '../Componentes/Payment/Payment'

export default function PaymentPage({priceTotal, jogo}) {
    return (
        <>
            <Header />
            <Payment />
            <Footer />
        </>
    )
}
