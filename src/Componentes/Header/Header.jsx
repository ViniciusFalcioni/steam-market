import React from 'react';
import { Container, Navbar, NavbarBrand, Form, Button, Nav, } from 'react-bootstrap';
import './Header.scss';
import Logo from './Steam-logo.png';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (
        <Navbar className='custom-navbar py-4' expand="lg" variant="light">
            <Container>
                <NavbarBrand><img className='logo' src={Logo} alt="Logo da Steam" /></NavbarBrand>
                <Nav>
                    <Nav className="nav-link justify-content-end flex-grow-1">
                        <Nav.Link href="#">Biblioteca</Nav.Link>
                        <Nav.Link href="#">Carrinho</Nav.Link>
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
