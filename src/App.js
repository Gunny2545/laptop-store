import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Mouse from './pages/Mouse';
import ProductDetail from './pages/ProductDetail';
import MouseDetail from './pages/MouseDetail';
import NewProduct from './pages/NewProduct';
import NewMouse from './pages/NewMouse';
import EditProduct from './pages/EditProduct';
import EditMouse from './pages/EditMouse';
import DeleteProduct from './pages/DeleteProduct';
import DeleteMouse from './pages/DeleteMouse';
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
      <Route path='/mouse/edit/:id' element={<EditMouse/>}/>
      <Route path='/product/delete/:id' element={<DeleteProduct/>}/>
      <Route path='/mouse/delete/:id' element={<DeleteMouse/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/mouse' element={<Mouse/>}/>
      <Route path='/mouse/:id' element={<MouseDetail/>}/>
      <Route path='/mouse/new' element={<NewMouse/>}/>
    </Routes>
  );
}

export default App;
