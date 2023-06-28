import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import UserList from './pages/clientUserList/clientUserList';

function Navi() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>메인</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/business" eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/clientUserList" eventKey="link-2">Disabled</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/shop" eventKey="link-3">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/adminPage/board" eventKey="link-4">Disabled</Nav.Link>
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
          <Route path="/userList" element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
