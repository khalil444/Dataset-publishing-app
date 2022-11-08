import logo from './logo.svg';
import './App.css';
import Login from './componenets/Login';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './componenets/Header';
import Register from './componenets/Register';
import AddDataset from './componenets/AddDataset';
import Home from './componenets/Home';
import BrowseDataset from './componenets/BrowseDataset';
import ViewDataset from './componenets/ViewDataset';




function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Link to="/Homepage">Homepage</Link>
<Link to="/Loginpage">Loginpage</Link> */}

        <Header></Header>

        <Routes>


          <Route element={<Login></Login>} path="login" />
          <Route element={<Register></Register>} path="register" />
          <Route element={<AddDataset></AddDataset>} path="AddDataset" />
          <Route element={<Home></Home>} path="Home" />
          <Route element={<BrowseDataset></BrowseDataset>} path="BrowseDataset" />
          <Route element={<ViewDataset/>} path="view/:id" />
          <Route element={<Home></Home>} path="/" />

        </Routes >
      </BrowserRouter>
    </div>


  );
}


export default App;
