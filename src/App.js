import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/laptop/Product';
import Mouse from './pages/mouse/Mouse';
import ProductDetail from './pages/laptop/ProductDetail';
import MouseDetail from './pages/mouse/MouseDetail';
import NewProduct from './pages/laptop/NewProduct';
import NewMouse from './pages/mouse/NewMouse';
import EditProduct from './pages/laptop/EditProduct';
import EditMouse from './pages/mouse/EditMouse';
import DeleteProduct from './pages/laptop/DeleteProduct';
import DeleteMouse from './pages/mouse/DeleteMouse';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';

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
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
