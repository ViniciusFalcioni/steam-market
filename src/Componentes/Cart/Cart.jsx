import React, { useContext } from 'react';
import './Cart.scss'
import { Container, Button, Card } from 'react-bootstrap';
import { CarrinhoContext } from './CarrinhoContext';

export default function Cart() {
    const { carrinho, removerDoCarrinho } = useContext(CarrinhoContext);

    let totalPrice = 0;

    if (carrinho.length > 0) {
        totalPrice = carrinho.reduce((accumulator, jogo) => {
            const price = jogo.price === "Grátis" ? 0 : parseFloat(jogo.price.replace('R$ ', ''));
            return accumulator + price;
        }, 0);
    }
    return (
        <div className='custom-section-cart'>
            <Container className='py-5'>
                <div>
                    <div className='custom-nav-cart'>
                        <h1 className='custom-h1'>Seu carrinho de compras</h1>
                        <div className='custom-total'>Total: R$ {totalPrice.toFixed(2)}</div>
                        <Button variant="success">Finalizar Compra</Button>
                    </div>
                    <div>
                        {carrinho.length === 0 ? (
                            <p className='custom-empty'>Carrinho vazio.</p>
                        ) : (
                            <div className='custom-flex'>
                                {carrinho.map((jogo, index) => (
                                    <Card className='custom-card' key={index}>
                                        <Card.Img className='custom-img' variant="top" src={`src/assets/images/capas/${jogo.foto}.jpg`} />
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white', }}>{jogo.name}</Card.Title>
                                            <Card.Text className='description'>{jogo.description}</Card.Text>
                                            <Card.Text className='price'>{jogo.price}</Card.Text>
                                            <Button onClick={() => removerDoCarrinho(jogo)} variant="danger">Remover jogo</Button>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        )}


                    </div>
                </div>
            </Container>
        </div>
    )
}
