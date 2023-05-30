import React from 'react'
import Logo from '../../assets/images/Steam-logo.png';
import { Container } from 'react-bootstrap';
import './Footer.scss'

export default function Footer() {
    return (
        <div className='custom-footer'>
            <Container className='custom-container'>
                <img className='logo' src={Logo} alt="Logo da Steam" />
                <p className='mt-3'>Developed by Vinicius Falcioni</p>
            </Container>
        </div>
    )
}
