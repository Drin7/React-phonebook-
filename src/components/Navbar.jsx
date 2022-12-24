import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function N() {
  return (
    <Navbar expand="xl" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">PhoneBook</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default N;
