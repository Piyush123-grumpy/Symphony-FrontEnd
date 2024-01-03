
import './App.css';
import Homepage from './pages/homepage';
import Shop from './pages/Shop';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Cartpage from './pages/Cartpage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import Payment from './pages/Payment';
import Order from './pages/Order';
import OrderDetails from './pages/OrderDetails';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../src/actions/userActions';
import { UserListScreen } from './pages/UserListScreen';
import {UserEditScreen} from './pages/UserEditScreen';
import ProductListScreen from './pages/ProductListScreen';
import ProductEditScreen from './pages/ProductEditScreen';
function App() {

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  const dispatch = useDispatch()



  return (
    <>
      <PayPalScriptProvider
        options={{ "client-id": "AT1VWNXxrFiZoZ6f17LKarFL6CSVh-L9M9eyx_VN3q86uQ0h9qnackzh87fFR4g8TYhFhI7FswB5HW0a" }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/productDetail/:id" element={<ProductPage />}></Route>
          <Route path='/cart' element={<Cartpage />}></Route>
          <Route path='/cart/:id/?' element={<Cartpage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />} ></Route>
          <Route path='/profile' element={<ProfilePage />} ></Route>
          <Route path='/admin/userlist' element={<UserListScreen/>} ></Route>
          <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}></Route>
          <Route
            path='/admin/productlist'
            element={<ProductListScreen/>}

          />
          <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
          <Route path='/shipping' element={<ShippingPage />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/placeorder' element={<Order />}></Route>
          <Route path='/order/:id' element={<OrderDetails />}></Route>


          <Route path="*"></Route>
        </Routes>
      </PayPalScriptProvider>

    </>
  );
}

export default App;
