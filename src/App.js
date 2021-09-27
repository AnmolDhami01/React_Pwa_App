import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
function App() {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home"> Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route component={About} path="/about"></Route>
          <Route component={Users} path="/users"></Route>
          <Route exact component={Home} path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
