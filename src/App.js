import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navi() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/dashboard">메인</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/business" eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/client" eventKey="link-2">Disabled</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/shop" eventKey="link-3">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/board" eventKey="link-4">Disabled</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navi></Navi>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
