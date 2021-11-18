import React from 'react'
import { Storefront, ShoppingCartOutlined } from "@material-ui/icons";
import { Navbar, Container, Nav,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css'

const Navbars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Storefront /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/products'>Products</Link></Nav.Link>
                    </Nav>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Search..." />
                    </Form.Group>
                    </Form>
                    <Nav className="end-auto">
                        <Nav.Link><Link to='/signin'>Sign In</Link></Nav.Link>
                        <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                        <Nav.Link><Link to='/cart'><ShoppingCartOutlined /></Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars
