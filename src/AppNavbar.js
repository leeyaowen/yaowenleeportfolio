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
                    <Nav.Link href="#Host" className='homenavlink'>Host</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='homenavlink'>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar>
                        <Nav>
                            <Nav.Link href='https://www.instagram.com/yaowenlee/' target='_blank'><img src='https://photos.smugmug.com/photos/i-kT95Kvv/0/8253ed20/Ti/i-kT95Kvv-Ti.png' alt='instagram'></img></Nav.Link>
                            <Nav.Link href='https://www.facebook.com/li.y.wen.12/' target='_blank'><img src='https://photos.smugmug.com/photos/i-3RGtnMz/0/f8612d86/Ti/i-3RGtnMz-Ti.png' alt='facebook'></img></Nav.Link>
                            <Nav.Link href='https://github.com/leeyaowen' target='_blank'><img src='https://photos.smugmug.com/photos/i-GZNGx8x/0/25019618/Ti/i-GZNGx8x-Ti.png' alt='github'></img></Nav.Link>
                            <Nav.Link href='https://www.behance.net/yaowenlee' target='_blank'><img src='https://photos.smugmug.com/photos/i-BvhTK6T/0/f80e1b24/Ti/i-BvhTK6T-Ti.png' alt='behance'></img></Nav.Link>
                            <Nav.Link href='https://www.vogue.it/en/photovogue/portfolio/?id=155462' target='_blank'><img src='https://photos.smugmug.com/photos/i-dr55LN9/0/a2974cbb/Ti/i-dr55LN9-Ti.png' alt='photovogue'></img></Nav.Link>
                        </Nav>
                    </Navbar>                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default AppNavbar;


