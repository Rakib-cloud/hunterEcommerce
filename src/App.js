
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Heros from './Components/Heros/Heros';
import Heros2 from './Components/Heros2/Heros2';
import Heros3 from './Components/Heros3/Heros3';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Navbarx from './Components/Navbar/Navbarx';


function App() {
  return (
    <div >
      <Navbarx/>
      <Header/>
      <Slider/> 
       <Heros/>
      <Heros2/>
      
      <Products/>

      <Heros3/>

      <Products/>

      <Heros/>

      <Services/>
<Footer/>

    </div>
  );
}

export default App;
