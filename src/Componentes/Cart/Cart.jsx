import React, { useState } from 'react';
import './Cart.scss'
import { Container, Button, ListGroup } from 'react-bootstrap';
import among from '../../assets/images/capas/among.jpg'
import { CreditCard, Pix, Article, RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';

export default function Cart() {

    const [car, setCart] = useState([]);

    return (
        <div className='custom-section-cart'>
            <Container className='py-5'>
                <div className='custom-flex'>
                    <h1 className='custom-h1'>Seu carrinho de compras</h1>
                    <div>
                        <div className='custom-blockcart'>
                            <img className='custom-img' src={among} alt="Imagem teste among" />
                            <div>
                                <p className='custom-title'>Among US</p>
                                <p className='text-white'>Um jogo de trabalho em equipe e trairagem online ou em rede local para 4 a 15 jogadores... no espaço!</p>
                                <p className='custom-price'>R$ 10.00</p>

                                <Button>Confirmar compra</Button>

                                {/* <ListGroup className='custom-block-payment' horizontal>
                                    <ListGroup.Item action className='custom-payment-item'><Pix /></ListGroup.Item>
                                    <ListGroup.Item action className='custom-payment-item'><CreditCard /></ListGroup.Item>
                                    <ListGroup.Item action className='custom-payment-item'><Article /></ListGroup.Item>
                                </ListGroup> */}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}
