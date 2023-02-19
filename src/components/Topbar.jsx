import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topbar = () => {
    const location = useLocation();
    return (  
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Algo Visualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#">
                        <Link className="nav-link active" to="/">Home</Link>
                    </Nav.Link>
                    {
                        location.pathname.includes("/searching") ? (
                            <>
                                <Nav.Link href="#">
                                    <Link className="nav-link" to="/searching/sequential">Sequential Search</Link>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <Link className="nav-link" to="/searching/binary">Binary Search</Link>
                                </Nav.Link>
                            </>
                        ) : (
                            <></>
                        )
                    }
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Topbar;