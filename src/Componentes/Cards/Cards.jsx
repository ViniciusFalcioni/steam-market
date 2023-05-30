import React from 'react'
import { Container, Card, Button, } from 'react-bootstrap';
import GamesJson from '../../assets/games.json';
import './Cards.scss'
import { Link } from 'react-router-dom';


export default function Cards() {

    const formatGames = GamesJson.map(item => {
        const formatPrice = item.price === 0 ? "Grátis" : `R$ ${item.price.toFixed(2)}`;
        return { ...item, price: formatPrice };
    });

    return (
        <div className='custom-section-cards'>
            <Container className='py-5'>
                <div className='custom-flex'>
                    {formatGames.map((jogo, index) => (
                        <Card className='custom-card' key={index}>
                            <Card.Img className='custom-img' variant="top" src={`src/assets/images/capas/${jogo.foto}.jpg`} />
                            <Card.Body>
                                <Card.Title style={{ color: 'white', }}>{jogo.name}</Card.Title>
                                <Card.Text className='description'>{jogo.description}</Card.Text>
                                <Card.Text className='price'>{jogo.price}</Card.Text>
                                <Button className='btn-comprar' variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

            </Container>
        </div>
    )
}
