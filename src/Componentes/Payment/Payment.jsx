import React, { useContext } from 'react';
import './Payment.scss'
import { Container, Tab, Tabs, Form, Button } from 'react-bootstrap';
import { Pix, CreditCard, Article } from '@mui/icons-material'
import InputMask from 'react-input-mask';
import { CarrinhoContext } from '../Context/CarrinhoContext';

export default function Payment() {
    const { carrinho } = useContext(CarrinhoContext);

    let totalPrice = 0;

    if (carrinho.length > 0) {
        totalPrice = carrinho.reduce((accumulator, jogo) => {
            const price = jogo.price === "Grátis" ? 0 : parseFloat(jogo.price.replace('R$ ', ''));
            return accumulator + price;
        }, 0);
    }

    return (
        <div className='custom-section-payment'>
            <Container className='py-5'>
                <div className='custom-header-payment'>
                    <h1 className='custom-h1'>Forma de pagamento</h1>
                    <div className='custom-total'>Total: R$ {totalPrice.toFixed(2)}</div>
                </div>
                <Tabs
                    defaultActiveKey="none"
                    id="justify-tab-example"
                    className="tab-custom"
                    justify
                >
                    <Tab eventKey="pix" title={<div className='tab-link'><Pix /> Pix</div>} >
                        <div className='form-custom'>
                            <Form.Control type="text" placeholder="Nome" pattern="[A-Za-z]+" />
                            <Form.Control as={InputMask} mask="999.999.999.99" type="text" placeholder="CPF" />
                            <Form.Control as={InputMask} mask="(99) 9 9999-9999" type="text" placeholder="Telefone" />
                            <Button variant="success">Concluir</Button>
                        </div>
                    </Tab>
                    <Tab eventKey="card" title={<div className='tab-link'><CreditCard /> Cartão de credito</div>}>
                        <div className='form-custom'>
                            <Form.Control type="text" placeholder="Nome titular do cartão" pattern="[A-Za-z]+" />
                            <Form.Control as={InputMask} mask="999.999.999.99" type="text" placeholder="CPF" />
                            <Form.Control as={InputMask} mask="9999 9999 9999 9999" type="text" placeholder="Número do Cartão" />
                            <div className='dual-input'>
                                <Form.Control as={InputMask} mask="99/99" type="text" placeholder="MM/AA" />
                                <Form.Control type="text" placeholder="CVV" maxLength={3} />
                            </div>
                            <Button variant="success">Concluir</Button>
                        </div>
                    </Tab>
                    <Tab eventKey="boleto" title={<div className='tab-link'><Article /> Boleto</div>}>
                        <div className='form-custom'>
                            <Form.Control type="text" placeholder="Nome" pattern="[A-Za-z]+" />
                            <Form.Control as={InputMask} mask="999.999.999.99" type="text" placeholder="CPF" />
                            <Form.Control as={InputMask} mask="(99) 9 9999-9999" type="text" placeholder="Telefone" />
                            <Button variant="success">Concluir</Button>
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

function TabTitle({ icon, text }) {
    return (
        <div className="tab-title">
            <div className="tab-icon">{icon}</div>
            <div className="tab-text">{text}</div>
        </div>
    );
}