import './App.css';
import Home from '../src/container/index.js'
import ProductDetails from './details/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Header from './container/Header/Header';


function App() {
  return (
    <div className="wrapper font-Karla text-base">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mug/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
