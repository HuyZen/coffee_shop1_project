import './App.css';
import Home from '../src/container/Home'
import ProductDetails from './details/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Header from './container/Header';
import About from './container/About';
import Story from './container/Story';
import Contact from './container/Contact';
import Products from './container/Products';
import Cart from './container/Cart';


function App() {
  return (
    <div className="wrapper font-Karla text-base">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mug/:id' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/story' element={<Story/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
