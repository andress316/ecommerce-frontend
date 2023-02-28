import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './components/home/HomePage.js';
import PrivateRoute from './auth/PrivateRoute/PrivateRoute.js';

import Catalogue from './components/home/catalogue/catalogo.js';
import Login from './auth/Login/Login.js';
import Signup from './auth/Signup/Signup.js';
import UserState from './contexts/users/UserState.js';
import Profile from './auth/profile/Profile.js';
import ShoppingCartState from './contexts/shopping-cart/ShoppingCartState.js';
import Checkout from './components/Checkout/Checkout.js';





function App() {
  return (

    <ShoppingCartState>

      <UserState>
        <BrowserRouter>
          <HeaderComponent />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalogue' element={<Catalogue />} />
            <Route path='*' element="Pagina no encontrada 404" />


              { /* Rutas privadas */}
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile></Profile>
                </PrivateRoute>
              }>
              </Route>

              <Route path="/checkout" element={
                <PrivateRoute>
                  <Checkout></Checkout>
                </PrivateRoute>
              }>
              </Route>


              {/* Rutas de auth */}
              <Route path="/auth/login" element={
                <Login></Login>
              }>
              </Route>

              <Route path="/auth/signup" element={
                <Signup></Signup>
              }>
              </Route>



           
          </Routes>


          <FooterComponent />
        </BrowserRouter>
      </UserState>

    </ShoppingCartState>

  );
}

export default App;
