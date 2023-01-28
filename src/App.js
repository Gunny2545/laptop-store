import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/new' element={<Product/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/product/edit/:id' element={<Product/>}/>
      <Route path='/product/delete/:id' element={<Product/>}/>
    </Routes>
  );
}

export default App;
