import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Вкусно как дома!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dishes">Меню</Nav.Link>
            <Nav.Link href="/book">Забронировать</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;