import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/Slider';


function App() {
  return (
    <div className="wrapper font-Karla text-base">
      <Header/>
      <Slider/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
