import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './AppNavbar.css'


function AppNavbar () {
    return(
        <div className='App' >
            <Navbar expand="lg" collapseOnSelect className='app-navbar'>
                <Navbar.Brand href="#">Yao-Wen Lee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#Host">Host</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='https://www.instagram.com/yaowenlee/' target='_blank'><img src='https://photos.smugmug.com/photos/i-kT95Kvv/0/8253ed20/Ti/i-kT95Kvv-Ti.png' alt='instagram'></img></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default AppNavbar;


