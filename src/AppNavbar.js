import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function AppNavbar () {
    return(
        <div className='App' >
            <Navbar expand="lg" className='app-navbar'>
                <Navbar.Brand href="/wen-portfolio/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/wen-portfolio/" className='app-navlink'>Home</Nav.Link>
                    <Nav.Link href="/wen-portfolio/Host">Host</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default AppNavbar;


