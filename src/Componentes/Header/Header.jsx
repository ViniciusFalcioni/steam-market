import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Form, Button, Nav, } from 'react-bootstrap';
import './Header.scss';
import Logo from '../../assets/images/Steam-logo.png';
import { FilterContext } from '../Context/FilterContext';

export default function Header() {
    const { filterValue, setFilterValue } = useContext(FilterContext)

    const handleChange = (event) => {
        setFilterValue(event.target.value);
      };

    return (
        <Navbar className='custom-navbar py-4' expand="lg" variant="light">
            <Container>
                <NavbarBrand><Link to="/"><img className='logo' src={Logo} alt="Logo da Steam" /></Link></NavbarBrand>
                <Nav>
                    <Nav className="nav-link justify-content-end flex-grow-1">
                        <Nav.Item><Link className='nav-link' to="/">Loja</Link></Nav.Item>
                        <Nav.Item><Link className='nav-link' to="/cart">Carrinho</Link></Nav.Item>
                    </Nav>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={filterValue}
                        onChange={handleChange}
                    />
                </Form>
            </Container>
        </Navbar>
    )
}
