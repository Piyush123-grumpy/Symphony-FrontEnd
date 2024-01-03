import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { porductListReducer, porductDetailReducer } from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducers'
import { userLoginReducer, userUpdateProfileReducer } from './reducer/userReducers'
import { userRegisterReducer } from './reducer/userReducers'
import { userDetailsReducer } from './reducer/userReducers'
import { orderCreateReducer, orderListMyReducer } from './reducer/orderReducers'
import { orderDetailsReducer } from './reducer/orderReducers'
import { orderPayReducer } from './reducer/orderReducers'
import { userListReducer } from './reducer/userReducers'
import { userDeleteReducer } from './reducer/userReducers'
import { userUpdateReducer } from './reducer/userReducers'
import { productDeleteReducer } from './reducer/productReducers'
import { productCreateReducer } from './reducer/productReducers'
import { productUpdateReducer } from './reducer/productReducers'
import { productReviewCreateReducer } from './reducer/productReducers'

const reducer = combineReducers({
    productList: porductListReducer,
    productDetail: porductDetailReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetail: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMyList: orderListMyReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const saveShippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}



const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: saveShippingAddressFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage }
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store