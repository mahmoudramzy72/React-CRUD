import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import { Routes, Route } from "react-router-dom";
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <div className='row'>
          <div className='col-2 sidebar'>
            <Sidebar />
          </div>
          <div className='col-10 home'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="products/add" element={<AddProduct />}></Route>
              <Route path="categories" element={<Categories />}></Route>
              <Route path="products/:productId" element={<ProductDetails />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
