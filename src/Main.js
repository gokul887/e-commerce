import React from 'react';
import { Routes, Route, withRouter } from 'react-router-dom';

import Home from './pages/home';
import ProductList from './pages/productlist';
import Register from './pages/register';
import SignIn from './pages/signin';
import Cart from './pages/cart';
import SimpleProduct from './pages/simpleproduct';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/register' element={<Register />}></Route>
      <Route exact path='/signin' element={<SignIn />}></Route>
      <Route exact path='/products' element={<ProductList />}></Route>
      <Route exact path='/products/:id' element={<SimpleProduct />} />
      <Route exact path='/cart' element={<Cart />}></Route>
    </Routes>
  );
}

export default Main;