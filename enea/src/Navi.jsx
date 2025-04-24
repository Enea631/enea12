// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const Navi = () => {
//   return (
//     <div>
     
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>




//     </div>
//   )
// }

// export default Navi
import React from 'react';
import "./Navi.scss";

const Navi = () => {
  return (
    <nav>
      <div>
        <a href="#home">React-Bootstrap</a>
        <div>
          <ul style={{ listStyle: "none", display: "flex", gap: "1rem", padding: 0 }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#link">Link</a></li>
            <li>
              <details>
                <summary>Dropdown</summary>
                <ul style={{ listStyle: "none", margin: 0, paddingLeft: "1rem" }}>
                  <li><a href="#action/3.1">Action</a></li>
                  <li><a href="#action/3.2">Another action</a></li>
                  <li><a href="#action/3.3">Something</a></li>
                  <li><hr /></li>
                  <li><a href="#action/3.4">Separated link</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navi;
