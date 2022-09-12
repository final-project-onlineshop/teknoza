import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import './header.scss'

const Header = () => {
    return (
        <Navbar expand="lg" className='header-navbar'>
            <Container>
                <Navbar.Brand href="/home"><div className="navbar-brand">
                    <img src="images/logo-teknoza.png" alt="Logo" height="50" className='logoImage' />
                    <b>Electronics for everyone</b>
                </div></Navbar.Brand>
                <div className='search-box'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search..." className="searchInput" />
                </div>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">

                    <Nav className="ms-auto">
                        <Nav.Link href="/shopping-cart">Shopping Cart <i className="fa-solid fa-cart-shopping"></i></Nav.Link>

                        <Nav.Link href="/register">Register</Nav.Link>

                        <Nav.Link href="/register">Login</Nav.Link>



                        <NavDropdown title={<i className="fa-solid fa-user"></i>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Orders
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Login
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // ////////////////////////////////////////////////////////////////////////
        //             <Navbar bg="light" variant="light" className='navbar' >
        //               <Container>
        //                 <Navbar.Brand>
        //                   <Link to="/">

        //                     <div className="d-flex flex-column">
        //                       <img src="images/logo-teknoza.png" alt="Logo" height="50" className='logoImage' />
        //                       <b>Electronics for everyone</b>
        //                     </div>
        //                   </Link>
        //                 </Navbar.Brand>
        //                 <Navbar.Toggle />

        //                 <Nav className='justify-content-end'>
        //                   <Nav.Item><Link to="/shopping-cart">Shopping Cart</Link></Nav.Item>
        //                   <Nav.Item><Link to="/register">Register</Link></Nav.Item>
        //                   <Nav.Item><Link to="/login">Login</Link></Nav.Item>
        //                 </Nav>

        //               </Container>
        //             </Navbar>

    )
}

export default Header