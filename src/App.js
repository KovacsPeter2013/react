import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; /** Ez hiányzott innen, ezért nem formázta a gombot */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Addproduct from "./Addproduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/add" element={<Protected Cmp={Addproduct} />} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/list" element={<Protected Cmp={ProductList} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
