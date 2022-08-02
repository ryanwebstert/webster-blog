
import logo from '../../../public/logo.svg'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'


export default function NavBar()  {
    
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                <Navbar.Brand href="/">
                    <Image
                    src={logo}
                    width="150"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                  <Nav>
                    <Nav.Link href="/articles">All Articles</Nav.Link>
                    <Nav.Link eventKey={2} href="/new-article">
                      Write
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
      );
    
}