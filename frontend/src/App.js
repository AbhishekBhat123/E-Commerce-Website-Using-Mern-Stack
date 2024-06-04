import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/product';
import LoginSignup from './Pages/LoginSignup';
import Hero from './Components/Hero/Hero';
import Popular from './Components/Popular/Popular';
import Offers from './Components/Offers/Offers';
import NewCollections from './Components/NewCollections/NewCollections';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import { CartItems } from './Components/CartItems/CartItems';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      
      
      <Navbar/>
      
      
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner}  category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}/>
        <Route path='/product' element={<Product/>} > 
        <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
