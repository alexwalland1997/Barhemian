import { Navbar, Nav, Container } from "react-bootstrap";

export default function navbar () {
    return (
        <>
         <Navbar collapseOnSelect expand="lg" className="navbar">
         <Container>
            <Navbar.Brand href="#home">
                <img src="https://raw.githubusercontent.com/alexwalland1997/Barhemian/main/logo.jpg" className="logo" alt="barhemian"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="dropDown ">
            <Nav className="me-auto links">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#whatson">What's on</Nav.Link>
                <Nav.Link href="#drinks">Drinks</Nav.Link>
                <Nav.Link href="#questions">Questions</Nav.Link>
            </Nav>
            </Navbar.Collapse>
         </Container>
         </Navbar>
        </>
 )
}