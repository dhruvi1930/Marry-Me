import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shop-category/ShopCategory';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import LoginSignup from './pages/login-signup/LoginSignup';
import Footer from './components/footer/Footer';
import man_banner from './assets/banner_man.png';
import woman_banner from './assets/banner_woman.png';
import couple from './assets/banner_couple.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={man_banner} category="man"/>}/>
          <Route path='/women' element={<ShopCategory banner={woman_banner} category="woman"/>}/>
          <Route path='/couples' element={<ShopCategory banner={couple} category="couple"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/> 
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
