
import { Route, Routes } from 'react-router-dom';
import Home from '../src/container/Home';
import './App.css';
import ProductDetails from './components/Details/ProductDetails';
import About from './container/About';
import Cart from './container/Cart';
import Contact from './container/Contact';
import Header from './container/Header';
import Products from './container/Products';
import Story from './container/Story';
import SignIn from './features/Auth/pages/SignIn';
import SignUp from './features/Auth/pages/SignUp';
import NotFound from './components/NotFound';
import Profile from './features/Auth/pages/Profile';


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
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/user-profile' element={<Profile/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
