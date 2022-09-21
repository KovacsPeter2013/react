import Container from "react-bootstrap/Container";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Header() {

  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();


  function logout(){

    localStorage.clear();
    
    navigate("/login");
  }


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/list">App</Navbar.Brand>
          <Nav className="me-auto wrapper">
            {localStorage.getItem("user-info") ? (
              <>
               <Link to="/list">Termék lista</Link>
                <Link to="/add">Termék hozzáadás</Link>
                <Link to="/update">Termék szerkesztése</Link>
                <Link to="/search">Termék keresése</Link>
              </>
            ) : (
              <>
                <Link to="/login">Bejelentkezés</Link>
                <Link to="/register">Regisztráció</Link>
              </>
            )}
          </Nav>
          {user ? 
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>Kilépés</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null}
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;
