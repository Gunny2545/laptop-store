import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/new' element={<NewProduct/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/product/edit/:id' element={<EditProduct/>}/>
      <Route path='/product/delete/:id' element={<DeleteProduct/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
}

export default App;
