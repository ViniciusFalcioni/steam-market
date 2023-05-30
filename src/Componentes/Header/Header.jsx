import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Form, Button, Nav, } from 'react-bootstrap';
import './Header.scss';
import Logo from '../../assets/images/Steam-logo.png';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (
        <Navbar className='custom-navbar py-4' expand="lg" variant="light">
            <Container>
                <NavbarBrand><Link to="/"><img className='logo' src={Logo} alt="Logo da Steam" /></Link></NavbarBrand>
                <Nav>
                    <Nav className="nav-link justify-content-end flex-grow-1">
                        <Nav.Item><Link className='nav-link' to="/">Biblioteca</Link></Nav.Item>
                        <Nav.Item><Link className='nav-link' to="/cart">Carrinho</Link></Nav.Item>
                    </Nav>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" className='btn-buscar'><SearchIcon /></Button>
                </Form>
            </Container>
        </Navbar>
    )
}
