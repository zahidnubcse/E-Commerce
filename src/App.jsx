import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar/>
         <SearchBar/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/collection' element={<Collection/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/product/:productId' element={<Product/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/orders' element={<Orders/>}/>
           <Route path='/placeOrder' element={<PlaceOrder/>}/>
         </Routes>
         <Footer/>
      </div>
    </div>
  );
};

export default App;